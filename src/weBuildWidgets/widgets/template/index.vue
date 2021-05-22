<template>
  <div></div>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: '',
  mixins: [common, styleMixin, eventMixins],
  data: () => ({
  }),
  computed: {
  },
  methods: {
    ComponentCss () {
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
