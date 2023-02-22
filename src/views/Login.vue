<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter()
const user = ref('')
const name = ref('')
const password = ref('')
const repeat = ref('')
const host = 'https://db-api.amarea.cn'

function login() {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  let requestOptions = { // 里面不能有body
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }
  fetch(`${host}/users/${user.value}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.id === user.value) {   // 验证是否存在该用户return data
        } else {
          throw new Error("用户名不存在")
        }
        if (data.password === password.value) {
          router.push({
            name: "KuangJia",
            console.log('123'),
            params: {
              id: data.id,
            }
          })
        } else {
          throw new Error("密码错误")
        }
      })
      .catch(err => alert(err))
}

function sign() {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  }
  requestOptions.body = JSON.stringify({
    id: user.value,
    name: name.value,
    password: password.value,
  });
  if (repeat.value !== password.value) {
    alert("两次输入的密码不一致，请检查")
  } else {
    fetch(`${host}/users`, requestOptions) // 这里的网址没有id
        .then(response => response.json())
        .then(data => alert(data.id+"，注册成功"))
  }
}

</script>

<template>
    <div id="background">
        <div id="logo">Ranger_system</div>
        <div id="container">
            <div id="login">
                <el-card class="box-card" id="card_login">
                    <div id="form">
                        <el-input v-model="user" placeholder="请输入用户名"></el-input>
                        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                        <el-button type="primary" @click="login">登录</el-button>
                        <el-button id="turn_l" type="primary" @click="handleFlip">点击注册</el-button>
                        <p id="p_login">还没有账号？→</p>
                    </div>
                </el-card>
            </div>
            <div id="sign">
                <el-card class="box-card" id="card_sign">
                    <div id="form">
                        <el-input v-model="user" placeholder="请输入用户名"></el-input>
                        <el-input v-model="name" placeholder="请输入昵称"></el-input>
                        <el-input type="password" placeholder="请输入密码" v-model="password" show-password></el-input>
                        <el-input type="password" placeholder="请再次输入密码" v-model="repeat" show-password></el-input>
                        <el-button type="primary" @click="sign">注册</el-button>
                        <el-button id="turn_s" type="primary" @click="handleFlip">点击登录</el-button>
                        <p id="p_sign">已有账号？→</p>
                    </div>
                </el-card>
            </div>
        </div>
        <div id="clock">
            <div id="time">{{time}}</div>
            <div id="date">{{date}}</div>
        </div>
        <div id="copyright">Copyright © 2022 Ranger_C-137 .All Right Reserved.</div>
    </div>
</template>

<style scoped>
#background{
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
        90deg,
        cyan,
        purple
    );
    background-size: 400%;
    animation: myanimation 10s infinite;
}
@keyframes myanimation{
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}
#logo{
    color: aliceblue;
    font-size: 25px;
    font-weight: 800;
    text-transform: uppercase;
    position: absolute;
    top: 15%;
    left: 15%;
}
#container{
    transform-style: preserve-3d;
    transition: all 0.5s;
    transform-origin: 50% 50%;
    position: absolute;
    top: 30%;
    left: 38%;
}
#login,
#sign{
    position: absolute;
    width: 373px;
    height: 210px;
    border-radius: 15px;
    backface-visibility:hidden;
    transform-origin: left bottom;
}
#login{
    z-index: 1;
}
#sign{
    transform: rotateY(180deg);
}
.el-card{
    background-color: rgba(255, 255,255, 0.4);
}
#form{
    line-height: 40px;
    padding-left: 15px;
    padding-right: 15px;
}
.el-button{
    margin-left: 120px;
}
#p_login,
#p_sign{
    display: inline;
    float: left;
}
#turn_l{
    margin-left: 110px;  
}
#turn_s{
    margin-left: 125px;  
}
#clock{
    color: aliceblue;
    position: absolute;
    top: 70%;
    left: 15%;
    text-align: left;
}
#time{
    font-size: 100px;
}
#date{
    font-size: 35px;
}
#copyright{
    color: aliceblue;
    position: absolute;
    top: 95%;
    left: 38%;
}
</style>


<script>
export default {
    name: "Mall",
    components: {},
    data(){
        return{
            time:"",
            data:"",
            flag: true
        };
    },
    mounted(){
        this.$nextTick(()=>{
            setInterval(this.update_clock,1000);
        })
    },
    methods:{
        handleFlip() {
            let container = document.getElementById('container')
            container.style.transform = this.flag ? 'rotateY(180deg)':''
            this.flag = !this.flag
        },
        update_clock:function(e){
            var d=new Date();
            var year=d.getFullYear();
            if(year<10){
                year="0"+year
            }
            var mon=d.getMonth()+1;
            if(mon<10){
                mon="0"+mon
            }
            var day=d.getDay();
            if(day<10){
                day="0"+day
            }
            var hour=d.getHours();
            if(hour<10){
                hour="0"+hour
            }
            var min=d.getMinutes();
            if(min<10){
                min="0"+min
            }
            this.time=hour+":"+min;
            this.date=year+"/"+mon+"/"+day;
        }
        
    },
    
}
</script>>
