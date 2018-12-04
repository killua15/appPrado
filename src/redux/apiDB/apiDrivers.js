export default (item) => {
    var recs_cars=[]
    let SQLite = require("react-native-sqlite-storage");
    let db = SQLite.openDatabase(
        {
          name: "taxis_cuba.db",
          createFromLocation: 1,
          //location: "Library"
        },
        this.openCB,
        this.errorCB
      );
      var query=""
      query="SELECT * FROM drive"

      db.transaction(tx => {
        tx.executeSql(query, [item], (tx, results) => {
          
         
          for (let i = 0; i < results.rows.length; i++) {
            let row = results.rows.item(i);
            recs_cars.push({
              id: row.id,
              phone: row.phone,
              correo:row.correo,
              name:row.name,
            });
          }
  
        
        });
      });
      return (Promise.all(["response",recs_cars]))
}