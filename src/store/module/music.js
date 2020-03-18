import { songUrl } from '../../api/api'
const music = {
    state:{

    },
    mutations:{

    },
    actions:{
       async getSongUrl({commit},data){
            let res = await songUrl(data);
            return res;
        }
    }
}
export default music