const csv = require('./lib/csv')

const knight = require('./lib/scrapers/knight')
const scrapers = {
  knight,
}

const name = process.argv[2]

if (!scrapers[name]) {
  console.error(`No scraper for ${name}`)
  process.exit(1)
}

console.log(`Scraping ${name} data...`)
scrapers[name]().then(data => csv.save(data, name))
