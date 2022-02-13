import axios from "axios";

const Url='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

 const getplacesdata =async (sw,ne)=>{
      try{
     const {data:{data}}=await axios.get(Url, {
        method: 'GET',
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': 'ad4e73d845msh17f3e688733f9acp1d94e9jsnb0cf1b594fe3',
        }
      });
      
     return data;
      }catch(error){
          console.log(error)
     
       }
  }
  export default getplacesdata;


 
