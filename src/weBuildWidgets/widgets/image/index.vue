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
import { addMarginStyle } from '../../utills/marginSpace'
export default {
  name: 'fbWidgetImage',
  mixins: [common],
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
  },
  methods: {
    ComponentCss () {
      let css = ''
      addMarginStyle(this.config.style)
      const id = `#${this.config.id}`
      const sudoStyle = this.config.sudoStyle || {}
      css += this.JsonToCss(id, { ...this.config.style, ...this.config.addOnStyle }, css)
      for (const sudoClass in sudoStyle) {
        css += this.JsonToCss(`${id}:${sudoClass}`, sudoStyle[sudoClass], css)
      }
      return css
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
