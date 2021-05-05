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
export default {
  name: 'fbWidgetKpiCard',
  mixins: [common]
}
</script>

<style lang="scss" scoped>

</style>
