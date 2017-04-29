const csv = require('csv')
const fs = require('fs-extra')

module.exports.save = (data, name) => {
  return new Promise((resolve, reject) => {
    csv.stringify(data, { header: true }, (error, csvString) => {
      if (error) {
        return reject(error)
      }

      fs
        .writeFile(`${name}.csv`, csvString)
        .then(() => {
          console.log(`Saved ${name}.csv`)
          resolve()
        })
        .catch(reject)
    })
  })
}

module.exports.read = name => {
  return new Promise((resolve, reject) => {
    fs
      .readFile(`${name}.csv`)
      .then(data => {
        csv.parse(data, { columns: true }, (error, json) => {
          if (error) {
            return reject(error)
          }
          resolve(json)
        })
      })
      .catch(reject)
  })
}
