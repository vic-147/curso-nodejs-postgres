const boom = require('@hapi/boom');
const getConection = require('../libs/postgres');

class UserService {
  constructor() {}

  async create(data) {
    const client = await getConection();
    const rta = await client.query('INSERT INTO tasks(title) VALUES($1) RETURNING *', [data.title]);
    // client.release();
    return rta.rows[0];
  }
  //   return data;
  // }

  // trae todo los ususario
  async find() {
    const client = await getConection();
    const rta = await client.query('SELECT * FROM tasks');
    // client.release();
    return rta.rows;
  }

  // trae un usuario
  async findOne(id) {
    const client = await getConection();
    const rta = await client.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return rta.rows[0];
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  //  borra un usuario
  async delete(id) {
    const client = await getConection();
    await client.query('DELETE FROM tasks WHERE id = $1', [id]);
    return { id };
  }
}

module.exports = UserService;
