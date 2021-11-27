<template>
  <div class="hello">
      <button @click="create">Tạo mới</button>
      <div class="display">
      <Todo/>
      <Done/>
      </div>
  </div>
</template>

<script>
import Todo from './TodoComponent.vue'
import Done from './DoneComponent.vue'

export default {
  name: 'Home',
  components: {
    Todo,
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
    margin-top: 50px;
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
