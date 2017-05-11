const csv = require('../lib/csv')
const moment = require('moment')
const should = require('should')

const sample = require('./sample')

describe('CSV', () => {
  describe('save', () => {
    it('should save and read a sample CSV file', function(done) {
      csv
        .save(sample, 'sample')
        .then(
          csv
            .read('sample')
            .then(data => {
              data.length.should.equal(3)
              data[0].title.should.equal(
                'Shannon Cason’s Homemade Stories Live'
              )
              done()
            })
            .catch(error => {
              should.not.exist(error)
            })
        )
        .catch(error => {
          should.not.exist(error)
        })
    })
  })
})
