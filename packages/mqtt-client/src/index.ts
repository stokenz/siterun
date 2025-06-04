import mqtt, { IClientOptions, MqttClient } from "mqtt";

process.env.DEBUG = "mqttjs*";

const settings: IClientOptions = {
  keepalive: 1000,
  protocolId: "MQTT",
  protocolVersion: 5,
  clientId: "sr-t1a-abc123",
  username: "thermostat-1a",
  password: "password",
  clean: true,
  properties: {
    userProperties: {
      location: "garden",
    },
  },
  will: {
    topic: "temperature",
    payload: "offline",
    qos: 0,
    retain: true,
  },
};

const client = mqtt.connect("mqtt://localhost:1883", settings);

function sendTemperature(client: MqttClient) {
  const t = {
    batteryPercentage: Math.random() * 100,
    observedTime: new Date().toISOString(),
  };

  client.publish(
    "tenant/ajTrzsxyAT2TH64im3btt7/device/kmhrmkWSiJXfvYtBmU17E5/metric",
    JSON.stringify(t),
  );

  console.log("published", JSON.stringify(t));
}

setInterval(sendTemperature, 2000, client);

client.on("error", (error) => {
  console.error(error);
});

client.on("connect", () => {
  console.log("connected");
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
