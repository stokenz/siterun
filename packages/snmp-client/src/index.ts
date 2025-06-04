import snmp from "net-snmp";

const options: snmp.SessionOptions = {
  port: 1610,
  retries: 1,
  timeout: 5000,
  backoff: 1.0,
  transport: "udp4",
  trapPort: 1620,
  version: snmp.Version2c,
  backwardsGetNexts: true,
  reportOidMismatchErrors: false,
};

var session = snmp.createSession("127.0.0.1", "public", options);

function sendTrap(session: snmp.Session) {
  session.trap(snmp.TrapType.ColdStart, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("sent trap");
    }
  });
}

setInterval(sendTrap, 2000, session);
