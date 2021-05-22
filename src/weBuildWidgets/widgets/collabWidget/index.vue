<template>
  <div
    @click.stop="$emit('click')"
    :class="getClass"
    :id="config.id"
    ref="widget">
    <div class="collab-row" v-for="row in config.grid" :key="row.id" :style="row.style">
      <div class="collab-column" v-for="col in row.columns" :key="col.id" :style="col.style">
        <component :is="config.elements[col.element].component" :config="config.elements[col.element]"/>
      </div>
    </div>
  </div>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'collabWidget',
  mixins: [common, styleMixin, eventMixins]
}
</script>

<style>

</style>
