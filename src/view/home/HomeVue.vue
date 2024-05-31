<template>
    <div class="lb">
        <Swiper :slidesPerView="1" :spaceBetween="10" :pagination="true" :modules="[Autoplay, Pagination, Navigation]"
            :autoplay="true">
            <SwiperSlide><img src="./images/item1.png" alt="" srcset=""></SwiperSlide>
            <SwiperSlide><img src="./images/item2.png" alt="" srcset=""></SwiperSlide>
            <SwiperSlide><img src="./images/item3.png" alt="" srcset=""></SwiperSlide>
        </Swiper>
    </div>
    <div class="title">
        OUR PROJECT
    </div>
    <div class="product">
        <div class="productItem">
            <div>
                <div class="proImgA">
                    <router-link to="/designA" class="proImgA">
                        <div class="product-img-box">
                            <img src="./images/item1.jpg" alt="" srcset="">
                        </div>
                        <div class="proText">
                            <p>UNI-T Brand-Products-UI Design</p>
                            <h3>优利德品牌-产品-UI设计</h3>
                        </div>
                    </router-link>
                </div>
                <div class="proImgB">
                    <router-link to="/designC" class="proImgA">
                        <div class="product-img-box">
                            <img src="./images/item2.jpg" alt="" srcset="">
                        </div>
                        <div class="proText">
                            <p>Upgraded image of DPI series products</p>
                            <h3>得普系列产品形象升级</h3>
                        </div>
                    </router-link>
                </div>
            </div>
            <div>
                <div class="proImgB">
                    <router-link to="/designB" class="proImgA">
                        <div class="product-img-box">
                            <img src="./images/item3.jpg" alt="" srcset="">
                        </div>
                        <div class="proText">
                            <p>Guangri Elevator Product Identity System Design </p>
                            <h3>广日电梯产品识别系统设计

                            </h3>
                        </div>
                    </router-link>
                </div>
                <div class="proImgA">
                    <router-link to="/designB" class="proImgA">
                        <div class="product-img-box">
                            <img src="./images/item4.jpg" alt="" srcset="">
                        </div>
                        <div class="proText">
                            <p>Design of SIMPLEWELL Product Identity System</p>
                            <h3>昇微产品识别系统设计</h3>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- <div class="productBtn">
            <span class="productSpan"></span>
        </div> -->

    </div>
    <div class="title">
        INSIGHTS
    </div>
    <div class="insights">
        <div class="insightsItem">
            <div class="insightsText">
                <div
                    style="display: flex;padding: 0px 0px 18px 0px;border-bottom: 1px solid #ccc;justify-content: space-between;">
                    <span>MATERIAL</span>
                    <span>2024/04/01</span>
                </div>
                <div style="margin-bottom: 12px; margin-top: 24px;">
                    <router-link to="/researchA">
                        <h5>材料的探索与实践————混凝土材料的设计应用</h5>
                    </router-link>
                </div>
                <div style="flex: 1;">
                    <p class="insightsP" @click="$router.push('')">
                        广东工业大学综合材料展示与制作实验室2017年开始建设，以绿色设计的3R1D（REDUCE，RECYCLE, REUSE, DEGRADABLE） 为原则，开展产品CMF
                        （COLOR.MATERIAL、FINISH）的设计应用研究</p>
                </div>
                <div style="display: flex;align-items: center;">
                    <router-link to="/researchA">
                        <h6>READ MORE</h6>
                    </router-link>
                    <router-link to="/researchA">
                        <svg style="width: 20px;height: 20px;margin-left: 14px;" t="1716403232283" class="icon"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1456"
                            width="200" height="200">
                            <path
                                d="M741.504 512L402.752 173.248l90.496-90.496L922.496 512l-429.248 429.248-90.496-90.496L741.504 512z m-320 0L82.752 173.248l90.496-90.496L602.496 512l-429.248 429.248-90.496-90.496L421.504 512z"
                                fill="#000000a6" p-id="1457"></path>
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="insightsImg">
                <router-link to="/researchA">
                    <img src="./images/INSIGHT1.png" alt="" srcset="">
                </router-link>
            </div>
        </div>
        <hr class="division-line">
        <div class="insightsItem">
            <div class="insightsText">
                <div
                    style="display: flex;padding: 0px 0px 18px 0px;border-bottom: 1px solid #ccc;justify-content: space-between;">
                    <span>AWARDS</span>
                    <span>2024/04/01</span>
                </div>
                <div style="margin-bottom: 12px; margin-top: 24px;">
                    <router-link to="/dynamicA">
                        <h5>喜讯|SCID荣获2项红点设计奖</h5>
                    </router-link>
                </div>
                <div style="flex: 1;">
                    <p class="insightsP" @click="$router.push('')">
                        SCIID2024年获奖作品共有2款。DERUCCI梦”自适应舒缓减压床垫，以创新的自适应支撑结构完美贴合人体曲线，为使用者提供极佳的睡眠体验。MAGIC CUBE -
                        ERGONOMICMATTRESS是一款拥有首创的A人工智能床垫，可通过大数据物联网系统参数云分析及.</p>
                </div>
                <div style="display: flex;align-items: center;">
                    <router-link to="/dynamicA">
                        <h6>READ MORE</h6>
                    </router-link>

                    <router-link to="/dynamicA">
                        <svg style="width: 20px;height: 20px;margin-left: 14px;" t="1716403232283" class="icon"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1456"
                            width="200" height="200">
                            <path
                                d="M741.504 512L402.752 173.248l90.496-90.496L922.496 512l-429.248 429.248-90.496-90.496L741.504 512z m-320 0L82.752 173.248l90.496-90.496L602.496 512l-429.248 429.248-90.496-90.496L421.504 512z"
                                fill="#000000a6" p-id="1457"></path>
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="insightsImg">
                <router-link to="/dynamicA">
                    <img src="./images/INSIGHT2.png" alt="" srcset="">
                </router-link>
            </div>
        </div>
        <hr class="division-line">
        <div class="insightsItem">
            <div class="insightsText">
                <div
                    style="display: flex;padding: 0px 0px 18px 0px;border-bottom: 1px solid #ccc;justify-content: space-between;">
                    <span>GDUT DESIGN</span>
                    <span>2024/04/01</span>
                </div>
                <div style="margin-bottom: 12px; margin-top: 24px;">
                    <router-link to="/creativeA">
                        <h5>广工文创平台</h5>
                    </router-link>
                </div>
                <div style="flex: 1;">
                    <p class="insightsP" @click="$router.push('')">
                        广工文创平台是由广东工业大学官方授权由广东工业大学资产管理公司联合广东华南工业设计院具体运营及设计的广工官方文创品牌，这是广东工业大学首家文创专营店。设计团队共同开发了包括生活用品…</p>
                </div>
                <div style="display: flex;align-items: center;">
                    <router-link to="/creativeA">
                        <h6>READ MORE</h6>
                    </router-link>

                    <router-link to="/creativeA">
                        <svg style="width: 20px;height: 20px;margin-left: 14px;" t="1716403232283" class="icon"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1456"
                            width="200" height="200">
                            <path
                                d="M741.504 512L402.752 173.248l90.496-90.496L922.496 512l-429.248 429.248-90.496-90.496L741.504 512z m-320 0L82.752 173.248l90.496-90.496L602.496 512l-429.248 429.248-90.496-90.496L421.504 512z"
                                fill="#000000a6" p-id="1457"></path>
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="insightsImg">
                <router-link to="/creativeA">
                    <img src="./images/INSIGHT3.png" alt="" srcset="">
                </router-link>
            </div>
        </div>
        <hr class="division-line">
    </div>

    <div class="more">
        <span>LOAD MORE</span>
        <img src="./images/rightJt.jpg" alt="" srcset="">
    </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

