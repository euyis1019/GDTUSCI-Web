<template>
     <footer>
            <div class="footer">
                <div class="titleF">
                    <span>联系我们</span>
                    <img src="../assets/img/rightJtbai.jpg" alt="" srcset="">
                </div>
                <div class="info">
                    <div class="infoA">
                        <div>
                            <h3><span>公司地址</span> <img src="../assets/img/oneJt.jpg" alt="" srcset=""></h3>
                            <div class="infoCon">
                                <p>中国广东省东莞市松山国家高新区新城路大学创新城D-1栋4楼</p>
                            </div>
                            <p>XXXXXXXXXXXXXX</p>
                        </div>
                        <div>
                            <h3><span>联系方式</span><img src="../assets/img/oneJt.jpg" alt="" srcset=""></h3>
                            <div class="infoCon">
                                <p>www.gdsciid.com</p>
                                <p>020-00000000</p>
                                <p>+86 13600000000</p>
                            </div>
                            <p>粤ICP备09161003号</p>
                        </div>
                    </div>
                    <div class="infoB">
                        <div class="lxImg">
                            <div class="wxewm"><img src="../assets/img/wxewm.jpg" alt="" srcset=""></div>
                            <div class="sciid"><img src="../assets/img/sciid.jpg" alt="" srcset=""></div>
                            <div class="wxLogo"><img src="../assets/img/wx.jpg" alt="" srcset=""></div>
                        </div>
                    </div>
                    <div class="infoC">粤ICP备09161003号</div>
                </div>
            </div>
        </footer>
</template>

<script setup>

</script>

<style scoped>
 /*  */

 footer{
        width: 100%;
        background-color: black;
        padding: 30px;
        box-sizing: border-box;
      }
      .footer{
        width: 80%;
        margin: auto;
        height: 100%;
      }



    .titleF{
        font-size: 40px;
        display: flex;
        color: white;
        align-items: center;
        border-bottom: 2px solid white;
        padding-bottom: 40px;
        margin-bottom: 40px;
    }

    .titleF img{
        width: 25px;
        height: 28px;
        margin-left: 40px;
    }

    .info{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

 
    .infoA{
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
    .infoA>div{
        max-width: 240px;
    }

    .infoA h3{
        font-size: 20px;
        color: white;
        height: 40px;
        line-height: 40px;
        margin-bottom: 50px;
        font-weight: 100;

    }
    .infoA h3 img{
        display: none;
    }

    .sciid{
        display: none;
    }
    .infoA>div{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .infoA>div .infoCon{
        flex: 1;
        line-height: 40px;
        font-size: 16px;
        color: rgba(255, 255, 255,0.75);
        font-weight: 100;

    }

    .infoA>div>p{
        color: rgba(255, 255, 255,0.75);
        font-weight: 100;
        

    }

    /*  */
    .infoB{
        flex: 1;
        display: flex;
        justify-content: right;
    }
    .lxImg{
        width: 210px;
        height: 100%;
        margin-right: 10%;
    }

    .lxImg>.wxewm{
        width: 210px;
        height: 210px;
    }

    .lxImg img{
        width: 100%;
        height: 100%;
    }

    .wxLogo{
        width: 40px;
        height: 40px;
        margin-top: 24px;
    }

    .infoC{
        display: none;
        box-sizing: border-box;
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