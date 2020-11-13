export const normalizeCountries = (countries) => countries.map(country => ({
    name: country.name,
    capital: country.capital,
    region: country.region,
    population: country.population,
    borders: country.borders,
    currencies: country.currencies[0].name,
    currenciesSymbol: country.currencies[0].symbol,
    languages: country.languages,
    timezones: country.timezones,
    area: country.area,
    alphaCode: country.alpha3Code,
    flag: country.flag,
    callingCode: country.callingCodes,
    regionBloc: country.regionalBlocs
}))
