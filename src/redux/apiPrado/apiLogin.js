export default async (user,pass) => {
    var data = {
        "email": user,
        "password": pass
    }
   
   return await fetch('https://reqres.in/api/login',{
        method:'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type':'application/json'}
    }).then(v => {
          var body =[]
          //console.log(v)
          body[0] =JSON.parse(v._bodyInit)
          body[1] =JSON.parse(v.status)
          return body
    })
}