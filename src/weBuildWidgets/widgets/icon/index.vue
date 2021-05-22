<template>
  <div :class="getClass" :id="config.id" ref="widget" v-if="hideElement">
    <i :class="getIcon"></i>
  </div>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'fbWidgetIcon',
  mixins: [common, styleMixin, eventMixins],
  data: () => ({
  }),
  computed: {
    getIcon () {
      return 'fa fa-' + this.GetValueString(this.config.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
