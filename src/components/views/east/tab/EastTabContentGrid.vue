<template>
  <div class="tab-content">
    <table>
      <thead>
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="index"
            @click="onClickHeader(column, index); selectedColumn = column"
            :class="{'active':selectedColumn === column}"
          >
            <div class="column">{{ column.header }}</div>
            <span class="arrow" :class="{ 'desc': !column.isAscending }"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in gridRows" :key="index">
          <td :class="[`${index}`]" v-for="(column, index) in columns" :key="index" @click="!index && onclickRow(row)">{{row[column.value]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            selectedColumn: null,
            columns: [
                {
                    header: 'Name',
                    value: 'name',
                    isAscending: true,
                },
                {
                    header: 'Value',
                    value: 'value',
                    isAscending: true,
                },
            ],
            gridRows: [
                {
                    name: '(name)',
                    value: 'Properties Grid',
                },
                {
                    name: 'autoFitColumns',
                    value: 'true',
                },
                {
                    name: 'borderWidth',
                    value: '1',
                },
                {
                    name: 'created',
                    value: `${new Date().toLocaleString().slice(0, 10)}`,
                },
                {
                    name: 'grouping',
                    value: 'false',
                },
                {
                    name: 'productionQuality',
                    value: 'false',
                },
                {
                    name: 'tested',
                    value: 'false',
                },
                {
                    name: 'version',
                    value: '0.01',
                },
            ],
        };
    },
    methods: {
        onClickHeader(column, index) {
            let sortType;

            if (this.selectedColumn === column) {
                // 선택했던 Column을 다시 선택
                this.columns[index].isAscending = !this.columns[index]
                    .isAscending;

                sortType = this.columns[index].isAscending ? 'asc' : 'desc';
            } else {
                // 다른 Column 선택
                this.columns.map(column => {
                    // asc로 초기화
                    !column.isAscending && (column.isAscending = true);
                });

                sortType = 'asc';
            }

            this.sortByColumn(column.value, sortType);
        },
        sortByColumn(key, type) {
            function ascending(a, b) {
                if (a[key] > b[key]) return 1;
                if (a[key] < b[key]) return -1;
                return 0;
            }

            function descending(a, b) {
                if (a[key] < b[key]) return 1;
                if (a[key] > b[key]) return -1;
                return 0;
            }

            this.gridRows.sort(type === 'asc' ? ascending : descending);
        },
        onclickRow(row) {
            console.log(row);
        }
    },
    updated() {
        console.log('update');
    },
    created() {
        this.selectedColumn = this.columns[0];
    },
    destroyed() {
        console.log('destroy');
    },
};
</script>

<style scoped>
/* tablw */

table {
    border-collapse: collapse;
    width: 100%;
    cursor: default;
}

td,
th {
    border: 1px solid rgb(230, 230, 230);
    /* border: 2px solid rgb(241, 241, 241); */
}

th {
    color: #666666;
    background-color: #f5f5f5;
    font: bold 13px/15px helvetica, arial, verdana, sans-serif;
    padding: 7px 0 7px 10px;
    text-overflow: ellipsis;
}

th:hover {
    background-color: #eef6fb;
}

th.active {
    background-color: #eef6fb;
}

td {
    height: 20px;
    text-overflow: ellipsis;
    padding: 2px 5px 3px 10px;
    font: normal 13px/15px helvetica, arial, verdana, sans-serif;
}

/* table border */

tr:first-child th {
    border-top: 0;
}

tr:nth-child(2n) {
    background-color: #FAFAFA;
}

td:first-child,
th:first-child {
    border-left: 0;
}

td:last-child,
th:last-child {
    border-right: 0;
}

.column {
    float: left;
}

/* sort button */

th.active .arrow {
    background-image: url(./../../../../assets/icons/sort-asc.png);
    float: left;
    width: 16px;
    height: 16px;
    margin-left: 1px;
}

th.active .arrow.desc {
    background-image: url(./../../../../assets/icons//sort-desc.png);
    float: left;
    width: 16px;
    height: 16px;
    margin-left: 1px;
}
</style>