</script>

<style>
.product-img-box {
    overflow: hidden;
    height: 440px;
}

.swiper-pagination-bullet-active {
    background-color: white !important;
}

/* 伪类选择器 */
.product-img-box img {
    transition: transform 0.3s ease-in-out;
}

.product-img-box img:hover {
    transform: scale(1.1);
}


.insightsImg img {
    transition: transform 0.3s ease-in-out;
}

.insightsImg img:hover {
    transform: scale(1.1);
}

.h5:hover~img {
    transform: scale(1.1);

}


.swiper-pagination-bullet {
    width: 20px !important;
    height: 5px !important;
    border-radius: 0;
}
</style>

<style scoped>
/* 全局样式 */


.lb {
    width: 100%;
    max-height: 840px;
    margin-bottom: 160px;
    overflow: hidden;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    max-height: 840px;
    object-fit: cover;
}

/*  */
.title {
    font-family: 'Regular';
    max-width: 1368px;
    margin: auto;
    font-size: 60px;
    padding-bottom: 14px;
    border-bottom: 1px solid gray;
    margin-bottom: 44px;
}

/*  */
/*  */
.product {
    max-width: 1368px;
    margin: 0 auto 200px;
}


.productItem>div {
    /* height: 550px; */
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 20px; */
}

.productItem>div:nth-child(1) {
    margin-bottom: 68px;
}

