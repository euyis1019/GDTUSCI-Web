<template>
    <div class="banner"><img src="./images/banner.png" alt="" srcset=""></div>
    <div class="con">
        <h3 class="titleH3">广工文创平台</h3>
        <div class="conText">
            <Row :gutter="16">
                <Col :span="14">
                <p>广工文创平台是由广东工业大学官方授权由广东工业大学资产管理公司联合广东华南工业设计院具体运营及设计的广工官方文创品牌，这是广东工业大学首家文创专营店。设计团队共同开发了包括生活用品、办公用品、纪念品等三大类别60多款广东工业大学文创产品。为满足师生日常生活需求，为丰富校园精神文化生活，广工文创日后还将为师生打造以文化共享、文化体验、文化服务为主的校园文化创意体验空间。</p>
                </Col>
                <Col :span="6" :offset="4">
                <ul>
                    <li>校园文化创作</li>
                    <li>文创产品设计</li>
                    <li>校园活动定制</li>
                </ul>
                </Col>
            </Row>
        </div>
    </div>

    <div class="bannerB"><img src="./images/bn1.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>
                    文创产品设计
                </h4>
                <p>CULTURAL AND CREATIVE PRODUCT DESIGN</p>

            </div>
        </div>
        <div class="titleMaxB">
            <p>广工文创平台设计团队共同开发了包括生活用品、办公用品、纪念品等三大类别60多款广东工业大学文创产品。为满足师生日常生活需求，为丰富校园精神文化生活，广工文创日后还将为师生打造以文化共享、文化体验、文化服务为主的校园文化创意体验空间。
            </p>
        </div>
    </div>
    <div class="bannerC"><img src="./images/bn2.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>
                    校园文化创作
                </h4>
                <p>CAMPUS CULTURE CREATION</p>
            </div>
        </div>

    </div>
    <div class="bannerD"><img src="./images/bn3.png" alt="" srcset=""></div>
    <div class="titleMax" style="margin-bottom: 100px;">
        <div class="titleMaxA">
            <div>
                <h4>
                    校园活动定制
                </h4>
                <p>PRODUCT CUSTOMISATION</p>
            </div>
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
    max-height: 1080px;
}


.bannerB {
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerB img {
    width: 100%;
    max-height: 503px;
}


.bannerC {
    width: 100%;
}

.bannerC img {
    width: 100%;
    max-height: 680px;
}

.bannerD {
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerD img {
    width: 100%;
    max-height: 644px;
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
    line-height: 64px;
    margin: 48px 0px 100px 0px;
    font-weight: 300;
}

.conText {
    width: 100%;
    /* display: flex;
    justify-content: space-between; */
    padding-bottom: 200px;
    color: #000000;
    opacity: 0.95;
}

.conText p {
    /* width: 788px; */
    font-size: 14px;
    font-family: 'Light';
    line-height: 25.2px;
    color: #000000;
    opacity: 0.7;
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
    color: rgba(0, 0, 0, 0.3);
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 14px;
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
}

.titleMaxA p {
    font-family: "Light";
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
}

.titleMaxB {
    width: 672px;
    padding-left: 30px;
    border-left: 1px solid rgba(0, 0, 0, 0.5);
}

.titleMaxB p {
    font-size: 14px;
    line-height: 25px;
    text-align: 2rem;
    font-family: "Light";

}

/*  */

@media screen and (max-width: 500px) {

    .titleH3 {
        font-size: 25px;
        margin: 30px 0;
    }

    .conText {
        flex-direction: column;
        padding-bottom: 50px;
    }

    .conText p {
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

    }

    .titleMaxA {
        text-align: center;
    }

    .titleMaxB {
        padding: 0;
        width: auto;
        border: none;
        margin-top: 20px;
    }

    /*  */
}
</style>