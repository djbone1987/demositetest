const mysql = require('mysql');

// Database Connection for Production



const createUnixSocketPool = async config => {
    const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';

    // Establish a connection to the database
    return await mysql.createPool({
        user: "svc_lpsync",
        password: "LP@Sync2020!",
        database:  "lpsync_db",
        socketPath: `${dbSocketPath}/lpsync:us-central1:lpsync-db`,
    });
};

createUnixSocketPool();

// let config = {
// user: "svc_lpsync",
//     database: "lpsync_db",
//     password: "LP@Sync2020!"
//  }
//
//  //if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
//   config.socketPath = `/cloudsql/lpsync:us-central1:lpsync-db`;
// // }

 // let connection = mysql.createConnection(config);

// Database Connection for Development

// let connection = mysql.createConnection({
//     host: "35.238.133.62",
//     user: "svc_lpsync",
//     database: "lpsync_db",
//     password: "LP@Sync2020!"
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error('Error connecting: ' + err.stack);
//         return;
//     }
//     console.log('Connected as thread id: ' + connection.threadId);
// });

module.exports = connection;