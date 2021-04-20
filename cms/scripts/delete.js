const fetch = require('node-fetch')
const client = require('part:@sanity/base/client')
const { uuid } = require('@sanity/uuid')

// Add your token to get write privileges
client.clientConfig.token =
  'skN3XjrnBA4b6xlXZLacfHdjjCfVqsPdpQFM6hXcxKksVVmIB8IBeXDa5se05I5PAF2XfcKwk5l04u2Z5Glj8hqdpAIM6TNfzXmhVfW8Aof9Hy0pUugqu9MpIohNYsqLjJ4YBENpmXuAXdnqNtxGUqoqkjwfHW0ZsUgPDMzSti2QBJAJG5yG'

/**
 * from cms directory run
 * `sanity exec scripts/populateMenu.js`
 */

client.fetch(`*[_type == 'tag']{_id}`, {}).then(glossary => {
  // TODO: Replace with async loop. It fails in larger sets because of rate limiting
  glossary.forEach(item => {
    console.log(`Deleting ${item._id}`)

    client
      .delete(item._id)
      .then(res => {
        console.log(`Glossary ${item._id} deleted`)
      })
      .catch(err => {
        console.error('Delete failed: ', err.message)
      })
  })
})
