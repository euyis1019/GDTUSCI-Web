<template>
    <div class="designTitle">
        <h2>设计</h2>
        <h4>Design</h4>
        <p>我们为企业创造富有凝聚力的品牌形象,帮助品牌与用户更好地连接,帮助品牌实现目标与价值.</p>
    </div>

    <div class="product">
        <div class="productItem">
            <div>
                <router-link to="/designA" class="proImgA">
                    <div class="product-img-box">
                        <img src="./images/item1.jpg" alt="" srcset="">
                    </div>
                    <div class="proText">
                        <p>UNI-T Brand-Products-UI Design</p>
                        <h3>优利德品牌-产品-UI设计</h3>
                    </div>
                </router-link>
                <router-link to="/designC" class="proImgB">
                    <div class="product-img-box">
                        <img src="./images/item2.jpg" alt="" srcset="">
                    </div>
                    <div class="proText">
                        <p>Upgraded image of DPI series products</p>
                        <h3>得普系列产品形象升级</h3>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link to="/designB" class="proImgB">
                    <div class="product-img-box">
                        <img src="./images/item3.jpg" alt="" srcset="">
                    </div>
                    <div class="proText">
                        <p>Guangri Elevator Product Identity System Design </p>
                        <h3>广日电梯产品识别系统设计

                        </h3>
                    </div>
                </router-link>
                <router-link to="/designD" class="proImgA">
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
        <div class="productBtn">
            <span class="productSpan"></span>
            <span></span>
            <span></span>
        </div>
    </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

function changeTextColor(event, isHover) {
    const insightsText = event.target.closest('.insightsItem').querySelector('.insightsText p');
    if (isHover) {
        insightsText.style.textDecoration = 'none';
        insightsText.style.backgroundImage = 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(#FDF322, #FDF322)';
        insightsText.style.backgroundSize = '100% 15px, 100% 15px'; // Set both gradients to 100%
        insightsText.style.backgroundPosition = '100% 100%, 0 100%';
        insightsText.style.backgroundRepeat = 'no-repeat';
        insightsText.style.transition = 'background-size 0.3s linear';
    } else {
        insightsText.style.backgroundSize = '100% 15px, 0 15px'; // Reset the second gradient to 0
    }
}
</script>

<style scoped>
/* 全局样式 */
.redText {
    text-decoration: none;
    background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(#FDF322, #FDF322);
    background-size: 100% 15px, 0 15px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s linear;
}
.product-img-box {
    overflow: hidden;
    height: 440px;
}

.designTitle {
    width: 80%;
    max-width: 1368px;
    margin: auto;
    padding: 100px 0;
}

.designTitle h2 {
    font-size: 64px;
    font-family: "Light";
}

.designTitle h4 {
    font-size: 48px;
    font-weight: 300;
    margin-bottom: 60px;
}

.designTitle p {
    width: 450px;
    font-family: "Light";
    font-size: 14px;
    line-height: 28px;
}

/*  */
.product {
    max-width: 1368px;
    margin: 0 auto 100px;
}

.productItem>div {
    height: 550px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    overflow: hidden;
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
    transition: all 0.3s linear;
}

.productItem>div img:hover {
    transform: scale(1.1);
}

.proText p {
    font-size: 16px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.3);
    margin: 20px 0;
    font-family: "Light";
}

.proText h3 {
    color: rgba(0, 0, 0, 0.65);
    font-family: HarmonyOS Sans SC;
    font-size: 32px;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 0%;
    display: inline;
    text-decoration: none;
    background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(#FDF322, #FDF322);
    background-size: 100% 15px, 0 15px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s linear;
}

.proText h3:hover {
    background-size: 0 15px, 100% 15px;
}

.productBtn {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-top: 60px;
}

.productBtn>span {
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    background-color: #7d7d7d;
}

.productBtn>.productSpan {
    background-color: #b40000;
}

@media screen and (max-width: 1200px) {
    .product {
        width: 80%;
        margin: auto;
    }
}

@media screen and (max-width: 500px) {
    .title {
        font-size: 25px;
        margin-bottom: 25px;
    }

    .productBtn>span {
        width: 15px;
        height: 15px;
    }

    .productBtn {
        margin-top: 20px;
    }

    .product {
        margin: 0px auto 60px;
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

    .proText p {
        font-size: 14px;
        line-height: 14px;
        color: rgba(0, 0, 0, 0.3);
        margin: 10px 0;
        font-family: "Light";
    }

    .proText h3 {
        font-size: 23px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.65);
        font-family: "Light";
        font-weight: 300;
        margin-bottom: 40px;
    }

    .designTitle p {
        width: auto;
    }

    .designTitle h2 {
        font-size: 40px;
        margin-bottom: 10px;
    }

    .designTitle h4 {
        font-size: 32px;
        margin-bottom: 20px;
    }

    .designTitle {
        padding: 30px 0;
    }
}
</style>
