export default async (id,token) => {
    //Para poder probar la lista de fiestas
    var URL = `http://nocheynoche.com/api/event/${id}`
    console.log(token)
    return await fetch(URL, {
        method: 'GET',
        headers:{'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`}
    }).then(v => {
        var body =[]
        console.log(JSON.parse(v._bodyInit))
        body[0]=JSON.parse(v._bodyInit).response
        body[1]=JSON.parse(v._bodyInit).response
        return body
    })
}