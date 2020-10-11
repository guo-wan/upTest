<template>
  <div class="login">

    <div class="loginBox">
      <div class="img">
        <img src="../assets/logo.png">
      </div>

      <el-form ref="form" :model="form" class="form" :rules="rules">
        <el-form-item prop="name">
          <el-input v-model="form.name" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="form.passWord" show-password></el-input>
        </el-form-item>
        <el-form-item style="display: flex;justify-content: flex-end">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Home',
  data(){
    return{
      form :{
        name:'',
        passWord:''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' },

        ],


      }
    }
  },
  methods:{
    onSubmit() {
      /*this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });*/
      this.$router.push('/home')

    },
    reset(){
      this.$refs.form.resetFields();
    }
  }

}
</script>

<style lang="less" scoped>
  .login{
    background-color: #2b4b6b;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


  }
  .loginBox{
    width: 450px;
    height: 300px;
    border-radius: 5px;
    background-color: #ffffff;

  }
  .img {
    height: 100px;
    width: 100px;
    border: 10px;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0px 0px 10px #ddd;
    background-color: #ffffff;
    margin-top: -55px;
    margin-left: calc(50% - 50px);
    img {
      height: 100%;
      width: 100%;
      border-radius: 50px;
      background-color: #f5f5f5;
    }
  }
  .form{
    padding: 0 20px;
    margin-top: 20px;
  }

</style>