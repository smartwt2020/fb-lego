import { setSuccessLog, setErrorLog, SetLog } from 'asw-logger'
const toStr = (data) => {
  try {
    if (typeof data === 'object') {
      return JSON.stringify(data)
    }
    return data.toString()
  } catch {
    return data
  }
}
export default {
  InvalidGetProperty: (name) => setErrorLog(`Property ${name} is invalid please check your property if it is present there`),
  PropertyUpdatedSuccessfully: (name, value) => setSuccessLog(`Property ${name} has been updated to ${toStr(value)}`),
  PropertyUpdateFailed: (name) => setErrorLog(`Property ${name} you are trying to update is invalid please check your property if it is present there`),
  MethodRunSuccessfully: (name, result) => setSuccessLog(`Method ${name} executed successfully and it's return is ${toStr(result)}`),
  MethodGetFailToRun: (name, e) => setErrorLog(`Method ${name} faild to executed full error is: <small> ${e} </small>`),
  MethodNameNotFound: (name) => setErrorLog(`Method ${name} is invalid method`),
  InvalidDataSource: (name) => setErrorLog(`Datasource ${name} you are trying to access is invalid.`),
  DatasourceUpdatedSuccessfully: (name, type, data) => setSuccessLog(`Datasource ${name} of type ${type} set with value ${toStr(data)}`),
  DatasourceUpdateFail: (name, type, error) => setErrorLog(`Datasource ${name} of type ${type} update gets failed full error is: <small>${error}</small>`),
  InvalidDataSourceUpdate: (name) => setErrorLog(`Datasource ${name} you are trying to update is invalid.`),
  DatasocketSuccessfullyRun: (name) => setSuccessLog(`Datasocket ${name} executed successfully :)`),
  DatasocketFailToRun: (name, e) => setErrorLog(`Datasocket ${name} fialed to run full Error is: ${e}`),
  InvalidDatasocket: (name) => setErrorLog(`Datasource ${name} you are tying to access is invalid`),
  FormActionSuccessfully: (data) => setSuccessLog(`Form action is successfull and responce is ${toStr(data)}`),
  FormActionFail: (e) => setErrorLog(`Form action is failed full error is: <small> ${e}</small>`),
  ApiCallSuccessfull: (url, data) => setSuccessLog(`APi call to ${url} is success and responce is ${toStr(data)}`),
  ApiCallFail: (url, data) => setErrorLog(`Api call to ${url} is fail and full Error is: ${toStr(data)}`),
  AddUserLog: (data) => SetLog({ type: 'User Log', msg: toStr(data) })
}