.productItem>div>.proImgA {
    width: 440px;
    overflow: hidden;
}

.productItem>div>.proImgB {
    width: 905px;
    overflow: hidden;
}

.productItem>div img {
    width: 100%;
    height: 440px;
    transition: all 0.2s linear;
    cursor: pointer;

}


.proText {
    z-index: 999;
}

.proText p {
    font-size: 16px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.30);
    margin: 12px 0px 8px;
    font-family: 'Light';
    cursor: pointer;
}

.proText h3 {
    color: rgba(0, 0, 0, 0.65);
    font-family: 'Light';
    font-size: 32px;
    font-weight: 300;
    line-height: 46px;
    letter-spacing: 0%;
    display: inline;
    text-decoration: none;
    /* background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(#ffdcdc, #ffdcdc); */
    background-size: 100% 16px, 0 16px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s linear;
}

.proText h3:hover {
    background-size: 0 15px, 100% 15px;
    border-bottom: 1px solid #b40000;
}

.productBtn {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-top: 50px;
    margin-bottom: 180px;
}

.productBtn>span {
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    background-color: #ffffff;
}

.productBtn>.productSpan {
    background-image: url('../research/images/加载图标.gif');
    background-size: cover;
    /* 或者使用其他适当的尺寸 */
    display: inline-block;
    /* 确保元素显示为块级元素 */
    width: 300px;
    /* 设置元素的宽度 */
    height: 100px;
    /* 设置元素的高度 */
}

/*  */

.insights {
    max-width: 1368px;
    margin: auto;
}

.insightsItem {
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 24px;
    margin-top: 10px; */
    flex-direction: row-reverse;
}

.insightsText {
    width: 640px;

    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
}

.insightsP {
    margin-top: -40px;
    color: rgba(0, 0, 0, 0.95);
    opacity: 0.65;
    font-family: HarmonyOS Sans SC;
    font-size: 28px;
    font-weight: 250;
    line-height: 56px;
    letter-spacing: 0%;
    text-align: left;
    text-transform: capitalize;
}

/* 当 .insightsText 被悬停时, h5 和 p 元素应用高亮样式 */

.insightsText h5,
.insightsText p {
    /* background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(#FFDCDC, #FFDCDC);
    background-size: 100% calc(2.4em + 1px);
    background-position: 100% 100%, 100% 100%;
    background-repeat: repeat-y;
    transition: background-size 0.3s linear; */

    /* color: rgba(0, 0, 0, 0.65); */
    /* font-family: HarmonyOS Sans SC; */
    font-size: 32px;
    font-weight: 300;
    line-height: 46px;
    letter-spacing: 0%;
    display: inline-block;
    text-decoration: none;
    /* background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(#ffdcdc, #ffdcdc); */
    background-size: 100% 16px, 0 16px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s linear;
}



/* .insightsText:hover h5,
.insightsText:hover p {
    background-size: 0 16px, 100% 16px;
} */

.insightsText h5:hover {
    border-bottom: 1px solid #b40000;
}


.insightsP {
    margin-top: -40px;
    color: rgba(0, 0, 0, 0.95);
    opacity: 0.65;
    font-family: 'Light';
    font-size: 28px;
    font-weight: 250;
    line-height: 56px;
    letter-spacing: 0%;
    text-align: left;
    text-transform: capitalize;
}

