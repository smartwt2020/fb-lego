<template>
  <button :class="getClass" :id="config.id" ref="widget" v-if="hideElement">
    {{GetValueString(config.value)}}
  </button>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'fbWidgetButton',
  mixins: [common, styleMixin, eventMixins]
}
</script>

<style lang="scss" scoped>

</style>
