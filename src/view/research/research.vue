<template>
    <div class="designTitle">
        <h2>研究</h2>
        <h4>strategy</h4>
        <p>我们为企业创造富有凝聚力的品牌形象,帮助品牌与用户更好地连接,帮助品牌实现目标与价值.</p>
    </div>

    <div class="insights">
        <div class="insightsItem">
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP"  @click="$router.push('/researchA')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/researchA">
                    <img @mouseover="changeTextColor($event, true)" @mouseout="changeTextColor($event, false)"
                        src="./images/banner.png" class="insights-img-self" alt="" srcset=""></router-link></div>
        </div>
        <div>
            <hr class="division-line">
        </div>
        <div class="insightsItem">
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP"  @click="$router.push('/researchB')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/researchB"><img @mouseover="changeTextColor($event, true)"
                        @mouseout="changeTextColor($event, false)" class="insights-img-self" src="./images/banner.png"
                        alt="" srcset=""></router-link></div>
        </div>
        <div>
            <hr class="division-line">
        </div>
        <div class="insightsItem">
            <div class="insightsText">
                <h5>材料的探索与实践_混凝土材料的设计应用</h5>
                <p class="insightsP"  @click="$router.push('/researchC')">Design Application of Concrete Materials Exploration and Practice
                    of Materials</p>
                <h6>2024-01</h6>
            </div>
            <div class="insightsImg"><router-link to="/researchC"><img @mouseover="changeTextColor($event, true)"
                        @mouseout="changeTextColor($event, false)" class="insights-img-self" src="./images/banner.png"
                        alt="" srcset=""></router-link></div>

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
@import '@/assets/css/item.css';
</style>


