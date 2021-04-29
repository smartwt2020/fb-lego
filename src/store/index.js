import Vue from 'vue'
import Vuex from 'vuex'
import logic from './WtLogicControllerStore'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    logic,
    form: {
      state: {
        forms: {
          tempForm: { id: '6086966f8ff07336fc5773eb', name: 'form_name', description: 'form discription', rule: 'alert(JSON.stringify(data))', config: { id: '', action_bar: { style: { textAlign: 'right', fontSize: '12px' }, btn: [{ text: 'Save', id: 'action_btn-1f47f86os', style: { background: '#fd7e14', borderColor: '#fd7e14', color: '#ffffff' }, key: 'action_btn-1f47f86os' }] }, body: { 'radio-1f47druv5': [], 'multiselect-1f47ds2j5': [], 'password-1f47ds552': 'dcasdc', 'time-1f47jv1o5': '23:10', 'number-1f47jv3jn': '-66', 'text-1f47jvbuh': '' }, form_ele: { size: 16, direction: 'block', component: 'ele_container', elements: [{ id: 'radio-1f47druv5', component: 'input_radio', label: 'label', sublabel: '', imp: false, validation: 'return data', block: true, options: [], key: 'radio-1f47druv5', value: [] }, { id: 'multiselect-1f47ds2j5', component: 'input_multiselect', label: 'label', sublabel: '', imp: false, validation: 'return data', block: true, options: [], key: 'multiselect-1f47ds2j5', value: [] }, { id: 'password-1f47ds552', component: 'input_password', label: 'label', sublabel: '', imp: false, validation: 'return data', placeholder: '', block: true, key: 'password-1f47ds552', value: 'dcasdc' }, { id: 'time-1f47jv1o5', component: 'input_time', label: 'label', sublabel: '', imp: false, validation: 'return data', block: true, key: 'time-1f47jv1o5', value: '23:10' }, { id: 'number-1f47jv3jn', component: 'input_number', label: 'label', sublabel: 'efrver erve', imp: false, min: '', max: '', validation: 'return data', placeholder: '', block: true, key: 'number-1f47jv3jn', value: '-66' }, { id: 'text-1f47jvbuh', component: 'input_text', label: 'label', sublabel: 'efrver erve', imp: false, validation: 'return data', placeholder: '', block: true, key: 'text-1f47jvbuh', value: '' }] } }, created: 1619433071081, updated: 1619458698375, creator: 'shubham@maurya.com', creatorId: 1 }
        }
      }
    }
  }
})
