import './style/index.scss'
import container from './widgets/container'

import label from './widgets/label'
import paragraph from './widgets/paragraph'
import html from './widgets/html'
import icon from './widgets/icon'

import link from './widgets/link'
import button from './widgets/button'

import image from './widgets/image'

import input from './widgets/input'
import textarea from './widgets/textarea'
import Switch from './widgets/switch'
import checkbox from './widgets/checkbox'
import select from './widgets/select'
import form from './widgets/form'

import kpiCard from './widgets/kpiCard'

import dataTable from './widgets/dataTable'

import lineChart from './widgets/lineChart'
import areaChart from './widgets/areaChart'
import barChart from './widgets/barChart'
import pieChart from './widgets/pieChart'
import donutChart from './widgets/donutChart'

import collabWidget from './widgets/collabWidget'
import modal from './widgets/modal'
import iterator from './widgets/iterator'

export default {
  install (Vue) {
    Vue.component('fbWidgetContainer', container)

    Vue.component('fbWidgetLabel', label)
    Vue.component('fbWidgetParagraph', paragraph)
    Vue.component('fbWidgetHtml', html)
    Vue.component('fbWidgetIcon', icon)

    Vue.component('fbWidgetLink', link)
    Vue.component('fbWidgetButton', button)

    Vue.component('fbWidgetImage', image)

    Vue.component('fbWidgetInput', input)
    Vue.component('fbWidgetTextarea', textarea)
    Vue.component('fbWidgetSwitch', Switch)
    Vue.component('fbWidgetCheckbox', checkbox)
    Vue.component('fbWidgetSelect', select)
    Vue.component('fbWidgetForm', form)

    Vue.component('fbWidgetKpiCard', kpiCard)

    Vue.component('fbWidgetDataTable', dataTable)

    Vue.component('fbWidgetLineChart', lineChart)
    Vue.component('fbWidgetAreaChart', areaChart)
    Vue.component('fbWidgetBarChart', barChart)
    Vue.component('fbWidgetPieChart', pieChart)
    Vue.component('fbWidgetDonutChart', donutChart)

    Vue.component('fbWidgetCollabWidget', collabWidget)
    Vue.component('fbWidgetModal', modal)
    Vue.component('fbWidgetIterator', iterator)
  }
}
