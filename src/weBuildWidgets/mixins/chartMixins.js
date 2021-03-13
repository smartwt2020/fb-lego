import logicController from '../wb-logic-controller'

export default {
  computed: {
    getDatasocketData () {
      if (this.config.datasocket) {
        return logicController.GetDataSocketData(this.config.datasocket) || []
      } else {
        return []
      }
    }
  }
}
