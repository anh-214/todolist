<template>
  <div class="hello">
      <el-button type="primary" @click="create">Thêm hoạt động</el-button>
      <div class="display">
      <todo-component></todo-component>
      <Done/>
      </div>
  </div>
</template>

<script>
import TodoComponent from './TodoComponent.vue'
import Done from './DoneComponent.vue'

export default {
  name: 'Home',
  components: {
    TodoComponent,
    Done
  },
  methods: {
    create() {
      this.$router.push('/create')
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.display {
    margin-top: 20px;
    display: flex;
  }
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
