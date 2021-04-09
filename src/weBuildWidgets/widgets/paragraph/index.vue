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
import { addMarginStyle } from '../../utills/marginSpace'
export default {
  name: 'fbWidgetParagraph',
  mixins: [common],
  data: () => ({
  }),
  computed: {
  },
  methods: {
    ComponentCss () {
      let css = ''
      const id = `#${this.config.id}`
      this.config.style = addMarginStyle(this.config.style)
      css += this.JsonToCss(id, { ...this.config.style, ...this.config.addOnStyle }, css)
      return css
    }
  }
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
