<template>
    <div class="create">
        <!-- <input type="text" placeholder="Nhập tên công việc" v-model="name" @keypress.enter="create"> -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="Tên hoạt động" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Thời gian bắt đầu" required prop="from">
                <el-date-picker
                v-model="ruleForm.from"
                type="datetime"
                placeholder="Select date and time">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="Thời gian kết thúc" required prop="to">
                <el-date-picker
                v-model="ruleForm.to"
                type="datetime"
                placeholder="Select date and time" >
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Thêm hoạt động</el-button>
                <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
            
        </el-form>
    </div>
</template>
<script>
export default {    
    data(){
        return {
            ruleForm: {
                name: '',
                from: '',
                to: '',
            },
            rules: {
                name: [
                    { required: true, message: 'vui lòng nhập tên hoạt động', trigger: 'blur' },
                    { min: 5, message: 'Tói thiểu 5 kí tự', trigger: 'blur' }
                ],
                from: [
                    { type: 'date', required: true, message: 'Vui lòng chọn thời gian bắt đầu', trigger: 'change' }
                ],
                to: [
                    { type: 'date', required: true, message: 'Vui lòng chọn thời gian kết thúc', trigger: 'change' }
                ],
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$store.dispatch('create',this.ruleForm)
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    // watch: {
    //     from(value) {
    //         alert(Date.parse(value))
    //     }
    // }
    
}
</script>
<style>
    .create {
        width: 40%;
        margin: auto;
        background-color: lightblue;
        padding: 30px;
        border-radius: 15px;
    }
    .demonstration {
        margin-right: 20px;
    }
    .block {
        margin-top: 20px;
        width: 100%;
    }
    .el-button {
        margin-top: 20px;
    }
</style>