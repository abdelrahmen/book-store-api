//we will load here the configs
const { Pool } = require("pg");
require("dotenv").config();

const db_config = {
  // all valid client config options are also valid here
  // in addition here are the pool specific configuration parameters:

  // number of milliseconds to wait before timing out when connecting a new client
  // by default this is 0 which means no timeout
  connectionTimeoutMillis: 300,

  // number of milliseconds a client must sit idle in the pool and not be checked out
  // before it is disconnected from the backend and discarded
  // default is 10000 (10 seconds) - set to 0 to disable auto-disconnection of idle clients
  idleTimeoutMillis: 200,

  // maximum number of clients the pool should contain
  // by default this is set to 10.
  max: 20,

  // Default behavior is the pool will keep clients open & connected to the backend
  // until idleTimeoutMillis expire for each client and node will maintain a ref
  // to the socket on the client, keeping the event loop alive until all clients are closed
  // after being idle or the pool is manually shutdown with `pool.end()`.
  //
  // Setting `allowExitOnIdle: true` in the config will allow the node event loop to exit
  // as soon as all clients in the pool are idle, even if their socket is still open
  // to the postgres server.  This can be handy in scripts & tests
  // where you don't want to wait for your clients to go idle before your process exits.
  // allowExitOnIdle: boolean
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(db_config);

pool.on("connect", (client) => {
  console.log("database connected");
});

pool.on("remove", (client) => {
  console.log("database connection removed");
});

module.exports = pool;