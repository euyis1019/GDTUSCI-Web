<template>
    <div class="lb">
        <Swiper :slidesPerView="1" :spaceBetween="10" :pagination="true" :modules="[Autoplay, Pagination, Navigation]"
            :autoplay="true">
            <SwiperSlide><img src="./images/item1.png" alt="" srcset=""></SwiperSlide>
            <SwiperSlide><img src="./images/item2.png" alt="" srcset=""></SwiperSlide>
            <SwiperSlide><img src="./images/item3.png" alt="" srcset=""></SwiperSlide>
            <SwiperSlide><img src="./images/item4.png" alt="" srcset=""></SwiperSlide>
        </Swiper>
    </div>
    <div class="title">
        OUR PROJECT
    </div>
    <div class="product">
        <div class="productItem">
            <div>
                <div class="proImgA">
                    <div class="product-img-box">
                        <img src="./images/item1.jpg" alt="" srcset="">
                    </div>
                    <div class="proText">
                        <p>UNI-T Brand-Products-UI Design</p>
                        <h3>优利德品牌-产品-UI设计</h3>
                    </div>
                </div>
                <div class="proImgB">
                    <div class="product-img-box">
                        <img src="./images/item2.jpg" alt="" srcset="">
                    </div>
                    <div class="proText">
                        <p>Upgraded image of DPI series products</p>
                        <h3>得普系列产品形象升级</h3>
                    </div>
                </div>
            </div>
            <div>
                <div class="proImgB">
                    <div class="product-img-box">
                        <img src="./images/item3.jpg" alt="" srcset="">
                    </div>
                    <div class="proText">
                        <p>Guangri Elevator Product Identity System Design </p>
                        <h3>广日电梯产品识别系统设计

                        </h3>
                    </div>
                </div>
                <div class="proImgA">
                    <div class="product-img-box">
                        <img src="./images/item4.jpg" alt="" srcset="">
                    </div>
                    <div class="proText">
                        <p>Design of SIMPLEWELL Product Identity System</p>
                        <h3>昇微产品识别系统设计</h3>
                    </div>
                </div>
            </div>

        </div>
        <div class="productBtn">
            <span class="productSpan"></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="title">
        INSIGHTS
    </div>
    <div class="insights">
        <div class="insightsItem">
            <div class="insightsImg"><img @mouseover="changeTextColor($event, true)"
                    @mouseout="changeTextColor($event, false)" src="./images/item1.png" alt="" srcset=""></div>
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP" @click="$router.push('')">Design Application of Concrete Materials Exploration and Practice of
                    Materials</p>
                <h6>2024-01</h6>
            </div>
        </div>
        <hr class="division-line">
        <div class="insightsItem">
            <div class="insightsImg"><img @mouseover="changeTextColor($event, true)"
                    @mouseout="changeTextColor($event, false)" src="./images/item1.png" alt="" srcset=""></div>
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP" @click="$router.push('')">Design Application of Concrete Materials Exploration and Practice of
                    Materials</p>
                <h6>2024-01</h6>
            </div>
        </div>
        <hr class="division-line">
        <div class="insightsItem">
            <div class="insightsImg"><img @mouseover="changeTextColor($event, true)"
                    @mouseout="changeTextColor($event, false)" src="./images/item1.png" alt="" srcset=""></div>
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP" @click="$router.push('')">Design Application of Concrete Materials Exploration and Practice of
                    Materials</p>
                <h6>2024-01</h6>
            </div>
        </div>
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

.h5:hover ~ img {
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
    margin-bottom: 50px;
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

    max-width: 1368px;
    margin: auto;
    font-size: 60px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
    margin-bottom: 50px;
}

/*  */
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
    margin: 20px 0;
    font-family: 'Light';
    cursor: pointer;


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
    background-color: #7D7D7D;
}

.productBtn>.productSpan {
    background-color: #B40000;
}

/*  */

.insights {
    max-width: 1368px;
    margin: auto;
}

.insightsItem {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    margin-top: 10px;
    flex-direction: row-reverse;
}

.insightsText {
    width: 640px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 10px;
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
    background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(#FDF322, #FDF322);
    background-size: 100% calc(2.4em + 1px);
    background-position: 100% 100%, 100% 100%;
    background-repeat: repeat-y;
    transition: background-size 0.3s linear;

}



.insightsText:hover h5,
.insightsText:hover p {
    background-size: 0 15px, 100% 15px;
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

.insightsText h5 {
    color: rgba(0, 0, 0, 0.65);
    font-family: HarmonyOS Sans SC;
    font-size: 32px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: justify;
    display: inline;
    text-decoration: none;

}



.insightsText p {
    font-weight: 300;
    font-size: 28px;
    line-height: 56px;
    color: rgba(0, 0, 0, 0.95);
    cursor: pointer;
    display: inline;
    text-decoration: none;

}

.insightsText h6 {
    font-size: 32px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: 40px;

}

.division-line {
width: 1370px;
margin-top: 20px;
margin-bottom: 20px;
left: 274px;
border: 0.4px solid rgba(0, 0, 0, 0.5);
}


.insightsImg {
    width: 556px;
    height: 312px;
    overflow: hidden;
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
    margin: 100px auto;
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
        width: 80%;
    }

    .insights {
        width: 80%;
    }


    .title {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .product-img-box {
        height: auto;
        margin-top: 50px;
    }

    .proText{
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
    }

    .proText p {
        font-size: 14px;
        line-height: 14px;
        color: rgba(0, 0, 0, 0.30);
        margin: 10px 0;
        font-family: 'Light';

    }

    .proText h3 {
        font-size: 23px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.65);
        font-family: 'Light';
        font-weight: 300;
        margin-bottom: 40px;
    }

}
</style>



