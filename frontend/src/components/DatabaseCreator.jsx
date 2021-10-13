


// class DatabaseCreator {


   // createDatabase() {
    //    if (typeof objectToBeTested != "../../LJUDIO_HISTORY_DATABASE.db")
    // object exists
    //    else
    // object does not exist


const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('../../LJUDIO_HISTORY_DATABASE.db');
db.run('CREATE TABLE searchHistory(id INTEGER PRIMARY KEY AUTOINCREMENT, previousSearches VARCHAR(50))');
db.run('CREATE TABLE playbackHistory(id INTEGER PRIMARY KEY AUTOINCREMENT, playedSongs VARCHAR(50))');
db.close();

  //  }


// }