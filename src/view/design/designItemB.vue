<template>
  <div class="banner"><img src="./images2/banner.png" alt="" srcset=""></div>
  <div class="con">
    <h3 class="titleH3">广日电梯产品识别系统设计</h3>
    <div class="conText">
        <div>
            <p>广日电梯作为中国电梯行业里最早成立的民族品牌，有着快70年的历史。但是对于电梯的研究，主要集中在结构，以及功能的开发上。品牌意识上的塑造被长期忽略，历代产品的延续性不高，没有明显的记忆点和辨识度，品牌特色不够。</p>
            <p>因此需要通过完善的工业设计体系来挖掘品牌的特色，制定独特的形象语言，合理的工艺结构，统一的输出形象，来提高品牌的辨识度，形成特有的品牌体验与文化内涵，在同质化严重的市场中脱颖而出，形成特色鲜明的国有品牌。</p>
        </div>
        <ul>
            <li>品牌策略</li>
            <li>视觉识别</li>
            <li>产品设计</li>
            <li>UI设计</li>
        </ul>
    </div>



    </div>
    <div class="bannerB"><img src="./images2/bn1.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>策略</h4>
                <p>strategy</p>
            </div>
        </div>
        <div class="titleMaxB">
            <p>我们对广日电梯现处市场、竞争格局、企业状况及设计趋势分析，并与客户的讨论对原有产线结构进行分析调整，为广日电梯制定了差异化的产品开发战略，并根据不同产线特征制定了不同的细分策略。</p>
        </div>
    </div>

    <div class="bannerC"><img src="./images2/bn2.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>视觉识别系统</h4>
                <p>visual identity <br> system</p>
            </div>
        </div>
        <div class="titleMaxB">
            <p>我们为产品建立了基础视觉规范作为企业产品开发设计指导文件，内容包括产品设计理念及定位、PI及UI基础符号、图标及字体设计及应用规范、产品应用规范及产品示例、界面UI规范、轿厢环境规范（装潢、灯光等）</p>
        </div>
    </div>

    <div class="bannerD"><img src="./images2/bn3.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>产品设计</h4>

                <p>product design</p>
            </div>
        </div>
        <div class="titleMaxB">
            <p>根据产品视觉识别系统，我们对轿厢内部件及人机界面进行设计。
对于标配款产品，我们对其原有设计进行优化，形成了统一的产品风格，规范品牌形象。对于中高端产品，我们分析现有设计趋势，结合广日电梯作为民族品牌的特色，结合东方元素设计了中式轿厢配件，有助于品牌在中高端市场形成差异化的品牌形象，提升品牌竞争力</p>
        </div>
    </div>
    <div class="bannerE"><img src="./images2/bn4.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>设计</h4>


                <p>DESIGN</p>
            </div>
        </div>
        <div class="titleMaxB">
            <p>
                根据基础设计规范，我们为广日电梯设计了新的产品系列。
            </p>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.banner{
    width: 100%;
    max-height: 1080px;
    
}

.banner img{
    width: 100%;
    max-height: 1080px;
}


.bannerB{
    width: 80%;
    max-width: 1370px;
    margin: auto;
}

.bannerB img{
    width: 100%;
    max-height: 439px;
}

.bannerC{
    width: 80%;
    max-width: 1370px;
    margin: auto;
}

.bannerC img{
    width: 100%;
    max-height: 365px;
}

/*  */
.bannerD{
    width: 80%;
    max-width: 1370px;
    margin: auto;
}

.bannerD img{
    width: 100%;
    max-height: 746px;
}
/*  */
.bannerE{
    width: 80%;
    max-width: 1370px;
    margin: auto;
}

.bannerE img{
    width: 100%;
    max-height: 520px;
}


/*  */
.con{
    max-width: 1370px;
    margin: auto;
    width: 80%;
}
.titleH3{
    font-size: 64px;
    font-family: "Regular";
    margin: 50px 0;
    font-weight: 300;
}

.conText{
    display: flex;
    justify-content: space-between;
    padding-bottom: 200px;
}

.conText div{
    width: 788px;
    font-size: 14px;
    font-family: "Light";
    line-height: 25px;
    text-indent: 2rem;

}

.conText ul{
    list-style: none;
    width: 200px;
    border-left: 1px solid rgba(0, 0, 0, 0.5);
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.conText ul li{
    font-family: "Bold";
    color: rgba(0, 0, 0, 0.3);
    font-size: 14px;


}

/*  */
/*  */

.titleMax{
    max-width: 1370px;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 50px 8% 100px;
    box-sizing: border-box;
}


.titleMaxA h4{
    font-size: 16px;
    line-height: 24px;
    font-family: 'Regular';
}

.titleMaxA p{
    font-family: "Light";
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
}

.titleMaxB{
    width: 672px;
    padding-left: 30px;
    border-left: 1px solid rgba(0, 0, 0, 0.5);
}

.titleMaxB p{
    font-size: 14px;
    line-height: 25px;
    text-align: 2rem;
    font-family: "Light";

}
</style>


<style  scoped>
    @media screen and (max-width: 500px){
    .titleH3{
        font-size: 25px;
        margin: 30px 0;
    }

    .conText{
        flex-direction: column;
        padding-bottom: 50px;
    }

    .conText div{
        width: auto;
        font-size: 12px;

    }

    .conText ul{
        width: 100%;
        border: none;
        flex-direction: row;
        padding: 0;
        margin-top: 20px;
    }

    /*  */
    .titleMax{
        width: 100%;
        flex-direction: column;
        font-size: 12px;

    }

    .titleMaxA{
        text-align: center;
    }

    .titleMaxB{
        padding: 0;
        width: auto;
        border: none;
        margin-top: 20px;
    }
    /*  */

}
</style>