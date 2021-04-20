# Find Countries

## Example

```js
const geodb = require('geodb-cities');

(async () => {
  const { data, pageInfo } = await geodb.findCountries({ limit: 1, page: 0 })

  console.log(data);
  /* Array of countries
  [
    {
      code: 'VA',
      currencyCodes: [ 'EUR' ],
      name: 'Vatican City',
      wikiDataId: 'Q237'
    }
  ]
  */

  console.log(pageInfo);
  /* Information of page
  {
    currentPage: 0,
    lastPage: 199,
    totalCount: 199,
    handleNextPage: true
  }
  */
})();
```
