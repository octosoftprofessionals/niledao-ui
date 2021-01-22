const fetch = require('node-fetch')

async function query({ query, variables = {} }) {
  const result = await fetch('https://awaited-elf-63.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })
    .then(response => response.json())
    .catch(err => console.log(err))
  console.log(result.errors)

  return result.data
}

exports.query = query
