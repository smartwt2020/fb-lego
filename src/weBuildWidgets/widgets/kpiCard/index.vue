<template>
  <div
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement">
    <p :id="`${config.id}-title`" v-html="config.title.value"/>
    <p :id="`${config.id}-subtitle`" v-html="config.subtitle.value"/>
    <p :id="`${config.id}-value`" v-html="config.value.value" />
    <p :id="`${config.id}-footer`" v-html="config.footer.value" />
  </div>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'fbWidgetKpiCard',
  mixins: [common, styleMixin, eventMixins]
}
</script>

<style lang="scss" scoped>

</style>
