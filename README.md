<!-- <h1 align="center">
<img src="https://i.ibb.co/WysD55S/geodb-cities.png" alt="GeoDB Cities" width="250"/>
</h1> -->

# geodb-cities

> 🌍  a wrapper for GeoDB Cities

## Getting Started

### Installation

if you use npm

```zsh
npm install geodb-cities
```

if you use yarn

```zsh
yarn add geodb-cities
```

### Example

```js
const geodb = require('geodb-cities');

(async () => {
  const { data, pageInfo } = await geodb.findCountries({ limit: 10, page: 0 })

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

## Features

Click for more info:

- [Find Countries]();
- [Find Country Regions]():
- [Find Country Region Cities]():

---

## Contributors

| <img width="115"> | <img width="115"> | <img width="115"> | <img width="115"> | <img width="115"> | <img width="115"> |
|:-:|:-:|:-:|:-:|:-:|:-:|

## Author

| [<img src="https://avatars3.githubusercontent.com/u/44847326?s=400&u=30a156f0a61f81eaa137cb286ed13e9527916039&v=4" width="115"><br><sub>@ribeirogab</sub>](https://github.com/ribeirogab) |
| :---: |

---

## Support

Contact me!

- E-mail <a href="mailto:ribeirogabx@gmail.com" target="_blank">`ribeirogabx@gmail.com`</a>

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
