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

## Match grants to ledger org

```
npm run match knight
```

This will give you an interface to match a grantee organization to its ledger ID
The interface will also build up a new CSV with the matched org and its data.

Selecting "Save to CSV" will save your results to `orgname-matched.csv` (eg
`knight-matched.csv` if you ran `npm run match knight`). The Ledger grantee's
node ID and name are in the `grantee_id` and `grantee_name` columns. If there
wasn't a match for those orgs, those columns will be blank; you'll have to deal
with them yourself. 

## Developing

Each scraper should return a promise that resolves to a JSON array of grants
with the following headers. These headers are also expected in every CSV
produced. It's ok if a column exists but has no values. 

```
granter_id    // Detroit Ledger ID of the granter
grantee       // Name of the grantee
grantee_id    // ID of the grantee
description   // Plain-text description
start         // Moment date
end           // Moment date
amount        // Amount as a number
url           // Reference url
```

Once you have made a scraper, register it with a slug in `index.js`.

## Tests

`npm test`

For code coverage: `npm coverage`
