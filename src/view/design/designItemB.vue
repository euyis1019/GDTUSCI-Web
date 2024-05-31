<template>
    <div class="banner"><img src="./images2/banner.png" alt="" srcset=""></div>
    <div class="con">
        <h3 class="titleH3">广日电梯产品识别系统设计</h3>
        <div class="conText">
            <Row :gutter="16">
                <Col :span="14">
                <div>
                    <p>广日电梯作为中国电梯行业里最早成立的民族品牌，有着快70年的历史。但是对于电梯的研究，主要集中在结构，以及功能的开发上。品牌意识上的塑造被长期忽略，历代产品的延续性不高，没有明显的记忆点和辨识度，品牌特色不够。
                    </p>
                    <p>因此需要通过完善的工业设计体系来挖掘品牌的特色，制定独特的形象语言，合理的工艺结构，统一的输出形象，来提高品牌的辨识度，形成特有的品牌体验与文化内涵，在同质化严重的市场中脱颖而出，形成特色鲜明的国有品牌。
                    </p>
                </div>
                </Col>
                <Col :span="6" :offset="4">
                <ul>
                    <li>品牌策略</li>
                    <li>视觉识别</li>
                    <li>产品设计</li>
                    <li>UI设计</li>
                </ul>
                </Col>
            </Row>
        </div>
    </div>
    <div class="bannerB"><img src="./images2/详情图1.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>研究方法</h4>
                <p>WORKFLOWS</p>
            </div>
        </div>
        <div class="titleMaxB">
            <p>我们对广日电梯现处市场、竞争格局、企业状况及设计趋势分析，并与客户的讨论对原有产线结构进行分析调整，为广日电梯制定了差异化的产品开发战略，并根据不同产线特征制定了不同的细分策略。</p>
        </div>
    </div>

    <div class="bannerC"><img src="./images2/详情图2.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>策略</h4>
                <p>STRATEGY</p>
            </div>
        </div>
        <div class="titleMaxB">
            <p>针对这次的广日电梯PIS项目，我们首先从顶层的品牌定位到底层设计对这次项目的核心目的和需求进行分析。经过分析我们认为。这次项目的目的，除了设计 中品牌特征的体现外，更多的是从二线品牌跃升一线品牌的过程中，对于中高端产品市场及产品线的拓展，落实到具体产品，则是产品品质感和高级感的提升</p>
        </div>
    </div>

    <div class="bannerD"><img src="./images2/详情图3.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>产品设计</h4>

                <p>PRODUCT DESIGN</p>
            </div>
        </div>
        <div class="titleMaxB">
            <p>根据产品视觉识别系统，我们对轿厢内部件及人机界面进行设计。
                对于标配款产品，我们对其原有设计进行优化，形成了统一的产品风格，规范品牌形象。对于中高端产品，我们分析现有设计趋势，结合广日电梯作为民族品牌的特色，结合东方元素设计了中式轿厢配件，有助于品牌在中高端市场形成差异化的品牌形象，提升品牌竞争力
            </p>
        </div>
    </div>
    <div class="bannerE">
        <img src="./images2/详情图4.png" alt="" srcset="">
        <img src="./images2/详情图5.png" alt="" srcset="">
    </div>
    <div class="titleMax" style="margin-bottom: 100px;">
        <div class="titleMaxA">
            <div>
                <h4>视觉识别系统</h4>


                <p>VISUAL IDENTITY SYSTEMI</p>
            </div>
        </div>
        <div class="titleMaxB">
            <p>
                我们为产品建立了基础视觉规范作为企业产品开发设计指导文件，内容包括产品设计理念及定位、P及U基础符号、图标及字体设计及应用规范、产品应用规范及产品示例、界面UI规范、轿厢环境规范（装潢、灯光等）
            </p>
        </div>
    </div>
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
    width: 80%;
    max-width: 1370px;
    margin: auto;
}

.bannerB img {
    width: 100%;
    max-height: 439px;
}

.bannerC {
    width: 80%;
    max-width: 1370px;
    margin: auto;
}

.bannerC img {
    width: 100%;
    max-height: 365px;
}

/*  */
.bannerD {
    width: 80%;
    max-width: 1370px;
    margin: auto;
}

.bannerD img {
    width: 100%;
    max-height: 746px;
}

/*  */
.bannerE {
    width: 80%;
    max-width: 1370px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 24px;
}

.bannerE img {
    width: 100%;
    max-height: 520px;
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

.conText div {
    /* width: 788px; */
    font-size: 14px;
    font-family: "Light";
    line-height: 25px;
    text-indent: 2rem;

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

img {
    display: block;
}
</style>


<style scoped>
@media screen and (max-width: 500px) {
    .titleH3 {
        font-size: 20px;
        line-height: 20px;
        margin: 12px 0 64px;
        display: block
    }

    .conText {
        flex-direction: column;
        padding-bottom: 50px;
        display: none
    }

    .bannerB {
        width: 100%;
        margin: 4px 0px;
    }

    .conText div {
        width: auto;
        font-size: 12px;
    }

    .conText ul {
        width: 100%;
        border: none;
        flex-direction: row;
        padding: 0;
        margin-top: 20px;
    }

    /*  */
    .titleMax {
        width: 100%;
        flex-direction: column;
        font-size: 12px;
        padding: 0px 30px;
        margin-bottom: 64px;
    }

    .titleMaxA {
        text-align: start;
        margin-top: 16px;
    }

    .titleMaxA h4 {
        margin-bottom: 0px;
        margin-right: 4px;
        font-size: 12px;
        line-height: 12px;
    }

    .titleMaxA p {
        font-size: 11px;
        line-height: 11px;
    }

    .titleMaxB p {
        font-size: 10px;
        line-height: 20px;
        text-indent: 0;
    }

    .titleMaxA>div {
        display: flex;
        align-items: center;
    }

    .titleMaxB {
        padding: 0;
        width: auto;
        border: none;
        margin-top: 20px;
    }

    .bannerC {
        width: 100%;
    }

    .bannerE {
        width: 100%;
        margin: 4px 0px;
    }
    /*  */

    .bannerD {
        width: 100%;
        margin: 4px 0px;
    }

    .bannerTwo {
        width: 100%;
        margin: 4px 0px;
    }

    .banenrGird {
        width: 100%;
        margin: 4px 0px;
        gap: 4px;
    }

    .bannerG {
        width: 100%;
        margin: 4px 0px;
    }
}
</style>