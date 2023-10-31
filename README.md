# loopback4-extension-mqtt

[![Join the chat at https://gitter.im/strongloop/loopback4-extension-mqtt](https://badges.gitter.im/strongloop/loopback4-extension-mqtt.svg)](https://gitter.im/strongloop/loopback4-extension-mqtt?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
MQTT extension for LoopBack 4

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install MqttComponent using `npm`;

```sh
$ [npm install | yarn add] @loopback/mqtt
```

## Basic Use

Configure and load MqttComponent in the application constructor
as shown below.

```ts
import {MqttComponent, MqttComponentOptions, DEFAULT_TEST_EXTENSION_OPTIONS} from '@loopback/mqtt';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: MqttComponentOptions = DEFAULT_TEST_EXTENSION_OPTIONS;
    this.configure(MqttComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(MqttComponent);
    // ...
  }
  // ...
}
```
