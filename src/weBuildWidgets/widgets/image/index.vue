<template>
    <div
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement"
  >
    <img :src='GetValueString(config.src)'  :width="fitImage">
  </div>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'fbWidgetImage',
  mixins: [common, styleMixin, eventMixins],
  data: () => ({
  }),
  computed: {
    fitImage () {
      if (this.config.fit) {
        return '100%'
      } else {
        return 'auto'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
