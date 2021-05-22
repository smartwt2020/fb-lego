<template>
  <div
    @click.stop="$emit('click')"
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement">
    <slot/>
  </div>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'fbWidgetContainer',
  mixins: [common, styleMixin, eventMixins]
}
</script>

<style lang="scss" scoped>

</style>
