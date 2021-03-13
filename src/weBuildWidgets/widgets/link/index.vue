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
export default {
  name: 'fbWidgetLink',
  mixins: [common],
  data: () => ({
  }),
  computed: {
  },
  methods: {
    ComponentCss () {
      let css = ''
      const id = `#${this.config.id}`
      css += this.JsonToCss(id, { ...this.config.style, ...this.config.addOnStyle }, css)
      return css
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
