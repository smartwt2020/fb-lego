<template>
  <div
    class="collab-widget-container"
    :class="getClass"
    :id="config.id"
    ref="widget">
    <div v-if="!collabBinded" class="invalid-collab-text">
      No Collab Widget Is Binded
    </div>
    <div  v-else-if="!getCollabConfig" class="invalid-collab-text">
      Collab widget {{config.collabWidgetName}} is invalid Collab.
    </div>
    <div v-else class="collab-row" v-for="row in getCollabConfig.grid" :key="row.id" :style="row.style">
      <div class="collab-column" v-for="col in row.columns" :key="col.id" :style="col.style">
        <component v-if="col.element" :is="getCollabConfig.elements[col.element].component" :config="elementJsonFormat(getCollabConfig.elements[col.element])"/>
      </div>
    </div>
  </div>
</template>

<script>
import collabBinding from './collabBinding'
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import { cloneDeep } from 'lodash'
import collabController from '../../wb-logic-controller/index.js'

export default {
  name: 'collabWidget',
  mixins: [common, styleMixin],
  props: {
    isDaynamic: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    elementJsonFormat (config) {
      const widgetPropertyMap = this.config.widgetPropertyMap || {}
      const cloneConfig = cloneDeep(config)
      return collabBinding(cloneConfig, widgetPropertyMap)
    }
  },
  computed: {
    collabBinded () {
      return this.config.collabWidgetName !== ''
    },
    getCollabConfig () {
      if (this.collabBinded) {
        const collabWidget = collabController.GetCollabWidgetConfig(this.config.collabWidgetName)
        if (collabWidget) {
          return collabWidget
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.collab-widget-container {
}
.invalid-collab-text {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: #d2691f;
  align-content: stretch;
  align-items: center;
  font-size: 18px;
}
</style>
