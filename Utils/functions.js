async function findGif(name, client) {
  return await client.tenor.Search.Query(name, '1');
}

module.exports = { findGif };
