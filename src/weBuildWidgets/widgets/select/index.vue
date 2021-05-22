<template>
  <select
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement"
    v-model="bindData"
    @change="upadateBindData">
    <option v-for="(value, key) in getOptions" :key="key" :value="value">
      {{key}}
    </option>
  </select>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'fbWidgetSelect',
  mixins: [common, styleMixin, eventMixins],
  data: () => ({
    bindData: ''
  }),
  watch: {
    getBindData (val) {
      if (val !== this.bindData) {
        this.bindData = val
      }
    }
  },
  computed: {
    getBindData () {
      return this.config.bindProperty ? this.getVariableData(this.config.bindProperty) : ''
    },
    getOptions () {
      if (!this.config.hasDaynamicOptions) {
        return this.config.options
      } else {
        const options = this.config.options ? this.getVariableData(this.config.options) : {}
        if (Array.isArray(options)) {
          const returnObj = {}
          for (const i in options) {
            const value = options[i]
            returnObj[value] = value
          }
          return returnObj
        } else if (typeof options === 'object' && options !== null) {
          return options
        } else {
          return {}
        }
      }
    }
  },
  methods: {
    upadateBindData () {
      if (this.config.bindProperty) {
        this.setVaiableData(this.config.bindProperty, this.bindData)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
