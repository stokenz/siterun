import snmp from "net-snmp";

/**
 * Creates a new SNMP trap receiver
 * @param options - config
 * @param callback - function to call when a trap is received
 * @returns trap receiver instance
 */
export function createSnmpReceiver(
  options: snmp.ReceiverOptions,
  callback: snmp.SessionTrapCallback,
) {
  const receiver = snmp.createReceiver(options, callback);

  receiver.getAuthorizer().addCommunity("public");
  receiver.getAuthorizer().addCommunity("private");

  return receiver;
}
