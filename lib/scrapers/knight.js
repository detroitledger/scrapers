const ent = require('ent')
const moment = require('moment')
const request = require('request-promise')
const striptags = require('striptags')

const uri =
  'https://kfapi-production.herokuapp.com/api/v1/search?community_ids%5B%5D=8&content_sources%5B%5D=grant&page=1'
const details = 'https://kfapi-production.herokuapp.com/api/v1/grants/'
const grant_url = 'https://knightfoundation.org/grants/'
const granter_id = 306 // Ledger ID of the org

function extract(grant) {
  grant = grant.grant
  return {
    granter_id: granter_id,
    title: grant.title,
    description: ent.decode(striptags(grant.description)),
    start: moment(grant.started_on),
    end: moment(grant.ended_on),
    grantee: grant.grantee.name,
    amount: grant.amount,
    url: grant_url + grant.id,
  }
}

function getDetails(grant) {
  return request({
    uri: details + grant._id,
    json: true,
  }).then(extract)
}

function process(data) {
  return Promise.all(data.results.map(getDetails))
}

module.exports = () => {
  return request({
    uri: uri,
    json: true,
  }).then(process)
}
