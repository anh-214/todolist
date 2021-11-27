<template>
    <div>
        <h1>Todo</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            <tbody>
                <tr v-for="(value,index) in todos" v-show="!value.status" :key="index">
                    <td>{{value.id}}</td>
                    <td @click="detail(value.id)">{{value.name}}</td>
                </tr>
            </tbody>
        </table>
            
    </div>
</template>
<script>
export default {
    data() {
        return {
            todos: null
        }
    },
    mounted() {
        this.todos = this.$store.state.todos
    },
    methods: {
        detail(value) {
            this.$router.push('/detail/' + value)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
    div {
        border: 1px solid black;
        width: 50%;
        padding: 20px;
    }
    td {
        cursor: pointer;
        margin-bottom: 10px;
    }
</style>