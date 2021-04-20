# Find Country Regions

## Example

```js
const geodb = require('geodb-cities');

(async () => {
  const { data, pageInfo } = await geodb.findCountryRegions({
    limit: 1, page: 0, countryCode: 'US',
  })

  console.log(data);
  /* Array of countries
  [
    {
      countryCode: 'US',
      fipsCode: '01',
      isoCode: 'AL',
      name: 'Alabama',
      wikiDataId: 'Q173'
    }
  ]
  */

  console.log(pageInfo);
  /* Information of page
  {
    currentPage: 0,
    lastPage: 56,
    totalCount: 56,
    handleNextPage: true
  }
  */
})();
```
