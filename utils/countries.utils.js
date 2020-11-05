export function getRegions(countries) {
    const regionsList = new Set(countries.map(country => country.region))
    return Array.from(regionsList)
}

export function getCurrencies(countries) {
    const currenciesList = new Set(countries.map(country => country.currencies))
    return Array.from(currenciesList)
}