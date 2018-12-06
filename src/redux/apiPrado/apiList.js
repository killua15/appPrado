export default async () => {  
   //Para poder probar la lista de fiestas
   var api_id ='c5c78b1a1356ad8fb92df719f00732f0'
   var URL =  `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${api_id}&format=json`

   return await fetch(URL).then(v => {
         
           console.log(v)
          return JSON.parse(v._bodyInit).artists
    })
}