<template>
<!-- "body": {
      "property": "esrfgwergrefwe"
    },
    "property": {},
    "datasocket": {},
    "events": {} -->
  <div
    class="iterator-widget"
    :class="getClass"
    :id="config.id">
    <div class="iterator-widget__container">
      <div v-if="config.datasocket === ''" class="invalid-datasocket-text">
        No Datasocket is binded.
      </div>
      <fb-widget-collab-widget
        v-for="(childBody, index) in getDatasocketValue"
        :key="childBody.id"
        :isDaynamic="true"
        :config="getCollabData(childBody, index)"/>
    </div>
  </div>
</template>

<script>
import collabJson from '../../json/collabWidget.json'
import styleMixin from '../../mixins/styleMixins.js'
import { cloneDeep } from 'lodash'
import common from '../../mixins/common'
import chartMixins from '../../mixins/chartMixins'

export default {
  name: 'fbWidgetIterator',
  mixins: [common, styleMixin, chartMixins],
  computed: {
    getDatasocketValue () {
      return this.getDatasocketData
    }
  },
  methods: {
    getCollabData (childBody, index) {
      const collabData = cloneDeep(collabJson)
      collabData.id = this.config.id + '-collab-' + index
      collabData.class = `${this.config.id}-collab ${this.config.id}-collab-${index}`
      collabData.parent = this.config.id
      collabData.collabWidgetName = this.config.collabWidget
      collabData.widgetPropertyMap.body = cloneDeep(childBody.body) || {}
      collabData.widgetPropertyMap.property = cloneDeep(childBody.property) || {}
      collabData.widgetPropertyMap.datasocket = cloneDeep(childBody.datasocket) || {}
      collabData.widgetPropertyMap.events = cloneDeep(childBody.events) || {}
      return collabData
    }
  }
}
</script>

<style lang="scss" scoped>
.iterator-widget__container {
  height: 100%;
  width: 100%;
}
.invalid-datasocket-text {
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
