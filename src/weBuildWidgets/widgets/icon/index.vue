<template>
  <div :class="getClass" :id="config.id" ref="widget" v-if="hideElement">
    <i :class="getIcon"></i>
  </div>
</template>

<script>
import common from '../../mixins/common'
export default {
  name: 'fbWidgetIcon',
  mixins: [common],
  data: () => ({
  }),
  computed: {
    getIcon () {
      return 'fa fa-' + this.GetValueString(this.config.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
