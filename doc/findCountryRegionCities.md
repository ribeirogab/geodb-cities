# Find Country Region Cities

## Example

```js
const geodb = require('geodb-cities');

(async () => {
  const { data, pageInfo } = await geodb.findCountryRegionCities({
    limit: 1, page: 0, countryCode: 'US', regionCode: 'AL',
  });

  console.log(data);
  /* Array of countries
  [
    {
      id: 119872,
      wikiDataId: 'Q79728',
      type: 'CITY',
      city: 'Auburn',
      name: 'Auburn',
      latitude: 32.597684,
      longitude: -85.480823,
      population: 60258
    }
  ]
  */

  console.log(pageInfo);
  /* Information of page
  {
    currentPage: 0,
    lastPage: 41,
    totalCount: 41,
    handleNextPage: true
  }
  */
})();
```
