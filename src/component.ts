// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/mqtt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {
  Application,
  injectable,
  Component,
  config,
  ContextTags,
  CoreBindings,
  inject,
} from '@loopback/core';
import { MqttComponentBindings } from './keys'
import { DEFAULT_TEST_EXTENSION_OPTIONS, MqttComponentOptions } from './types';

// Configure the binding for MqttComponent
@injectable({ tags: { [ContextTags.KEY]: MqttComponentBindings.COMPONENT } })
export class MqttComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
    @config()
    private options: MqttComponentOptions = DEFAULT_TEST_EXTENSION_OPTIONS,
  ) { }
}
