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
export default {
  name: 'fbWidgetContainer',
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
