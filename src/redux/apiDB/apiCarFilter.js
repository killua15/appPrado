
var db
var tx
export default async (item) => {
  var datos
  var promies_json = []
  let SQLite = require("react-native-sqlite-storage");
  db = SQLite.openDatabase(
    {
      name: "taxis_cars",
      createFromLocation: 1,
      location: "Documents"
    },
    this.openCB,
    this.errorCB
  );
  const resultArray = []
   // console.log("con parametro")
  query = "SELECT * FROM car_taxi where service_type_car_taxi = ?"
  tx = await transaccion()
  return await new Promise((resolve, reject) => {
    tx.executeSql(query, [item], (tx, results) => {
      tx = null
      for (let i = 0; i < results.rows.length; i++) {
       
        resultArray[i] = results.rows.item(i)
      }
      //console.log(resultArray)
      resolve(resultArray)
    })
  })
}
const transaccion = async () => {
  tx = await new Promise((resolve, reject) => {
    db.transaction(resolve, reject)
  })
  return tx
}
