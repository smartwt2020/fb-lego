<template>
  <apex-chart
    :class="getClass"
    :id="config.id"
    ref="widget"
    :data="getData"
    :configuration="getConfig"/>
</template>

<script>
import apexChart from '../../plugins/components/apexChart.vue'
import common from '../../mixins/common'
import chartMixins from '../../mixins/chartMixins'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'fbWidgetPieChart',
  components: { apexChart },
  mixins: [common, chartMixins, styleMixin, eventMixins],
  computed: {
    getConfig () {
      const _c = this.config.configuration
      return {
        chart: {
          type: 'pie',
          animations: {},
          background: _c.backgroundColor,
          fontFamily: _c.fontFamily,
          foreColor: _c.chartTextColor,
          height: '100%',
          id: this.config.id,
          redrawOnParentResize: true,
          redrawOnWindowResize: true,
          sparkline: {
            enabled: _c.isSparkline
          },
          dataLabels: {
            enabled: _c.showDataLable
          },
          toolbar: {
            show: _c.showToolBar,
            tools: {
              download: _c.toolbar.download,
              selection: _c.toolbar.selection,
              zoom: _c.toolbar.zoom,
              pan: _c.toolbar.pan,
              reset: _c.toolbar.reset
            }
          }
        },
        labels: this.getLabel,
        dataLabels: {
          enabled: _c.showLabel
        },
        legend: {
          show: _c.showLegend,
          position: _c.legendPosition
        },
        noData: {
          text: this.GetValueString(_c.noDataText)
        },
        theme: {
          mode: _c.mode,
          palette: _c.palette
        },
        title: {
          text: _c.title,
          align: _c.titleAlign,
          style: {
            fontSize: _c.titleSize
          }
        },
        tooltip: {
          enabled: _c.showTooltip
        },
        series: [
          {
            data: []
          }
        ],
        plotOptions: {
          pie: {
            startAngle: _c.startAngle,
            endAngle: _c.endAngle
          }
        }
      }
    },
    getData () {
      return this.getDatasocketData.map(e => e.y || e.value) || []
    },
    getLabel () {
      return this.getDatasocketData.map(e => e.x || e.label) || []
    }
  }

}
</script>

<style>

</style>
