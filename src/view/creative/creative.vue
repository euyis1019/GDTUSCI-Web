<template>
    <div class="designTitle">
        <h2>广工文创</h2>
        <h4>strategy</h4>
        <p>广工文创平台是由广东工业大学官方授权由广东工业大学资产管理公司联合广东华南工业设计院具体运营及设计的广工官方文创品牌</p>
    </div>

    <div class="insights">
        <div class="insightsItem">
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p @click="$router.push('/creativeA')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/creativeA"><img @mouseover="changeTextColor($event, true)"
                        @mouseout="changeTextColor($event, false)" src="./images/banner.png" alt=""
                        srcset=""></router-link></div>
        </div>
        <div class="insightsItem">
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p @click="$router.push('/creativeB')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/creativeB"><img @mouseover="changeTextColor($event, true)"
                        @mouseout="changeTextColor($event, false)" src="./images/banner.png" alt=""
                        srcset=""></router-link></div>
        </div>
        <div class="insightsItem">
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p @click="$router.push('/creativeC')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/creativeC"><img @mouseover="changeTextColor($event, true)"
                        @mouseout="changeTextColor($event, false)" src="./images/banner.png" alt=""
                        srcset=""></router-link></div>
        </div>
    </div>
    <div class="productBtn">
        <span class="productSpan"></span>
        <span></span>
        <span></span>
    </div>
</template>

<script setup>
function changeTextColor(event, isHover) {
    const insightsText = event.target.closest('.insightsItem').querySelector('.insightsText p');
    if (isHover) {
        insightsText.classList.add('redText');
    } else {
        insightsText.classList.remove('redText');
    }
}
</script>

<style scoped>
img {
    transition: 2s;
}

.insightsImg img:hover,
.insightsText:hover+.insightsImg img {
    transform: scale(1.1);
}

.redText {
    color: red !important;
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

.insights {
    max-width: 1368px;
    margin: auto;
}

.insightsItem {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    flex-direction: row-reverse;
}

.insightsText {
    width: 640px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.insightsText h5 {
    font-size: 32px;
    font-weight: 300;

    color: rgba(0, 0, 0, 0.65);
    font-family: "Regular";
}

.insightsText p {
    font-weight: 300;
    font-size: 28px;
    line-height: 56px;
    color: rgba(0, 0, 0, 0.95);
}

.insightsText p:hover {
    color: red;
    cursor: pointer;
}

.insightsText h6 {
    font-size: 32px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: 20px;
}

.insightsImg {
    width: 556px;
    height: 312px;
    overflow: hidden;
}

.insightsImg img {
    width: 100%;
    height: 100%;
    transition: all 1s linear;
}

.insightsImg img:hover {
    transform: scale(1.1);
}

/*  */
.productBtn {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin: 60px 0 150px;
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

@media screen and (max-width: 500px) {
    .productBtn>span {
        width: 15px;
        height: 15px;
    }

    .insights {
        width: 80%;
    }

    .productBtn {
        margin-top: 20px;
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
