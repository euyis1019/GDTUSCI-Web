<template>
    <div class="btMax">
        <h3>材料的探索与实践——混凝土材料的设计应用</h3>
    </div>
    <div class="btP">
        <Row :gutter="16">
            <Col :span="22" :offset="1">
            <p>
                红点设计大奖是国际公认的全球工业设计顶级奖项之一，与德国“证奖”、美国“IDEA奖”并称为世界三大设计奖。红点奖被公认为国际性创意和设计的认可标志，获得该奖意味着产品外观及质感获得了最具权威的“品质保证”，同时，获奖作品还将得到最大范围的推广和认知。每年，一些达到设计品质极高境界的优秀作品便会被授予“红点奖”，此奖项并一直被冠以“国际工业设计的奥斯卡”之称。
            </p>
            <br />
            <p>
                2024年获奖作品共有2款。
            </p>
            <br />
            <p>
                DeRUCCI梦”自适应舒缓减压床垫，以创新的自适应支撑结构完美贴合人体曲线，为使用者提供极佳的睡眠体验。
            </p>
            <br />
            <p>
                Magic Cube - Ergonomic Mattress是一款拥有首创的ai人工智能床垫，可通过大数据物联网系统参数云分析及弹簧模组，根据人体曲线精确调整睡感，显著提升睡眠质量。
            </p>
            </Col>
        </Row>
    </div>

    <div class="bannerE"><img src="./images/详情图1.png" alt="" srcset=""></div>
    <div class="bannerE" style="margin-bottom: 276px;"><img src="./images/详情图2.png" alt="" srcset=""></div>

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
    max-height: 941px;
}

.bannerC {
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerC img {
    width: 100%;
    max-height: 496px;
}

.bannerD {
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerD img {
    width: 100%;
    max-height: 966px;
    margin-bottom: 24px;

}

.bannerE {
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerE img {
    width: 100%;
    max-height: 966px;
    margin-bottom: 24px;

}



/*  */

.btMax {
    width: 80%;
    max-width: 1368px;
    margin: auto;
    padding: 200px 0 160px;
}

.btMax h3 {
    font-weight: 300;
    font-size: 64px;
    line-height: 64px;
    font-family: 'Regular';
    color: rgba(0, 0, 0, 0.95)
}

.btMax p {
    font-size: 22px;
    line-height: 22px;
    margin-top: 20px;
}

.btP {
    width: 80%;
    max-width: 1368px;
    margin: auto;
    margin-bottom: 100px;
}

.btP p {
    font-size: 20px;
    line-height: 40px;
    font-family: 'Regular';
    color: rgba(0, 0, 0, 0.65)
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

.conMax {
    width: 80%;
    max-width: 1368px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
    gap: 20px;
}

.conMax img {
    width: 100%;
    /* max-height: 608px; */
}

.conMax p {
    text-align: center;
    font-size: 20px;
    font-family: 'Light';
    margin: 20px 0 150px;
}

.bannerMax {
    max-width: 1368px;
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(670px, 1fr));
    gap: 24px;
    margin-bottom: 24px;

}

.bannerMax img {
    width: 100%;
}

@media screen and (max-width: 500px) {
    .btMax {
        padding: 40px 0 100px;
    }

    .btMax h3 {
        font-size: 16px;
    }

    .btMax p {
        font-size: 12px;
        margin-top: 10px;
    }

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

    .bannerMax {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>