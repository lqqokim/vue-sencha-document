import TabData from './data/east-tab-data.json'
import GridData from './data/east-grid-data.json';

export default {
    getTabList() {
        return new Promise(resolve => {
            resolve(TabData.datas);
        })
    },
    getGridList() {
        return new Promise(resolve => {
            resolve(GridData);
        })
    }
}