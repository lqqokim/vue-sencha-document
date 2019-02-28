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
        <tr ref="rows" v-for="(row, tr_index) in gridList" :key="tr_index">
          <td
            v-for="(column, td_index) in columns"
            :key="td_index"
            @click="!td_index && onclickRow(tr_index); selectedRow = row"
          >{{row[column.value]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EastModel from './../../../models/EastModel';

export default {
    data() {
        return {
            selectedColumn: null,
            selectedRow: null,
            focusedEl: null,
            columns: [],
            gridList: [],
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

            this.gridList.sort(type === 'asc' ? ascending : descending);
            this.selectedRow && this.focusRow();
        },
        focusRow() {
            this.focusedEl.classList.remove('focus');
            const focusedRowIndex = this.gridList.indexOf(this.selectedRow);
            this.focusedEl = this.$refs.rows[focusedRowIndex].children[1];
            this.focusedEl.classList.add('focus');
        },
        onclickRow(index) {
            if (this.focusedEl && this.focusedEl.classList.contains('focus')) {
                this.focusedEl.classList.remove('focus');
            }

            const selectedRowEl = this.$refs.rows[index];
            this.focusedEl = selectedRowEl.children[1];
            this.focusedEl.classList.add('focus');
        },
        errorHandler(err) {
            console.log(err);
        },
    },
    created() {
        // grid data를 가져온다.
        EastModel.getGridList()
            .then(data => {
                this.gridList = data.rows;
                this.columns = data.columns;
                this.selectedColumn = this.columns[0];
            })
            .catch(err => this.errorHandler(err));
    },
    destroyed() {
        console.log('destroy')
    }
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

td.focus {
    background-color: #c4ddf2;
}

/* table border */

tr:first-child th {
    border-top: 0;
}

tr:nth-child(2n) {
    background-color: #fafafa;
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
