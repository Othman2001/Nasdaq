
export const StockCall = {
    getSocks: async(url) => {

        const response = await fetch(url)
        const data = await response.json()
        
            console.log(data, "mock ")
        return data.results


    },
    callStockData: async(url) => {
        const response = await fetch(url)
        const data = response.json();
        return data
    }


}