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
  name: 'fbWidgetParagraph',
  mixins: [common]
}
</script>

<style lang="scss" scoped>
img {
  max-width: calc(100% - 30px);
  width: auto;
  display: block;
  margin: 0px auto;
}
</style>
