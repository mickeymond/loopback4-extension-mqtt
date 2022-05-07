// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: @loopback/mqtt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { BindingKey, CoreBindings } from '@loopback/core';
import { MqttComponent } from './component';

/**
 * Binding keys used by this component.
 */
export namespace MqttComponentBindings {
  export const COMPONENT = BindingKey.create<MqttComponent>(
    `${CoreBindings.COMPONENTS}.MqttComponent`,
  );
}
