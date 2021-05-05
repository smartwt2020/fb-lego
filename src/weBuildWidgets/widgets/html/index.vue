<template>
  <div
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement"
    v-html="GetValueString(config.value)"/>
</template>

<script>
import common from '../../mixins/common'
export default {
  name: 'fbWidgetHtml',
  mixins: [common]
}
</script>

<style lang="scss" scoped>

</style>
