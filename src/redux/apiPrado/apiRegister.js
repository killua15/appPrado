export default async (name,idDoc,password, birth,email,prCode,mobile,gender) => {
    const URL ='http://nocheynoche.com/api/register'
    console.log(gender)
    var data = {
        "name" :name ,
        "idDoc" : idDoc,
        "birth" : birth,
        "email" : email,
        "prCode" :prCode,
        "mobile" : mobile,
        "gender" : gender,
        "password":password
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