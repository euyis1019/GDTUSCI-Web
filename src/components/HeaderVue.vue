<script setup>
import { ref ,onMounted} from 'vue'

import { useRoute } from 'vue-router';

const route = useRoute()



let showCdFlag = ref(false)


let cdUrl = ref('/src/assets/img/cd.jpg')

function showCd(){
  showCdFlag.value = !showCdFlag.value
  showCdFlag.value? cdUrl.value = '/src/assets/img/cdActive.jpg' : cdUrl.value = '/src/assets/img/cd.jpg'
}

</script>

<template>
        <header>
            <div class="nav">
                <div class="logo" @click="$router.push('/home')"><img src="../assets/img/logo.jpg" alt="" srcset=""></div>
                <div class="navList" v-show="!showCdFlag">
                    <router-link to="/design" :class="{'aActive': route.name &&route.name.includes('design')}" active-class="aActive">DESIGN</router-link>
                    <router-link to="/research" :class="{'aActive': route.name &&route.name.includes('research')}" active-class="aActive">RESEARCH</router-link>
                    <router-link to="/creative" :class="{'aActive': route.name &&route.name.includes('creative')}" active-class="aActive">GDUT DESIGN</router-link>
                    <router-link to="/dynamic" :class="{'aActive': route.name &&route.name.includes('dynamic')}" active-class="aActive">INSIGHTS</router-link>
                    <router-link to="/about" :class="{'aActive': route.name &&route.name.includes('about')}" active-class="aActive">ABOUT</router-link>
                </div>  
                <div class="cd" @click="showCd">
                    <img :src="cdUrl" alt="" srcset="">
                </div>
            </div>
            <div class="navB" v-show="showCdFlag" :class="{ 'flex-layout': showCdFlag }">
                <div class="navBItem">
                    <span>WORk</span>
                    <ul>
                        <li><a href="">STRATEGY</a></li>
                        <li><a href="">DESIGN</a></li>
                        <li><a href="">CREATIVE <br> INDUSTRIES</a></li>
                    </ul>
                </div>
                <div class="navBItem">
                    <span>INSIGHTS</span>
                    <ul>
                        <li><a href="">NEWS</a></li>
                    </ul>
                </div>
                <div class="navBItem">
                    <span>ABOUT</span>
                    <ul>
                        <li><a href="">INTRODUCE</a></li>
                        <li><a href="">CONTACT</a></li>
                        <li><a href="">JOIN US</a></li>
                    </ul>
                </div>
            </div>
        </header>
</template>

<style scoped>

.aActive{
color: red !important;
}

.aActive::after{
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    position: absolute;
    background-color: red;
    right: -16px;
    bottom: 3px;
}
.flex-layout {
  display: flex;
  /* 其他flex布局属性 */
}
        *{
            padding: 0;
            margin: 0;
        }

        .box{
            width: 100%;
            height: 100%;
        }

        a{
            text-decoration: none;
            color: black;
        }
        header{
            width: 100%;
            height: 88px;
            background: #000000;
            position: relative;
        }

        .nav{
            width: 80%;
            max-width: 1368px;
            margin: auto;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav img{
            width: 100%;
            height: 100%;
        }
       
        .logo{
            width: 49px;
            height: 49px;
            cursor: pointer;

        }

        .navList{
            width: 500px;
            height: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 300px;
        }
        .navList a{
            color: white;
            font-size: 16px;
            font-weight: 200;
            position: relative;
        }



        .cd{
            width: 24px;
            height: 24px;
            cursor: pointer;
        }

        /*  */
        .navB{
            width: 100%;
            height: calc(100vh - 80px);
            background-color: black;
            position: absolute;
            top: 0;
            left: 0;
            transform: translateY(80px);
            transition: all 1s linear;
            padding: 100px 5%;
            box-sizing: border-box;
            z-index: 9999;

        }


        .banner{
            width: 100%;
            height: 310px;
            background-color: aquamarine;
        }
        .banner>img{
            width: 100%;
            height: 100%;
        }
        /*  */

        .navBItem{
            margin-right: 100px;
            max-width: 250px;
            position: relative;
            left: 180px;
        }

        .navBItem>span{
            font-size: 20px;
            color: white;
            font-weight: 300;
            margin-bottom: 100px;
            display: block;
            opacity: 0.8;
            cursor: pointer;

        }


        .navBItem>ul{
            list-style: none;
            display: flex;
            flex-direction: column;
        }

        .navBItem>ul a{
            display: block;
            height: 40px;
            width: 100%;
            font-size: 40px;
            color: white;
            margin-bottom: 60px;
        }



         /*  */
  @media screen and (max-width: 1200px) {
        .navList{
            margin: 0;
        }
        .infoB{
            /* flex: none; */
            width: 300px !important;
        }
    }


    @media screen and (max-width: 500px) {
        .navList{
            display: none;
        }
        header{
            height: 56px;
        }
        .logo{
            width: 24px;
            height: 24px;
        }
        .cd{
            width: 20px;
            height: 20px;
        }

        .navB{
            height: calc(100vh - 56px);
            padding: 70px 5%;
            display: flex;
            justify-content: space-between;
            text-align: center;
            transform: translateY(56px);
        }
        .navBItem{
            margin-right: 0;
            width: auto;
        }
        .navBItem>span{
            margin-bottom: 40px;
        }

        .navBItem>ul a{
            font-size: 15px;
            margin-bottom: 10px;
            line-height: 30px;
        }

        /*  */
        footer{
            padding: 0;
        }
        .footer{
            width: 100%;
        }
        .infoA>div{
            width: 100%;
            max-width: none;
        }
        .info{
            flex-direction: column;
        }
        .infoA{
            flex-direction: column;
        }

        .infoA h3{
            border-bottom: 1px solid rgba(255, 255, 255,0.75);
            height: 60px;
            line-height: 60px;
            padding-left: 20px;
            padding-right: 20px;

            box-sizing: border-box;
            margin: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .infoA h3 img{
            width: 16px;
            height: 8px;
            display: block;
        }

        .titleF{
            padding-bottom: 0;
            margin-bottom: 0;
            height: 100px;
            padding-left: 20px;
            box-sizing: border-box;
            border-bottom: 1px solid rgba(255, 255, 255,0.75);
        }

        .infoA>div .infoCon {
            line-height: 30px;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.75);
            font-weight: 100;
            padding: 10px 20% 10px 20px;
            box-sizing: border-box;
            flex: none;
            border-bottom: 1px solid rgba(255, 255, 255,0.75);

        }

        .infoA>div>p{
            display: none;
        }

        .infoB{
            flex: none;
            width: 100% !important;
            padding: 0 20px;
            box-sizing: border-box;
        }
        .lxImg{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
            padding-top: 15px;
        }
        .lxImg .wxewm{
            display: none;
        }
        .wxLogo{
            margin: 0;
        }
       .sciid{
        display: block;
        height: 27px;
        width: 93px;
       }

       .infoC{
        display: block;
        width: 100%;
        padding: 40px 20px;
        color: rgba(255, 255, 255,0.75);
       }
    }
</style>
