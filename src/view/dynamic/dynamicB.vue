<template>
  <div class="banner"><img src="./images/banner.png" alt="" srcset=""></div>
  <div class="btMax">
    <h3>材料的探索与实践——混凝土材料的设计应用</h3>
    <p>Design Application of Concrete Materials Exploration and Practice of Materials</p>
  </div>

  <div class="bannerB"><img src="./images/bn1.png" alt="" srcset=""></div>
  <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>综合材料展示与制作实验室</h4>
                <p>Comprehensive Materials Design Joint Lab</p>
            </div>
        </div>
        <div class="titleMaxB">
            <p>广东工业大学综合材料展示与制作实验室2017年开始建设，以绿色设计的3R1D（Reduce, Recycle, Reuse, Degradable）为原则，开展产品CMF（Color、Material、Finish）的设计应用研究</p>
        </div>
    </div>

<!--  -->
<div class="conMax">
    <div><img src="./images/bn2.png" alt="" srcset=""><p>材料研究</p></div>
    <div><img src="./images/bn3.png" alt="" srcset=""><p>工艺制程</p></div>
    <div><img src="./images/bn4.png" alt="" srcset=""><p>色彩研究</p></div>
</div>
<div class="bannerC"><img src="./images/bn5.png" alt="" srcset=""></div>
<div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>工艺制程</h4>
                <p>process technology</p>
            </div>
        </div>
       
    </div>

    <div class="bannerD"><img src="./images/bn6.png" alt="" srcset=""></div>
    <div class="bannerD"><img src="./images/bn7.png" alt="" srcset=""></div>
    <div class="bannerD"><img src="./images/bn8.png" alt="" srcset=""></div>
    <div class="bannerD"><img src="./images/bn9.png" alt="" srcset=""></div>

    <div class="bannerMax">
        <div><img src="./images/bn10.png" alt="" srcset=""></div>
        <div><img src="./images/bn11.png" alt="" srcset=""></div>
    </div>
    <div class="bannerMax">
        <div><img src="./images/bn12.png" alt="" srcset=""></div>
        <div><img src="./images/bn13.png" alt="" srcset=""></div>
    </div>
    <div class="bannerMax">
        <div><img src="./images/bn14.png" alt="" srcset=""></div>
        <div><img src="./images/bn15.png" alt="" srcset=""></div>
    </div>

    <div class="bannerE"><img src="./images/bn16.png" alt="" srcset=""></div>
    <div class="bannerE" style="margin-bottom: 160px;"><img src="./images/bn17.png" alt="" srcset=""></div>

</template>

<script>
export default {

}
</script>

<style scoped>
.banner{
    width: 100%;
    max-height: 1080px;
    
}
.banner img{
    width: 100%;
    max-height: 1080px;
}


.bannerB{
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerB img{
    width: 100%;
    max-height: 941px;
}

.bannerC{
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerC img{
    width: 100%;
    max-height: 496px;
}

.bannerD{
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerD img{
    width: 100%;
    max-height: 966px;
    margin-bottom: 24px;

}

.bannerE{
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerE img{
    width: 100%;
    max-height: 966px;
    margin-bottom: 24px;

}



/*  */

.btMax{
    width: 80%;
    max-width: 1368px;
    margin: auto;
    padding: 50px 0 200px;
}

.btMax h3{
    font-weight: 300;
    font-size: 36px;
}

.btMax p{
    font-size: 22px;
    line-height: 22px;
    margin-top: 20px;
}
/*  */
/*  */

.titleMax{
    max-width: 1370px;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 50px 8% 100px;
    box-sizing: border-box;
}


.titleMaxA h4{
    font-size: 16px;
    line-height: 24px;
    font-family: 'Regular';
}

.titleMaxA p{
    font-family: "Light";
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
}

.titleMaxB{
    width: 672px;
    padding-left: 30px;
    border-left: 1px solid rgba(0, 0, 0, 0.5);
}

.titleMaxB p{
    font-size: 14px;
    line-height: 25px;
    text-align: 2rem;
    font-family: "Light";

}
/*  */

.conMax{
    width: 80%;
    max-width: 1368px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(430px,1fr));
    gap: 20px;
}

.conMax img{
    width: 100%;
    /* max-height: 608px; */
}

.conMax p{
    text-align: center;
    font-size: 20px;
    font-family: 'Light';
    margin: 20px 0 150px;
}

.bannerMax{
    max-width: 1368px;
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(670px,1fr));
    gap: 24px;
    margin-bottom: 24px;

}

.bannerMax img{
    width: 100%;
}


@media screen and (max-width: 500px){
    .btMax{
        padding: 40px 0 100px;
    }
    .btMax h3{
        font-size: 16px;
    }

    .btMax p{
        font-size: 12px;
        margin-top: 10px;
    }

    .titleMax{
        width: 100%;
        flex-direction: column;
        font-size: 12px;

    }

    .titleMaxA{
        text-align: center;
    }

    .titleMaxB{
        padding: 0;
        width: auto;
        border: none;
        margin-top: 20px;
    }

    .bannerMax{
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>