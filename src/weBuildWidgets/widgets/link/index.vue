<template>
  <a
    :class="getClass"
    :id="config.id"
    ref="widget"
    :target="config.target ? '_blank' : null"
    :href="GetValueString(config.link)"
    v-if="hideElement">
    {{GetValueString(config.value)}}
  </a>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'fbWidgetLink',
  mixins: [common, styleMixin, eventMixins]
}
</script>

<style lang="scss" scoped>

</style>
