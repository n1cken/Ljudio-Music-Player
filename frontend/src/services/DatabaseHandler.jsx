import React, { createContext } from 'react'
// import { sqlite3 } from 'sqlite3';

export const DatabaseHandler = createContext()

function DatabaseHandlerProvider(props) {


    function saveSearchHistory() {
        const sqlite3 = require('sqlite3').verbose()
        let db = new sqlite3.Database('../../LJUDIO_HISTORY_DATABASE.db');
        let sql1 = 'INSERT INTO searchHistory (previousSearches) VALUES ("Test")';
        db.run(sql1, [], function (err) {
            if (err) { return console.log(`ERROR: Bitch didn't post to the DB`) }
            console.log(`Post to DB sucessful Bitch! ${this.lastID}`);
        })

        db.close();
        console.log("hej")
    }

    function savePlayHistory() {
        const sqlite3 = require('sqlite3').verbose()
        let db = new sqlite3.Database('../../LJUDIO_HISTORY_DATABASE.db');
        let sql2 = 'INSERT INTO playbackHistory (playedSongs) VALUES ("Åsne Test")';
        db.run(sql2, [], function (err) {
            if (err) { return console.log(`ERROR: Bitch didn't post to the DB`) }
            console.log(`Post to DB sucessful Bitch! ${this.lastID}`);
        })

        db.close();

    }

    return (
        <DatabaseHandler.Provider value={[savePlayHistory, saveSearchHistory]}>
            {props.children}
        </DatabaseHandler.Provider>
    )


}



export default DatabaseHandlerProvider
