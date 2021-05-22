import logicController from '../wb-logic-controller'

export default {
  computed: {
    getDatasocketData () {
      if (this.config.datasocket) {
        const datasocketData = logicController.GetDataSocketData(this.config.datasocket) || []
        return Array.isArray(datasocketData) ? datasocketData : []
      } else {
        return []
      }
    }
  }
}
