export default async () => {
    //Para poder probar la lista de fiestas
    var URL = 'http://nocheynoche.com/api/event'
    var data = {
        "token": "eltototoken",
    }
    //console.log(URL)
    return await fetch(URL, {
        method: 'GET',
        headers:{'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eltototoken'}
    }).then(v => {
        var body =[]
        console.log(JSON.parse(v._bodyInit).events)
        
        return JSON.parse(v._bodyInit).events
    })
}