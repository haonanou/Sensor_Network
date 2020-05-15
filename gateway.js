// Create a ThunderboardReact object
var ThunderboardReact = require('node-thunderboard-react');
var thunder = new ThunderboardReact();

var Latitude = '40.6407855'
var Longitude =  '-74.0124925'
// gateway.js
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://mqtt.eclipse.org')

// Initialize the ThunderboardReact object
thunder.init((error) => {
  // Discover the Thunderboard React Board Kit
  thunder.startDiscovery((device) => {
    console.log('- Found ' + device.localName);
    // Stop the discovery process
    thunder.stopDiscovery();
    // Connect to the found device
    device.connect((error) => {
      console.log('- Connected ' + device.localName);
      // Get the sensored data
      setInterval( () =>  {getEnvironmentalSensing(device)}, 5000);
    });
  });
});

// Get the sensored data
function getEnvironmentalSensing(device) {
    device.getEnvironmentalSensing((error, res) => {
      // Show the data
      client.publish('dse-i2400/hao/bedroom/Latitude', Latitude)
      client.publish('dse-i2400/hao/bedroom/Longitude', Longitude)
      client.publish('dse-i2400/hao/bedroom/Temperature', res.temperature.toString())
      client.publish('dse-i2400/hao/bedroom/Pressure', res.pressure.toString())
      client.publish('dse-i2400/hao/bedroom/Humidity', res.humidity.toString())
      client.publish('dse-i2400/hao/bedroom/UV_Index', res.uvIndex.toString())
      client.publish('dse-i2400/hao/bedroom/Light', res.light.toString())
      client.publish('dse-i2400/hao/bedroom/Sound', res.sound.toString())
    });
  }

  client.on('connect', () => {
    console.log('- Connected Status: ' + client.connected);
    client.subscribe('dse-i2400/hao/bedroom/#');
  })
  
  client.on('message', (topic, message) => {
    console.log('received message %s %s', topic, message)
  })


