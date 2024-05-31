<template>
    <div class="designTitle">
        <h2>研究</h2>
        <h4>STRASEGY</h4>
        <p>我们联合不同平台与团队进行多样化的设计研究，以探究未来设计趋势，应对企业及社会面临的各种复杂问题</p>
    </div>

    <div class="insights">
        <div class="insightsItem">
            <div class="insightsText">
                <div
                    style="display: flex;padding: 46px 0px 18px 0px;border-bottom: 1px solid #ccc;justify-content: space-between;">
                    <span>MATERIAL</span>
                    <span>2024/04/01</span>
                </div>
                <div style="margin-bottom: 12px; margin-top: 24px;">
                    <router-link to="/researchA">
                        <h5>材料的探索与实践一一混凝土材料的设计应用</h5>
                    </router-link>
                </div>
                <div style="flex: 1;">
                    <p class="insightsP">
                        广东工业大学综合材料展示与制作实验室2017年开始建设，以绿色设计的3R1D（REDUCE，RECYCLE, REUSE, DEGRADABLE） 为原则，开展产品CMF
                        （COLOR、MATERIAL、FINISH）的设计应用研究
                    </p>
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
                    <img src="./images/banner.png" alt="" srcset="">
                </router-link>
            </div>
        </div>
        <hr class="division-line">
    </div>
    <!-- <div class="productBtn">
        <span class="productSpan"></span>
        <span></span>
        <span></span>
    </div> -->
    <!-- <div class="productBtn">
        <span class="productSpan"></span>
    </div> -->
</template>

<style>
@import '@/assets/css/item.css';
</style>
<style scoped>
.productBtn>span {
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    background-color: #ffffff !important;
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

.insights {
    max-width: 1368px;
    margin: 0px auto 300px;
    border-top: 1px solid gray;
}

.insightsItem {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
    margin-top: 0px;
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
    line-height: 32px;
    letter-spacing: 0%;
    display: inline;
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
    background-size: 0 16px, 100% 16px;
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
    /* margin-bottom: 40px; */
    left: 274px;
    border: 0.4px solid rgba(0, 0, 0, 0.5);
}


.insightsImg {
    width: 556px;
    height: 312px;
    overflow: hidden;
    margin-top: 40px;
}

.insightsImg img {
    width: 100%;
    height: 100%;
}

.insightsImg img:hover,
.insightsText:hover+.insightsImg img {
    transform: scale(1.1);
}
</style>
