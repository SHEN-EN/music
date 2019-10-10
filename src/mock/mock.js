import Mock from 'mockjs';
Mock.mock('/api/login', 'post', (data)=>{
    return{
        'msg':'success'
    }
})