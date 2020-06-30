import axios from 'axios';
//axis is to make API requests

const url = "https://covid19.mathdro.id/api";
//to call function we need to export it
export const fetchData = async() =>{
    //function that deals with asynchronus data
    try
    {
        const {data} = await axios.get(url);
        //console.log(response);

        const modifiedData = {
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate,
        }
        //another simple way to avoid code redundancy which is in the const data we specify the data that we want
        // const {data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        //so if we do that we can return data easily like :
        // return { confirmed, recovered, deaths, lastUpdate }
        return modifiedData;

    }
    catch(error)
    {


    }
}

    export const fetchDailyDate = async ()=>{
        try{
            const {data} = await axios.get(`${url}/daily`);
            console.log(data);
        }
    catch(error){

    }
    
    }
