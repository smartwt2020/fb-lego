<template>
  <apex-chart :data="getData" :configuration="getConfig"/>
</template>

<script>
import apexChart from '../../plugins/components/apexChart.vue'
import common from '../../mixins/common'
import chartMixins from '../../mixins/chartMixins'
import { getData } from '../../utills/chart'
import styleMixin from '../../mixins/styleMixins.js'
import eventMixins from '../../mixins/eventMixin.js'
export default {
  name: 'fbWidgetAreaChart',
  components: { apexChart },
  mixins: [common, chartMixins, styleMixin, eventMixins],
  computed: {
    getConfig () {
      const _c = this.config.configuration
      return {
        chart: {
          type: 'area',
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
        dataLabels: {
          enabled: _c.showLabel
        },
        grid: {
          show: _c.showGridX || _c.showGridY,
          xaxis: {
            lines: {
              show: _c.showGridX
            }
          },
          yaxis: {
            lines: {
              show: _c.showGridY
            }
          }
        },
        legend: {
          show: _c.showLegend,
          position: _c.legendPosition
        },
        markers: {
          size: _c.markerSize,
          shape: _c.markerType
        },
        noData: {
          text: this.GetValueString(_c.noDataText)
        },
        stroke: {
          show: _c.showStroke,
          curve: _c.strokeType,
          width: _c.strokeWidth
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
        xaxis: {
          type: _c.xaxisType,
          labels: {
            show: _c.showAxisXLabel
          },
          axisBorder: {
            show: _c.showAxisX
          },
          tooltip: {
            enabled: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: _c.showAxisYLabel
          },
          axisBorder: {
            show: _c.showAxisY
          },
          tooltip: {
            enabled: false
          }
        },
        axisTicks: {
          show: false
        },
        plotOptions: {
          area: {
            fillTo: _c.areaFillTo
          }
        }
      }
    },
    getData () {
      return getData(this.getDatasocketData, false, 'lineChart')
    }
  }

}
</script>

<style>

</style>
