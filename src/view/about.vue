<template>
  <div class="con">
    <h3 class="h3Titl">关于我们</h3>
    <p class="pTitl">CONTACT OUR STUDIOS</p>

    <div class="itemDiv">
        <span>广州</span><p>广州市越秀区环市东路450号广东华信中心6楼</p>
    </div>
    <div class="itemDiv">
        <span>东莞</span><p>松山湖高新区新城路大学创新城D1栋东莞华南设计创新院四楼</p>
    </div>
    <div class="itemDiv">
        <span>联系方式</span><p>www.gdsciid.com <br>
            +86 13650798660
            <br>
            525063129@qq.com        
        </p>
    </div>

    <h4 class="h4Titl">JOIN US</h4>
    <div class="conInfo">
        <div class="conInfoA">
            <p>文创项目设计师（实习）</p>
            <p>2名</p>
        </div>
        <div class="conInfoB">
            <div>
                <h4>工作职责</h4>
                <p>1、协助梳理文创需求，搜集信息，协助完成行业、品牌、消费者，分析品牌核心问题</p>
                <p>2、协助设计项目中的竞品分析、目标用户分析、市场调研、设计趋势研究，并制作调研PPT</p>
                <p>3、根据市场调研结果及文创策略，提出创意，协助完成文创尺寸提案</p>
                <p>4、整理品牌设计资料，并对项目进行总结与归档管理</p>
            </div>
            <div>
                <h4>岗位要求</h4>
                <p>1、热爱设计，良好掌握基本设计相关理论</p>
                <p>2、做事认真负责，有良好的合作沟通能力</p>
                <p>3、学习能力强，掌握手绘(或板绘)，Ps，Ai等设计软件者优先</p>
                <p>4、具有平面设计能力优先</p>
            </div>
            <div>
                <h4>工资待遇</h4>
                <p>实习工资+项目工资</p>
            </div>
        </div>
    </div>
    <div class="conInfo">
        <div class="conInfoA">
            <p>产品项目助理 （实习）</p>
            <p>2名</p>
        </div>
        <div class="conInfoB">
            <div>
                <h4>工作职责</h4>
                <p>1、协助完成案头分析，线下竞调，产品定位等前期设计任务</p>
                <p>2、参与设计研究工作，把握设计方向和设计风格，协助完成提案，建模效果图制作，版面设计等设计任务</p>
                <p>3、整理设计研发资料，并对项目进行总结与归档管理</p>
            </div>
            <div>
                <h4>岗位要求</h4>
                <p>1、热爱设计，良好掌握基本设计相关理论</p>
                <p>2、做事认真负责，有良好的合作沟通能力</p>
                <p>3、学习能力强，掌握手绘(或板绘)，Ps，Ai等设计软件者优先</p>
            </div>
            <div>
                <h4>工资待遇</h4>
                <p>实习工资+项目工资</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.con{
    width: 80%;
    max-width: 1368px;
    margin: auto;

    padding: 200px 0;


}

.h3Titl{
    font-size: 64px;
    font-family: 'Light';
    color: rgba(0, 0, 0, 0.85);
    font-weight: 300;
    margin-bottom: 60px;

}




.pTitl{
    font-size: 48px;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 50px;

}


.itemDiv{
    display: flex;
    margin-bottom: 50px;
}

.itemDiv span{
    width: 100px;
    margin-right: 30px;
    font-size: 20px;
    line-height: 40px;
    font-family: 'Light';

}

.itemDiv p{
    font-size: 14px;
    line-height: 40px;

}

.h4Titl{
    font-size: 48px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 300;

}

.conInfo{
    display: flex;
    padding: 50px 0;
}

.conInfoA{
    width: 300px;
}

.conInfoA p{
    font-size: 20px;
    line-height: 24px;
    font-family: "Light";
    margin: 10px 0;
}

.conInfoB>div{
    margin-bottom: 50px;
}

.conInfoB h4{
    font-family: "Light";
    font-weight: 300;
    font-size: 16px;
    margin: 15px 0;


}


.conInfoB p{
    font-size: 14px;
    line-height: 28px;
    margin: 15px 0;
}

@media screen and (max-width: 500px) {
    .con{
        padding: 100px 0;
    }
    .h3Titl{
        font-size: 30px;
        margin-bottom: 20px;
    }
    
    .pTitl{
        font-size: 24px;
    }

    .itemDiv span{
        display: block;
        font-size: 16px;
        margin-right: 10px;
        width: 80px;
        line-height: 30px;
    }

    .itemDiv p{
        flex: 1;
        font-size: 14px;
        line-height: 30px;
    }

    .h4Titl{
        font-size: 30px;
    }
    .conInfo{
        padding: 20px 0;
    }
    .conInfo p{
        font-size: 9px;
        line-height: 20px;
        font-family: "Light";
        margin: 10px 0;
    }

    .conInfoA{
        width: 200px;
    }
}
</style>