<template>
    <div>
        <h1>Detail</h1>
        <p>Id: {{detail.id}}</p>
        <p>Name: {{detail.name}}</p>
        <p>Created_at: {{detail.created_at}}</p>
        <p>Updated_at: {{detail.updated_at}}</p>
        <p>Status: {{detail.status}}</p>
        <button @click="changeStatus(detail.id)">Change status</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: null,
            detail: {
                id: null,
                name: null,
                created_at: null,
                updated_at: null,
                status: null
            }
        }
    },
    mounted() {
        this.id = this.$route.params.id
        if (Array.isArray(this.$store.state.todos)){
            this.$store.state.todos.forEach(element => {
                if (Object.prototype.hasOwnProperty.call(element, 'id')){
                    if (element.id == this.id){
                        this.detail = element
                    }
                }
            });
        }
    },
    methods: {
        changeStatus (id) {
            this.$store.dispatch('changeStatus', id);
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
    
}
</script>

<style scoped>
</style>