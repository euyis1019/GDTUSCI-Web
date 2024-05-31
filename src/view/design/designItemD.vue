<template>
    <div class="banner"><img src="./images4/banner.png" alt="" srcset=""></div>
    <div class="con">
        <h3 class="titleH3">昇微产品识别系统设计</h3>
        <div class="conText">
            <Row :gutter="16">
                <Col :span="14">
                <p>作为体量级较高的上市公司，企业形象的视觉体系已然形成了一定的积累，因此我们聚焦于产品识别体系与视觉UI体系，提取优利德现有的品牌DNA特征，构建优利德家族式的产品外观视觉系统，提高迭代开发的效率，形成规范而美观的产品外观系统。通过产品“族群化”的设计来塑造鲜明的设计形象，使产品“族群”在整体上形成家族化的可感受的特征，让优利德的品牌精神得到集中的外显和表达。简而言之，就是通过设计产品识别系统的建立与导入，强化品牌形象，提高品牌传播力与加强差异化特征，实现品牌价值的最大化。
                </p>
                </Col>
                <Col :span="6" :offset="4">
                <ul>
                    <li>品牌策略</li>
                    <li>视觉识别</li>
                    <li>产品设计</li>
                </ul>
                </Col>
            </Row>
        </div>
    </div>

    <div class="bannerB"><img src="./images4/bn1.png" alt="" srcset=""></div>

    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>
                    产品识别系统
                </h4>
                <p>visual identity system</p>
            </div>
        </div>
        <div class="titleMaxB">
            <p>我们为产品建立了基础视觉规范作为企业产品开发设计指导文件，内容包括产品基本结构及色彩搭配规范、丝印、冲孔等工艺规范、产品造型规范以及衍生设计规范等。</p>
        </div>
    </div>
    <div class="bannerC"><img src="./images4/bn2.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>
                    产品设计
                </h4>
                <p>PRODUCT DESIGNI</p>

            </div>
        </div>
        <div class="titleMaxB">
            <p>我们在品牌手册中提取造型及配色元素，进行产品设计。设计中，我们不仅考虑了品牌识别性。我们从机器结构、CMF等方面对设计进行考量，提审产品视觉美观度同时，确定了统一的结构方式和材质处理工艺，提高了产品设计和生产效率。</p>
        </div>
    </div>
    <div class="bannerD"><img src="./images4/bn3.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>
                    产品识别系统
                </h4>
                <p>visual identity system</p>

            </div>
        </div>
        <div class="titleMaxB">
            <p>我们为产品建立了基础视觉规范作为企业产品开发设计指导文件，内容包括产品基本结构及色彩搭配规范、丝印、冲孔等工艺规范、产品造型规范以及衍生设计规范等。</p>
        </div>
    </div>
    <div class="bannerG"><img src="./images4/bn4.png" alt="" srcset=""></div>
    <div class="bannerG"><img src="./images4/bn5.png" alt="" srcset=""></div>
    <div class="bannerG" style="margin-bottom: 300px;"><img src="./images4/bn6.png" alt="" srcset=""></div>

</template>

<script setup lang="ts">
import { Row, Col } from 'ant-design-vue'
</script>

<style scoped>
.banner {
    width: 100%;
    max-height: 1080px;

}

.banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 1080px;
}


.bannerB {
    width: 100%;
}

.bannerB img {
    width: 100%;
    max-height: 770px;
}

/*  */
.bannerC {
    width: 100%;
}

.bannerC img {
    width: 100%;
    max-height: 934px;
}

/*  */
.bannerD {
    width: 100%;
}

.bannerD img {
    width: 100%;
    max-height: 810px;
}

.bannerG {
    width: 100%;
    margin-bottom: 24px;
}

.bannerG img {
    width: 100%;
    max-height: 810px;
}

/*  */
.con {
    max-width: 1370px;
    margin: auto;
    width: 80%;
}

.titleH3 {
    font-size: 64px;
    font-family: "Regular";
    margin: 56px 0px 100px 0px;
    font-weight: 300;
}

.conText {
    display: flex;
    justify-content: space-between;
    padding-bottom: 200px;
}

.conText p {
    /* width: 788px; */
    font-size: 14px;
    font-family: "Light";
    line-height: 25px;

}

.conText ul {
    list-style: none;
    width: 200px;
    border-left: 1px solid rgba(0, 0, 0, 0.5);
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.conText ul li {
    font-family: "Regular";
    line-height: 14px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 14px;
    margin-bottom: 14px;
}

.conText ul li:nth-last-child(1) {
    margin-bottom: 0px;
}

/*  */

.titleMax {
    max-width: 1370px;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 50px 8% 200px;
    box-sizing: border-box;
}


.titleMaxA h4 {
    font-size: 16px;
    line-height: 24px;
    font-family: 'Regular';
    color: rgba(0, 0, 0, 0.95);
}

.titleMaxA p {
    font-family: "Light";
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
}

.titleMaxB {
    position: relative;
    width: 672px;
    padding-left: 30px;
    /* border-left: 1px solid rgba(0, 0, 0, 0.5); */
}

.titleMaxB::before{
    position: absolute;
    content: '';
    width: 1px;
    height: calc(100% - 11px);
    background-color: rgba(0, 0, 0, 0.5);
    top: 50%;
    left: 0;
    transform: translate(0px, -50%);
}

.titleMaxB p {
    font-size: 14px;
    line-height: 25px;
    text-align: 2rem;
    font-family: "Light";

}

/*  */
</style>