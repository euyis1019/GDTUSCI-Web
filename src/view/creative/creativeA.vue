<template>
   <div class="banner"><img src="./images/banner.png" alt="" srcset=""></div>
    <div class="con">
    <h3 class="titleH3">优利德品牌-产品-UI设计</h3>
    <div class="conText">
        <p>作为体量级较高的上市公司，企业形象的视觉体系已然形成了一定的积累，因此我们聚焦于产品识别体系与视觉UI体系，提取优利德现有的品牌DNA特征，构建优利德家族式的产品外观视觉系统，提高迭代开发的效率，形成规范而美观的产品外观系统。通过产品“族群化”的设计来塑造鲜明的设计形象，使产品“族群”在整体上形成家族化的可感受的特征，让优利德的品牌精神得到集中的外显和表达。简而言之，就是通过设计产品识别系统的建立与导入，强化品牌形象，提高品牌传播力与加强差异化特征，实现品牌价值的最大化。</p>
        <ul>
            <li>品牌策略</li>
            <li>视觉识别</li>
            <li>品牌设计</li>
            <li>产品设计</li>
            <li>UI设计</li>
        </ul>
    </div>

    </div>

    <div class="bannerB"><img src="./images/bn1.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>
                    文创产品设计
                </h4>
                <p>Cultural and Creative Product Design</p>

            </div>
        </div>
        <div class="titleMaxB">
            <p>广工文创平台设计团队共同开发了包括生活用品、办公用品、纪念品等三大类别60多款广东工业大学文创产品。为满足师生日常生活需求，为丰富校园精神文化生活，广工文创日后还将为师生打造以文化共享、文化体验、文化服务为主的校园文化创意体验空间。</p>
        </div>
    </div>
    <div class="bannerC"><img src="./images/bn2.png" alt="" srcset=""></div>
    <div class="titleMax">
        <div class="titleMaxA">
            <div>
                <h4>
                    校园文化创作
                </h4>
                <p>Campus Culture Creation</p>

            </div>
        </div>
      
    </div>
    <div class="bannerD"><img src="./images/bn3.png" alt="" srcset=""></div>
    <div class="titleMax" style="margin-bottom: 150px;">
        <div class="titleMaxA">
            <div>
                <h4>
                    校园活动定制
                </h4>
                <p>Product customisation</p>

            </div>
        </div>
      
    </div>
</template>

<script>
export default {

}
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
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerB img{
    width: 100%;
    max-height: 503px;
}


.bannerC{
    width: 100%;
}

.bannerC img{
    width: 100%;
    max-height: 680px;
}

.bannerD{
    max-width: 1370px;
    width: 80%;
    margin: auto;
}

.bannerD img{
    width: 100%;
    max-height: 644px;
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
    margin: 48px;
    font-weight: 300;
}

.conText{
    display: flex;
    justify-content: space-between;
    padding-bottom: 200px;
}

.conText p{
    width: 788px;
    font-size: 14px;
    font-family: "Light";
    line-height: 25px;

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
/*  */

@media screen and (max-width: 500px){

    .titleH3{
        font-size: 25px;
        margin: 30px 0;
    }

    .conText{
        flex-direction: column;
        padding-bottom: 50px;
    }
    .conText p{
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