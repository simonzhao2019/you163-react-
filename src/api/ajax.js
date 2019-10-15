import axios from 'axios';
import qs from 'qs';

axios.interceptors.request.use((config)=>{

  let data=config.data
  if(data&&data instanceof Object){
    config.data=qs.stringify(data)
  }
  return config
})
axios.interceptors.response.use(
  response=>{
    return response=response.data
  },
  error=>{
     return new Promise(() => {});
  }
)



export default axios