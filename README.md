# Sensor_Network

In this group project we design and build an IoT (Internet of Things) sensor network to analyze readings in real-time. The sensors will collect environmental data in our homes and send this data to a cloud-based pipeline for processing, analysis, and monitoring.

## The network will consist of the following components:

Sensors: These are environmental sensors that will send updates at a regular intervals. The Thunderboard Sense 2 development board from Silicon Labs will serve as a sensor source. This board offers a range of environmental and air quality sensors and communicates wirelessly with an Internet-connected host over Low Energy Bluetooth (BLE).

Gateways: A gateway program will run at each of group member's homes. It will reside on your laptop connect to the sensor board over BLE. The gateway will gather sensor data at regular 5-second intervals and send this data in real-time to a cloud-based broker over MQTT, a machine-to-machine telemetry protocol. 

Cloud-based Analyser: This service will consist of the following two components: an MQTT broker to receive sensor events from all the sensors in the class, an process to receive the stream of MQTT events and forward it to a time-series database InfluxDb, and a dashboard built with Grafana.

## The Sensor Network Gateway
