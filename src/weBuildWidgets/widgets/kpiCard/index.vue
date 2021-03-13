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
import { addMarginStyle } from '../../utills/marginSpace'
export default {
  name: 'fbWidgetKpiCard',
  mixins: [common],
  data: () => ({
  }),
  computed: {
  },
  methods: {
    ComponentCss () {
      let css = ''
      const id = `#${this.config.id}`
      this.config.card.style = addMarginStyle(this.config.card.style)
      css += this.JsonToCss(id, this.config.card.style, css)
      css += this.JsonToCss(`${id}-title`, this.config.title.style, css)
      css += this.JsonToCss(`${id}-subtitle`, this.config.subtitle.style, css)
      css += this.JsonToCss(`${id}-value`, this.config.value.style, css)
      css += this.JsonToCss(`${id}-footer`, this.config.footer.style, css)

      const sudoStyle = this.config.sudoStyle || {}
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
