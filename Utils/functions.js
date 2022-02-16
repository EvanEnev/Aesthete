async function findGif(name, client) {
  const gif = await client.tenor.Search.Query(name, '1');
  return gif;
}

module.exports = { findGif };
