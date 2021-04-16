const db = require('../../data/dbConfig');

const findAll = () => {
  return db('resources');
}

const findById = resource_id => {
  return db('resources').where('resource_id', resource_id).first();
}

const create = async resource => {
  const [ resource_id ] = await db('resources').insert(resource);
  return findById(resource_id);
}

module.exports = {
  findAll,
  findById,
  create
}
