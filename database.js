//creates a pool connection to the mysql server
const {
    createPool
} = require('mysql');

//serves the pool the details of the database
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "books",
    connectionLimit: 10
})

//selects the data in the database
pool.query('select * from books', (err, result, fields) =>{

    if(err){
        //produces an error message if the query fails
        console.log(err)
    }
    return console.log(result)
})