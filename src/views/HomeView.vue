<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from 'vue'
const route = useRoute();
const router = useRouter();
const id = ref('')
const info = ref('')
const name = ref('')
const password = ref('')
const host = 'http://123.60.44.50:3000'
onMounted(() => {
  id.value = route.params.id;
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  }
  fetch(`${host}/users/${id.value}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        info.value = data
      })
})
</script>

<template>
    <div id="background">
        <div id="logo"><span>Welcome！{{info.name}}</span></div>
        <div id="container">

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
    font-size: 40px;
    font-weight: 800;
    position: absolute;
    top: 15%;
    left: 15%;
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
    data(){
        return{
            time:"",
            data:"",
        };
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