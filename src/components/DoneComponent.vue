<template>
    <div>
        <h1>Done</h1>
        <table>
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>From</td>
                <td>To</td>
                <td>Hành động</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(todo, index) in todos" :key="index">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.name }}</td>
                    <td>{{ todo.from }}</td>
                    <td>{{ todo.to }}</td>
                    <td>
                        <button @click="detail(todo.id)">detail</button>
                        <button @click="changeStatus(todo.id)">change status</button>
                    </td>  
                </tr>
            </tbody>
        </table>
        <!-- <el-table
            :data="filterData(todos)"
            border
            style="width: 100%">
            <el-table-column
            prop="id"
            label="ID"
            width="80">
            </el-table-column>
            <el-table-column
            prop="name"
            label="Name"
            width="250">
            </el-table-column>
            <el-table-column
            prop="from"
            label="From"
            width="150">
            </el-table-column>
            <el-table-column
            prop="to"
            label="To"
            width="150">
            </el-table-column>
            <el-table-column
            label="Hành động">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="primary"
                    @click="handleDetail(scope.$index, scope.row)">Detail</el-button>
                    <el-button
                    size="mini"
                    type="success"
                    @click="changeStatus(scope.$index, scope.row)">Change Status</el-button>
                </template>
            </el-table-column>
        </el-table> -->
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    
    data() {
        return {
            todos: []
        }
    },
    computed: mapState({
        stateTodo: (state) => state.todos,
        lastId: (state) => state.lastId
    }),
    mounted() {
        this.todos = this.stateTodo.filter(e => e.status)
    },
    methods: {
        detail(value) {
            this.$router.push('/detail/' + value)
        },

        filterData(dataTable) {
            return dataTable.filter(data => data.status == true)
        },
        changeStatus(id) {
            this.$store.commit('changeStatus', id);
        }
    },
    watch: {
        stateTodo(value) {
            this.todos = value.filter(e => e.status)
        }
    }

}
</script>

<style scoped>
    ul {
        list-style: none;
    }
    div {
        /* border: 1px solid black; */
        width: 50%;
        padding: 20px;
    }
    td {
        cursor: pointer;
        margin-bottom: 10px;
    }
</style>