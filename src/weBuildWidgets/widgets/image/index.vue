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
  }
}
</script>

<style lang="scss" scoped>

</style>
