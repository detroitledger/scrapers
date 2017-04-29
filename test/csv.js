const csv = require('../lib/csv')
const moment = require('moment')
const should = require('should')

const sample = [
  {
    granter_id: 306,
    title: 'Shannon Cason’s Homemade Stories Live',
    description: 'To spotlight the best national and local storytellers through a monthly event, Homemade Stories Live.',
    start: moment('2016-11-05T00:00:00.000'),
    end: moment('2019-12-01T00:00:00.000'),
    grantee: 'Shannon Cason',
    amount: 65000,
    url: 'https://knightfoundation.org/grants/7795',
  },
  {
    granter_id: 306,
    title: 'The Enemy of My Enemy',
    description: 'To explore external narratives and perceptions of the United States by collaborating with artists from China, Russia and Iran to write new works about Americans and perform them in Detroit and online.',
    start: moment('2016-11-05T00:00:00.000'),
    end: moment('2019-12-01T00:00:00.000'),
    grantee: 'The Hinterlands',
    amount: 70000,
    url: 'https://knightfoundation.org/grants/7797',
  },
  {
    granter_id: 306,
    title: 'Wire-Car Auto Workers Association of Detroit (WAWAD)',
    description: 'To promote wire-car culture through an interactive website that serves as a resource for wire-car makers and enthusiasts, and to create a mobile parking structure to showcase models by association members.',
    start: moment('2016-11-05T00:00:00.000'),
    end: moment('2018-12-01T00:00:00.000'),
    grantee: 'Wire-Car Auto Workers Association of Detroit (WAWAD)',
    amount: 7300,
    url: 'https://knightfoundation.org/grants/7814',
  },
]

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
