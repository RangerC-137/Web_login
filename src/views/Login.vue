<template>
    <div id="background">
        <div id="logo">Mysystem</div>
        <div id="login">
            <el-card class="box-card">
                <div id="form">
                    <el-input v-model="username" placeholder="请输入用户名"></el-input>
                    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                    <el-button type="primary" @click="login">登录</el-button>
                </div>
            </el-card>
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
#login{
    position: absolute;
    top: 30%;
    left: 38%;
}
.el-card{
    width: 373px;
    height: 210px;
    background-color: rgba(255, 255,255, 0.4);
    border-radius: 15px;
}
#form{
    line-height: 60px;
    padding-left: 15px;
    padding-right: 15px;
}
.el-button{
    margin-left: 120px;
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
function login() {
    console.log(1)
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
    if (data.id === id) {   // 验证是否存在该用户return data
    } else {
    throw new Error("用户名不存在")
    }
    if (data.password === password.value) {
          router.push({
            name: "Home",
            params: {
              id: data.id,
            }
          })
        } else {
          throw new Error("密码错误")
        }
    })
    .catch(err => console.log(err))
}
export default {
    data(){
        return{
            time:"",
            data:"",
        }
    },
    mounted(){
        this.$nextTick(()=>{
            setInterval(this.update_clock,1000);
        })
    },
    methods:{
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