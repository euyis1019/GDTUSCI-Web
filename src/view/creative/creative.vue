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
                <p class="insightsP"@click="$router.push('/creativeA')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/creativeA"><img @mouseover="changeTextColor($event, true)"
                        @mouseout="changeTextColor($event, false)" src="./images/banner.png" alt=""
                        srcset=""></router-link></div>
        </div>
        <hr class="division-line">
        <div class="insightsItem">
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP"@click="$router.push('/creativeB')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/creativeB"><img @mouseover="changeTextColor($event, true)"
                        @mouseout="changeTextColor($event, false)" src="./images/banner.png" alt=""
                        srcset=""></router-link></div>
        </div>
        <hr class="division-line">
        <div class="insightsItem">
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP"@click="$router.push('/creativeC')">Design Application of Concrete Materials Exploration and Practice
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


<style>
@import 'src/assets/css/item.css';
</style>

