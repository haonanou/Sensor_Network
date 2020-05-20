# Sensor_Network

The network will consist of the following components:

Sensors: These are environmental sensors that will send updates at a regular intervals. The Thunderboard Sense 2 development board from Silicon Labs will serve as a sensor source. This board offers a range of environmental and air quality sensors and communicates wirelessly with an Internet-connected host over Low Energy Bluetooth (BLE).

Gateways: A gateway program will run at each of your homes. It will reside on your laptop or another computer such as a Raspberry Pi and connect to the sensor board over BLE. The gateway will gather sensor data at regular 5-second intervals and send this data in real-time to a cloud-based broker over MQTT, a machine-to-machine telemetry protocol. The gateway should be written in Javascript on the nodejs runtime engine. We will provide a nodejs library for connecting to the sensor board.

Cloud-based Analyser: Each group will build a Kubernetes service hosted on Google Cloud Platform. This service will consist of the following three components: an MQTT broker to receive sensor events from all the sensors in the class, an process to receive the stream of MQTT events and forward it to a time-series database (in this case InfluxDb, and a dashboard built with Grafana.
