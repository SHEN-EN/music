export const priceFilter = params =>{
     return '￥'+(params/100).toFixed(2);
}