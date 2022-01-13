import React, { createContext, useState , useContext, useEffect} from 'react'
import axios from 'axios'

const WheatherContext=createContext();

export const WheatherProvider = ( { children ,city } ) => {

    const getData =(cityName)=>{
        console.log("getdata")
    axios.get('https://api.collectapi.com/weather/getWeather', {
        params: {
            'data.lang': 'tr',
            'data.city': cityName,
        },
        headers: {
            'authorization': 'apikey 593YFFWF8zc4QsCEYIcBpP:0juGXh1q4LszOX1NT6fyUm',
            'content-type': 'application/json',
        }
         })
        .then((data) => setData(data.data['result']))
        .catch((e)=> console.error(e));
    }

    useEffect(()=>{
        setData(getData(city))
    },[city])
    
    const [data,setData] = useState();
    
    const values={
        data,
        setData,    
    }

    
    return(
        <WheatherContext.Provider  value={values}>{children} </WheatherContext.Provider>
    )
}

export const useWheather = () => useContext(WheatherContext);


export default WheatherContext
