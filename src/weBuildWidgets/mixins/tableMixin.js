export default {
  computed: {
    getHeader () {
      if (this.config.header.length) {
        return this.config.header
      }
      return Object.keys(this.getTableDatasocketData[0]).map(e => ({
        label: e,
        key: e,
        sortable: false,
        datatype: 'string'
      }))
    },
    getTableDatasocketData () {
      const defaultData = [{ 'Empty Table': this.config.datasocket ? this.config.noDataText : 'No data socket is binded' }]
      return this.getDatasocketData.length ? this.getDatasocketData : defaultData
    }
  }
}
