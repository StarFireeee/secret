<template>
  <div class="bg">
    <div class="login">
      <div class="title">{{ user.title }}</div>
      <el-input v-model="user.account" placeholder="账号" />
      <el-input v-model="user.password" placeholder="密码" type="password" />
      <div class="vfcode">
        <el-input v-model="user.verification" placeholder="验证码" />
        <div class="img">验证码</div>
        <span>换一张</span>
      </div>
      <div class="btn-box">
        <el-button type="primary" @click="login">登陆</el-button>
        <el-button>注册</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
interface Uesr {
  title: string
  account: string
  password: string
  verification: string
}
export default defineComponent({
  name: 'Login',
  setup() {
    const user = reactive<Uesr>({
      title: '国安系统',
      account: '',
      password: '',
      verification: '',
    })
    const login = () => {
      const { account, password, verification } = user
      console.log(account, password, verification)
    }

    return {
      user,
      login,
    }
  },
})
</script>

<style lang="less" scoped>
.bg {
  height: 100%;
  min-width: 1080px;
  min-height: 800px;
  background: url(../../assets/imgs/background-1.jpg) no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  .login {
    box-sizing: border-box;
    width: 350px;
    height: 400px;
    background: #fff;
    position: absolute;
    opacity: 0.85;
    right: 200px;
    top: 50%;
    margin-top: -250px;
    padding: 40px;
    border-radius: 20px;

    .title {
      font-weight: bold;
      color: #000;
      font-size: 36px;
      text-align: center;
      margin: 20px 0;
    }

    .vfcode {
      display: flex;
      color: #000;
      text-overflow: clip;
      .el-input {
        width: 100px;
      }
      .img {
        width: 100px;
        height: 30px;
        background: yellow;
        margin: 1px 10px;
      }
      span {
        font-size: 12px;
        text-decoration: underline;
        user-select: none;
        cursor: pointer;
        vertical-align: bottom;
        margin-top: 16px;
      }
    }

    .el-input {
      margin-bottom: 20px;
    }

    .btn-box {
      width: 212px;
      margin: 0 auto;
      .el-button {
        width: 100px;
      }
    }
  }
}
</style>
