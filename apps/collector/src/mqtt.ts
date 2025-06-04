import mqtt, { IClientOptions, MqttClient } from "mqtt";
import { getLogger } from "./logger";

/**
 * Create a new MQTT client
 * @param options - client options
 * @returns mqtt client instance
 */
export function createMqttClient(options: IClientOptions) {
  const client = mqtt.connect("mqtt://localhost:1883", options);

  return client;
}

/**
 * Push a trap to the MQTT broker
 * @param client
 */
export function publishTrap(client: MqttClient) {
  const logger = getLogger();

  const t = {
    T: 9999,
    Units: "C",
  };

  client.publish("temperature", JSON.stringify(t));

  logger.info("published", JSON.stringify(t));
}