.insightsText h5 {
    color: rgba(0, 0, 0, 0.80);
    font-family: 'Regular';
    font-size: 32px;
    font-weight: 400;
    line-height: 46px;
    letter-spacing: 0%;
    text-align: justify;
    display: inline;
    text-decoration: none;
}

.insightsText span {
    font-family: 'Light';
    font-size: 20px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.65);
}

.insightsText p {
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.65);
    cursor: pointer;
    display: inline;
    text-decoration: none;
}

.insightsText h6 {
    font-size: 20px;
    line-height: 20px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.80);
    margin-bottom: 0px;
    font-family: 'Regular';
}

.division-line {
    width: 1370px;
    margin-top: 40px;
    margin-bottom: 40px;
    left: 274px;
    border: 0.4px solid rgba(0, 0, 0, 0.5);
}


.insightsImg {
    width: 556px;
    height: 312px;
    overflow: hidden;
    /* margin-top: 40px; */
}

.insightsImg img {
    width: 100%;
    height: 100%;
}

.insightsImg img:hover,
.insightsText:hover+.insightsImg img {
    transform: scale(1.1);
}



/*  */
.more {
    /* width: 240px; */
    height: 47px;
    display: flex;
    justify-content: center;
    margin: 88px auto 180px;
    cursor: pointer;
    align-items: center;
}

.more>img {
    width: 47px;
    height: 47px;
    margin-left: 10px;
}

.more>span {
    font-size: 32px;
    font-weight: 300;
}

/*  */
@media screen and (max-width: 1200px) {
    .title {
        font-size: 40px;
        width: 80%;
    }

    .product {
        /* width: 80%; */
    }

    .insights {
        width: 80%;
    }


    .title {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .productItem>div:nth-child(1) {
        margin-bottom: 0px;
    }

    .product-img-box {
        height: auto;
        /* margin-top: 50px; */
    }

    .proText {
        height: 200px;
    }

    .h3 {
        font-size: 25px;
        margin-bottom: 20px;
    }

    .h5 {
        font-size: 25px;
        margin-bottom: 20px;
        min-height: auto;
    }

    .h6 {
        font-size: 25px;
        margin-bottom: 20px;
    }


    .insightsP {
        font-size: 20px;
        line-height: 40px;
        margin-top: 0;
    }

    .division-line {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        left: 0;
    }
}





@media screen and (max-width: 1200px) {
    .productItem {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .productItem>a {
        height: 200px;
    }

    .title {
        font-size: 20px;
        margin-bottom: 6px;
        font-family: 'Light';
        border-bottom: none;
        text-align: center;
    }

    .productBtn>span {
        width: 15px;
        height: 15px;
    }

    .productBtn {
        margin-top: -30px;
        margin-bottom: 60px;
    }

    .product {
        margin: 0px auto 60px;
    }

    .insightsItem {
        flex-direction: column;
    }

    .insightsImg {
        width: auto;
        height: auto;
    }

    .insightsText {
        width: auto;
    }

    .insightsText p {
        font-size: 15px;
        line-height: 30px;
        margin-bottom: 20px;
    }

    .insightsText h5 {
        font-size: 14px;
        margin-bottom: 20px;
    }

    .insightsText {
        margin: 10px 0;
    }

    .insightsText h6 {
        font-size: 20px;
    }



    .more>img {
        width: 30px;
        height: 30px;
        margin-left: 10px;
    }

    .more>span {
        font-size: 25px;
        font-weight: 300;
    }



    .productItem>div {
        height: auto;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .productItem>div>.proImgA {
        width: 100%;
    }

    .productItem>div>.proImgB {
        width: 100%;
    }

    .productItem>div img {
        width: 100%;
        height: auto;
    }

    .proText {
        height: auto;
        padding: 0px 30px;
    }

    .proText p {
        font-size: 10px;
        line-height: 10px;
        color: rgba(0, 0, 0, 0.30);
        margin: 8px 0 4px 0;
        font-family: 'Light';

    }

    .proText h3 {
        font-size: 20px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.8);
        font-family: 'Light';
        font-weight: 300;
        margin-bottom: 42px;
        display: block;
    }

}
</style>
