const { Client } = require('pg');


async function getConection () {
  const client =new Client({
    host: 'localhost',
    port: 5432,
    user: 'vic',
    password: 'toor',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConection;
