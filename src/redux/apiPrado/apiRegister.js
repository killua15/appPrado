export default async (name,idDoc, birth,email,prCode,mobile,gender) => {
    const URL ='http://bluemindapps.com/api/david/register'
    var data = {
        "name" :name ,
        "idDoc" : idDoc,
        "birth" : birth,
        "email" : email,
        "prCode" :prCode,
        "mobile" : mobile,
        "gender" : gender
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