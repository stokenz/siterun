import { getLogger } from "./logger";
import { createMqttClient, publishTrap } from "./mqtt";
import { createSnmpReceiver } from "./snmp";
import { AccessControlModelType } from "net-snmp";

function main() {
  const logger = getLogger();

  logger.info("starting");

  process.env.DEBUG = "mqttjs*";

  const {
    MQTT_HOST = "localhost",
    MQTT_PORT = "1883",
    MQTT_USERNAME = "thermostat-1a", // random username
    MQTT_PASSWORD = "password", // random password
    MQTT_CLIENT_ID = "org123_col123", // org_collector
    SNMP_HOST = "localhost",
    SNMP_PORT = "1620",
    SNMP_DISABLE_AUTH = "0",
  } = process.env;

  const client = createMqttClient({
    keepalive: 1000,
    host: MQTT_HOST,
    port: parseInt(MQTT_PORT),
    protocolId: "MQTT",
    protocolVersion: 5,
    clientId: MQTT_CLIENT_ID,
    username: MQTT_USERNAME,
    password: MQTT_PASSWORD,
    clean: true,
    will: {
      topic: "collector",
      payload: "offline",
      qos: 0,
      retain: true,
    },
  });

  const onSnmpTrap = (error: any, notification: any) => {
    if (error) {
      logger.error(error);
    } else {
      logger.info(JSON.stringify(notification, null, 2));

      publishTrap(client);
    }
  };

  client.on("error", (error) => {
    logger.error(error);
  });

  client.on("connect", () => {
    logger.info("connected to mqtt broker");

    const receiver = createSnmpReceiver(
      {
        address: SNMP_HOST,
        port: parseInt(SNMP_PORT),
        disableAuthorization: SNMP_DISABLE_AUTH === "1",
        includeAuthentication: false,
        accessControlModelType: AccessControlModelType.Simple,
        engineID: "8000B98380XXXXXXXXXXXXXXXXXXXXXXXX", // where the X's are random hex digits
        transport: "udp4",
      },
      onSnmpTrap,
    );

    logger.info("created snmp receiver");

    // Subscribe to device topic
    // Triggers resync of devices to this collector
    client.subscribe(
      `collector/${MQTT_CLIENT_ID}/device`,
      { qos: 1 },
      (err, granted) => {
        if (err) {
          logger.error(err);
        } else {
          logger.info("subscribed to device topic");
        }
      },
    );
  });

  client.on("message", (topic, message) => {
    switch (topic) {
      case `collector/${MQTT_CLIENT_ID}/device`:
        logger.info("resyncing devices");
        break;
      default:
        logger.info(message.toString());
    }

    client.end();
  });
}

try {
  main();
} catch (error) {
  // Todo: report error to sentry
  console.error(error);
}
