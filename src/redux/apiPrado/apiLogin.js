export default async (user,pass) => {
    const URL ='http://nocheynoche.com/api/login'
    var data = {
        "idDoc": user,
        "password": pass
    }
   console.log(data)
   return await fetch(URL,{
        method:'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type':'application/json'}
    }).then(v => {
          var body =[]
          console.log(v)
          body[0] =JSON.parse(v._bodyInit)
          body[1] =JSON.parse(v.status)
          return body
    })
}