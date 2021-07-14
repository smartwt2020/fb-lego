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
    },
    collabWidget: {
      state: {
        collabWidgets: {
          tempCollabWidget: {
            id: 'aewfwasrvfsacsa',
            name: 'tempCollabWidget',
            direction: 'just for test',
            widgetPropertyMap: {
              body: {
                property: ''
              },
              property: {},
              datasocket: {
                datasocket: ''
              },
              events: {}
            },
            elements: {
              label: {
                id: 'data-table-ASDFGHJKKL',
                class: 'data-table-ASDFGHJKKL',
                name: '',
                discription: '',
                component: 'fb-widget-data-table',
                parent: '',
                type: 'content',
                show: '',
                datasocket: 'datasocket',
                noDataText: 'No Data found',
                header: [],
                style: {
                  table: {
                    fontFamily: '',
                    background: 'transparent',
                    padding: '2px',
                    margin: '0px',
                    borderWidth: '0px',
                    borderStyle: 'solid',
                    borderColor: '#000000',
                    borderRadius: '5px',
                    textShadow: '0px 0px 0px #000000',
                    boxShadow: '0px 0px 0px 0px #000000',
                    cursor: 'pointer',
                    width: 'calc(100% - 0px - 0px )',
                    overflow: 'auto',
                    height: 'calc(100% - 0px - 0px )'
                  },
                  th: {
                    fontSize: '14px',
                    fontWeight: 'normal',
                    textAlign: 'left',
                    color: '#6f6f6f',
                    background: '#e8e8e8',
                    textDecoration: 'none',
                    fontStyle: 'normal',
                    padding: '5px 0px 5px 10px',
                    borderWidth: '0px 0px 1px 0px',
                    borderStyle: 'solid',
                    borderColor: '#b9b9b9'
                  },
                  td: {
                    fontSize: '12px',
                    fontWeight: 'normal',
                    textAlign: 'left',
                    color: '#818181',
                    background: '#fafafa',
                    textDecoration: 'none',
                    fontStyle: 'normal',
                    padding: '10px',
                    borderWidth: '0px 0px 1px 0px',
                    borderStyle: 'solid',
                    borderColor: '#b9b9b9'
                  }
                },
                events: {
                  click: ''
                },
                sudoStyle: {},
                addOnStyle: {},
                staticStyle: ''
              }
            },
            grid: [
              {
                style: {
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItem: 'flex-start',
                  flexWrap: 'wrap',
                  height: '100%',
                  width: '100%'
                },
                columns: [
                  {
                    style: {
                      height: '100%',
                      width: '100%'
                    },
                    element: 'label'
                  }
                ]
              }
            ],
            created: 1619433071081,
            updated: 1619458698375,
            creator: 'shubham@maurya.com',
            creatorId: 1
          }
        }
      }
    }
  }
})
