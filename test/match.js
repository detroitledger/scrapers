const match = require('../lib/match')

const sample = require('./sample')

const tests = [
  {
    query: 'focus: hope',
    name: 'Focus: HOPE',
    id: 223,
  }, {
    query:
  }
]

describe('Match', () => {
  it('matches some grantees', function(done) {
    match.org('focus: hope').then(org => {
      org.name.should.equal('Focus: HOPE')
      org.id.should.equal(223)
      done()
    })
  })
})
