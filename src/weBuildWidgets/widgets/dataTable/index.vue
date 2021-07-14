<template>
  <div
    :class="getClass"
    :id="config.id"
    ref="widget"
    v-if="hideElement">
    <table>
      <thead>
        <tr>
          <th v-for="header in getHeader" :key="header.id">{{header.label}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in getTableDatasocketData" :key="row.id">
          <td v-for="header in getHeader" :key="header.id" v-html="row[header.key]" @click="emitClickEvent({column: header, row})"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import common from '../../mixins/common'
import styleMixin from '../../mixins/styleMixins.js'
import chartMixins from '../../mixins/chartMixins'
import tableMixin from '../../mixins/tableMixin'

export default {
  name: '',
  mixins: [common, styleMixin, chartMixins, tableMixin],
  data: () => ({}),
  computed: {
  },
  methods: {
    emitClickEvent (data) {
      console.log('wdef')
      this.callMethod(this.config.events.click, data)
    }
  }
}
</script>

<style lang="scss" scoped>
.fb-widget-data-table {
  overflow: auto;
  table {
    width: 100%;
    border-collapse: collapse;
  }
}
</style>
