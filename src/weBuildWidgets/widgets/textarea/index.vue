<template>
  <textarea
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement"
    v-model="bindData"
    @keypress="upadateBindData"
    />
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'

export default {
  name: 'fbWidgetTextarea',
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
