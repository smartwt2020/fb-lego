<template>
  <div ref="chart"></div>
</template>

<script>
import ApexCharts from 'apexcharts'
export default {
  name: '',
  props: {
    data: {
      type: [Array, Object],
      default: () => ([])
    },
    configuration: {
      type: [Array, Object],
      default: () => ([])
    }
  },
  data: () => ({
    chart: null
  }),
  computed: {
    getOptions () {
      return JSON.parse(JSON.stringify(this.configuration))
    }
  },
  watch: {
    data: {
      deep: true,
      handler () {
        this.chartUpdateData()
      }
    },
    configuration: {
      deep: true,
      handler () {
        this.chartSetOption()
      }
    }
  },
  methods: {
    chartGenerate () {
      this.chart = new ApexCharts(this.$refs.chart, this.getOptions)
    },
    chartRender () {
      this.chart.render()
    },
    chartSetOption () {
      this.chart.updateOptions(this.getOptions)
      this.chartUpdateData()
    },
    chartUpdateData () {
      this.chart.updateSeries(this.data)
    }
  },
  mounted () {
    this.chartGenerate()
    this.chartRender()
    this.chartUpdateData()
  },
  beforeDestroy () {
    this.chart.destroy()
  }
}
</script>

<style lang="scss" scoped>

</style>
