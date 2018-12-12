export default async (id) => {
    //Para poder probar la lista de fiestas
    var URL = `http://bluemindapps.com/api/david/event/${id}`
    //console.log(URL)
    return await fetch(URL, {
        method: 'GET',
        headers:{'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eltototoken'}
    }).then(v => {
        var body =[]
        console.log(JSON.parse(v._bodyInit))
        body[0]=JSON.parse(v._bodyInit).event
        body[1]=JSON.parse(v._bodyInit).going
        return body
    })
}