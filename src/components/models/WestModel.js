import WestData from './data/west-data.json';

export default {
  getAccordianItems() {
    return new Promise(resolve => {
      resolve(WestData.datas)
    })
  }
}