import React from 'react'



//  function createDatabase() {

        //Checks first if there already is a DB file existing.
        //If there is none, one will be created with the correct tables & columns
        const fs = require('fs');
        const { useEffect } = require('react');
        const dir = '../../LJUDIO_HISTORY_DATABASE.db'
        if ( fs.existsSync(dir) ) {
          console.log(`DB File already exist, did not create new one`)
         
     }

     else {
      const sqlite3 = require('sqlite3').verbose()
        let db = new sqlite3.Database('../../LJUDIO_HISTORY_DATABASE.db');
        db.run('CREATE TABLE searchHistory(id INTEGER PRIMARY KEY AUTOINCREMENT, previousSearches VARCHAR(50))');
        db.run('CREATE TABLE playbackHistory(id INTEGER PRIMARY KEY AUTOINCREMENT, playedSongs VARCHAR(50))');
        db.close();
        console.log(`SQLite DB File Created`) 
     }

 // }

export default DatabaseCreator
