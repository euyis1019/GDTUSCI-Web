<template>
    <div class="designTitle">
        <h2>广工文创</h2>
        <h4>strategy</h4>
        <p>广工文创平台是由广东工业大学官方授权由广东工业大学资产管理公司联合广东华南工业设计院具体运营及设计的广工官方文创品牌</p>
    </div>

    <div class="insights">
        <div class="insightsItem">
            <div class="insightsText">
                <h5 @click="$router.push('/creativeA')">材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP" @click="$router.push('/creativeA')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/creativeA"><img src="./images/banner.png" alt="" srcset=""></router-link></div>
        </div>
        <hr class="division-line">
        <div class="insightsItem">
            <div class="insightsText">
                <h5 @click="$router.push('/creativeB')">材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP" @click="$router.push('/creativeB')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/creativeB"><img src="./images/banner.png" alt="" srcset=""></router-link></div>
        </div>
        <hr class="division-line">
        <div class="insightsItem">
            <div class="insightsText">
                <h5 @click="$router.push('/creativeC')">材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP" @click="$router.push('/creativeC')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/creativeC"><img src="./images/banner.png" alt="" srcset=""></router-link></div>
        </div>
    </div>
    <div class="productBtn">
        <span class="productSpan"></span>
        <span></span>
        <span></span>
    </div>
</template>




<style>
@import '@/assets/css/item.css';
</style>

