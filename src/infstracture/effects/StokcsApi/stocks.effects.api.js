import cache from 'memory-cache'
import axios from 'axios'
import { setupCache, setup } from 'axios-cache-adapter'

export class Api {
    constructor(request) {
        this.request = request
    }
}
export const StockCall = {
    getSocks: async(url) => {
        // the fetched data
        // const cachedResponse = cache.get(url);
        // if(cachedResponse){
        //     console.log("no")
        //     return cachedResponse;
        // }else{
        //     const horus = 24;
        const response = await fetch(url)
        const data = await response.json()
            //     cache.put(url , data , horus * 1000 * 60 *60);
            //     console.log("yes")
        return data.results

        // }

        //    const cache = setupCache({
        //        maxAge:15*60*1000
        //    })

        //    const api = axios.create({
        //        adapter:cache.adapter
        //    })

        //    api({
        //        url:url,
        //        method: 'get'
        //    }).then(async (response)=>{

        //        console.log('request' , response)
        //        const data =response
        //        const length = await cache.store.length()
        //        console.log('cahe store lengt' , length)



        //     })
        //     console.log(api , "api")
        //     return api



    },
    callStockData: async(url) => {
        const response = await fetch(url)
        const data = response.json();
        return data
    }


}