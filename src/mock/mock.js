import Mock from 'mockjs';
Mock.mock('/mock/selectTopCatalogWithoutToken.do', 'post', (data)=>{
    return{
        list:[
        {
            img:require('../assets/list.png'),
            title:'蔬菜类'
        },
        {
            img:require('../assets/meet.png'),
            title:'肉类',
        },
        {
            img:require('../assets/water.png'),
            title:'水产类',
        },
        {
            img:require('../assets/dou.png'),
            title:'豆制品类',
        },
        {
            img:require('../assets/egg.png'),
            title:'禽蛋类',
        },
        {
            img:require('../assets/fulit.png'),
            title:'水果类'
        },
        {
            img:require('../assets/tiaowei.png'),
            title:'调味品类',
        },
        {
            img:require('../assets/oll.png'),
            title:'粮油'
        },
        {
            img:require('../assets/ganhuo.png'),
            title:'南北干货'
        },
        {
            img:require('../assets/bancheng.png'),
            title:'半成品类'
        }
        ]
    }
})
Mock.mock('/mock/shopList.do', 'post', (data)=>{
    return{
        list:[
            {
                img:require('../assets/shop.png'),
                title:'香印葡萄1盒*500克',
                secondTitle:'引进品种 以香气文明世界',
                price:'5000',
                orderPrice:'6800'
            },
            {
                img:require('../assets/a.png'),
                title:'【整箱15瓶】元气森林 橘味苏打气泡水480ml',
                secondTitle:'引进品种 以香气文明世界',
                price:'4800',
                orderPrice:'5800'
            },
            {
                img:require('../assets/b.png'),
                title:'精选牛肉片150g',
                secondTitle:'源自草饲牛的牛腿肉 嫩又...',
                price:'6800',
                orderPrice:'7800'
            },
            {
                img:require('../assets/c.png'),
                title:'蒙牛纯甄常温酸牛奶礼 盒200g*24盒',
                secondTitle:'蒙牛纯甄常温酸牛奶礼盒...',
                price:'5500',
                orderPrice:'6600'
            },
            {
                img:require('../assets/d.png'),
                title:'【4袋】澳洲谷饲雪花 牛小排',
                secondTitle:'赠送进口黄油和胡椒 剪完...',
                price:'3500',
                orderPrice:'4300'
            },
            {
                img:require('../assets/e.png'),
                title:'菲律宾凤梨2个4斤起',
                secondTitle:'树上原摘 需自己去皮处理 ',
                price:'3000',
                orderPrice:'4800'
            },
            {
                img:require('../assets/j.jpg'),
                title:'格桑泉饮用天然水1箱（500ml*24/箱）',
                secondTitle:'买一送一',
                price:'3500',
                orderPrice:'4300'
            },
            {
                img:require('../assets/f.jpg'),
                title:'乐事忠于原味薯片104g',
                secondTitle:'乐事好薯片',
                price:'1200',
                orderPrice:'1600'
            },
            {
                img:require('../assets/g.jpg'),
                title:'福君山山楂糕268g',
                secondTitle:'引进品种',
                price:'1000',
                orderPrice:'1200'
            },
            {
                img:require('../assets/h.jpg'),
                title:'洽洽怪味豆蟹黄味60g',
                secondTitle:'洽洽怪味豆蟹黄味60g*50/箱',
                price:'500',
                orderPrice:'1000'
            },
            {
                img:require('../assets/i.jpg'),
                title:'徽师傅花生米120g',
                secondTitle:'天然花生米',
                price:'300',
                orderPrice:'660'
            },
            {
                img:require('../assets/k.jpg'),
                title:'重庆小天鹅麻辣烫底料150g',
                secondTitle:'买一送一',
                price:'1800',
                orderPrice:'2360'
            },
            ]}

})
Mock.mock('/mock/recommend.do','post',(data)=>{
    let math=parseInt(Math.random()*2)
    if (JSON.parse(data.body).createTime&&math==0) {
        return {
        list:[{
            img:require('../assets/today_a.jpg'),
            title:'旺旺摇滚冻巧克力味132g',
            },
            {
                img:require('../assets/today_b.png'),
                title:'脆脆鲨饼干巧克力味 32条*2盒',
            },
            {
                img:require('../assets/today_c.png'),
                title:'芒果干500克休闲 网红小吃水果干'
            },
            {
                img:require('../assets/today_d.jpg'),
                title:'旺仔QQ糖水蜜桃味23g'
            },
            {
                img:require('../assets/today_e.jpg'),
                title:'桃李鸡蛋饼面包175g'
            },
            {
                img:require('../assets/today_f.jpg'),
                title:'旺仔牛奶245ML(一提12个)'
            },
        ]
        }
    }
    if (JSON.parse(data.body).createTime&&math==1) {
        return {
            list:[{
                    img:require('../assets/today_g.jpg'),
                    title:'统一汤达人海鲜拉面杯装80g',
                },
                {
                    img:require('../assets/today_h.jpg'),
                    title:'旺旺黑白配焦糖奶香味夹心饼干60g*24',
                },
                {
                    img:require('../assets/today_i.jpg'),
                    title:'德氏快乐小屋巧克力口味雪糕140g'
                },
                {
                    img:require('../assets/today_j.jpg'),
                    title:'德氏扒皮绿豆70g'
                },
                {
                    img:require('../assets/today_e.jpg'),
                    title:'桃李鸡蛋饼面包175g'
                },
                {
                    img:require('../assets/today_f.jpg'),
                    title:'旺仔牛奶245ML(一提12个)'
                },
            ]
            }
    }
})