# Grant Data Scrapers

A set of tools to scrape grant data from foundation websites for the
[Detroit Ledger](https://detroitledger.org)

## Install

```npm install``` should get you there

## Scrape

```
npm run scrape knight
```

Where `knight` is the slug of the foundation you want to scrape. See `index.js`
for a list of scrapers.

Results will be saved as a CSV in the project root directory.

## Developing

Each scraper should return a promise that resolves to a JSON array of grants
with the following headers:

```
granter_id    // Detroit Ledger ID of the granter
description   // Plain-text description
start         // Moment date
end           // Moment date
grantee       // Name of the grantee
amount        // Amount as a number
url           // Reference url
```

Once you have made a scraper, register it with a slug in `index.js`.

## Tests

`npm test`

For code coverage: `npm coverage`
