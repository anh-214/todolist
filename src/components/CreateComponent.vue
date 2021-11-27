<template>
    <div>
        <input type="text" placeholder="Nhập tên công việc" v-model="name" @keypress.enter="create">
    </div>
</template>
<script>
export default {    
    data(){
        return {
            name: null,
        }
    },
    methods: {
        
            
        create(){
            if (this.name != ''){
                this.$store.dispatch('create',this.name)
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            } else {
                alert('Không để trống')
            }
        }
    }
    
}
</script>