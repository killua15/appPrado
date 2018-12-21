export default async (codFiesta,idFiesta) => {
    //Para poder probar la lista de fiestas
    var URL = 'http://nocheynoche.com/api/event/going'
    var data = {
        "code": codFiesta,
        "eventId": idFiesta
    }
    console.log(codFiesta)
    return await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eltototoken'
        }
    }).then(v => {
        var body = []
        console.log(v)
        // body[0] = JSON.parse(v._bodyInit).event
        // body[1] = JSON.parse(v._bodyInit).going
        // return body
    })
}