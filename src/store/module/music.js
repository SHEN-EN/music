import { songUrl,songlyric } from '../../api/api'
import store from '../store';
const music = {
    state:{

    },
    mutations:{

    },
    actions:{
       async getSongUrl({commit},data){
            let res = await songUrl(data);
            return res;
        },
      async getSonglyric({commit},data){
            let res= await songlyric(data);
            return res;

        }
    }
}
export default music