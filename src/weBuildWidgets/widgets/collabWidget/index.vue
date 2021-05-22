<template>
  <div
    @click.stop="$emit('click')"
    :class="getClass"
    :id="config.id"
    ref="widget">
    <div class="collab-row" v-for="row in config.grid" :key="row.id" :style="row.style">
      <div class="collab-column" v-for="col in row.columns" :key="col.id" :style="col.style">
        <component v-if="col.element" :is="config.elements[col.element].component" :config="elementJsonFormat(config.elements[col.element])"/>
      </div>
    </div>
  </div>
</template>

<script>
import collabBinding from './collabBinding'
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import { cloneDeep } from 'lodash'
export default {
  name: 'collabWidget',
  mixins: [common, styleMixin],
  methods: {
    elementJsonFormat (config) {
      const widgetPropertyMap = this.config.widgetPropertyMap
      const cloneConfig = cloneDeep(config)
      return collabBinding(cloneConfig, widgetPropertyMap)
    }
  }
}
</script>
