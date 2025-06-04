declare module "net-snmp" {
  type OidStringList = string[];

  interface VarBind {
    oid: string;
    type: ObjectType;
    value: string;
  }

  type VarBindList = VarBind[];

  interface SessionGetCallback {
    (error: any, varbinds: VarBindList): void;
  }

  enum ObjectType {
    Boolean = 1,
    Integer = 2,
    BitString = 3,
    OctetString = 4,
    Null = 5,
    OID = 6,
    IpAddress = 64,
    Counter = 65,
    Gauge = 66,
    TimeTicks = 67,
    Opaque = 68,
    Counter64 = 70,
    NoSuchObject = 128,
    NoSuchInstance = 129,
    EndOfMibView = 130,
  }

  enum TrapType {
    ColdStart = 0,
    WarmStart = 1,
    LinkDown = 2,
    LinkUp = 3,
    AuthenticationFailure = 4,
    EgpNeighborLoss = 5,
    EnterpriseSpecific = 6,
  }

  enum AccessControlModelType {
    None = 0,
    Simple = 1,
  }

  interface SessionTrapCallback {
    (error: any, notification: any): void;
  }

  enum Version {
    Version1 = 0,
    Version2c = 1,
    Version3 = 3,
  }

  type TransportFamily = "udp4";

  interface SessionOptions {
    version?: Version;
    transport?: TransportFamily;
    port?: number;
    trapPort?: number;
    retries?: number;
    timeout?: number;
    backoff?: number;
    upTime?: number;
    nonRepeaters?: number;
    maxRepetitions?: number;
    sourceAddress?: string;
    sourcePort?: string;
    idBitsSize?: string;
    context?: string;
    backwardsGetNexts?: boolean;
    reportOidMismatchErrors?: boolean;
  }

  /**
   * This object contains constants to specify the security of an SNMPv3 message as per RFC 3414
   */
  enum SecurityLevel {
    /**
     * no message authentication or encryption
     */
    noAuthNoPriv = 1,

    /**
     * message authentication and no encryption
     */
    authNoPriv = 2,

    /**
     * message authentication and encryption
     */
    authPriv = 3,
  }

  enum PrivProtocols {
    none = "1",
    des = "2",
    aes = "4",
    aes256b = "6",
    aes256r = "8",
  }

  enum AuthProtocols {
    none = "1",
    md5 = "2",
    sha = "3",
    sha224 = "4",
    sha256 = "5",
    sha384 = "6",
    sha512 = "7",
  }

  interface User {
    name: string;
    privProtocol?: PrivProtocols;
    privKey?: string;
    authProtocol?: AuthProtocols;
    authKey?: string;
    level?: SecurityLevel;
  }

  export class Session {
    target: string;
    version: Version;
    get(oids: OidStringList, callback: SessionGetCallback);
    getNext(oids: OidStringList, callback: SessionGetCallback);
    trap(trapType: TrapType, callback: SessionTrapCallback);
    close(): void;
    static create(
      target: string,
      community?: string,
      options?: SessionOptions,
    ): Session;
    static createV3(
      target: string,
      user: User,
      options?: SessionOptions,
    ): Session;
  }

  export function createSession(
    target: string,
    community?: string,
    options?: SessionOptions,
  ): Session;
  export function createV3Session(
    target: string,
    user: User,
    options?: SessionOptions,
  ): Session;

  export function isVarbindError(error: any): boolean;
  export function varbindError(error: any): string;

  export class Authorizer {
    communities: any[];
    users: any[];
    disableAuthorization: boolean;
    accessControlModelType: AccessControlModelType;
    addCommunity(community: string): void;
    getCommunity(community: string): any;
    getCommunities(): any[];
    deleteCommunity(community: string): void;
    addUser(user: User): void;
    getUser(user: string): any;
    getUsers(): any[];
    deleteUser(user: string): void;
    static create(): Authorizer;
    getAccessControlModelType(): AccessControlModelType;
    getAccessControlModel(): any;
    isAccessAllowed(
      securityModel: string,
      securityName: string,
      pduType: string,
      pduData: any,
    ): boolean;
  }

  export class Engine {
    engineID: string;
    engineTime: number;
    engineBoots: number;
    static create(): Engine;
    generateEngineID(): void;
  }

  export class Listener {
    receiver: Receiver;
    callback: any;
    disableAuthorization: boolean;
    socketOptions: any;
    static create(): Listener;
  }

  type ReceiverOptions = Partial<{
    debug: boolean;
    engineID: string;
    transport: TransportFamily;
    port: number;
    disableAuthorization: boolean;
    includeAuthentication: boolean;
    context: string;
    accessControlModelType: AccessControlModelType;
    address: string | null;
  }>;

  export class SimpleResponsePdu {
    id: number;

    errorStatus: number;
    errorIndex: number;

    varbinds: any[];
    options: any;
  }

  export class Receiver {
    authorizer: Authorizer;
    engine: Engine;

    engineBoots: number;
    engineTime: number;
    disableAuthorization: boolean;

    callback: SessionTrapCallback;
    family: TransportFamily;
    port: number;

    context: string;
    listener: Listener;

    getAuthorizer(): Authorizer;
    onMsg(): Session;
    formatCallbackData(): Session;
    close(): Session;
    static create(
      options: ReceiverOptions,
      callback: (err: Error | null, pdu: SimpleResponsePdu) => void,
    ): Receiver;
  }

  export const createReceiver = Receiver.create;
}
