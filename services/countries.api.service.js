import { normalizeCountries } from "../models/countries.model";

export const fetchCountries = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const jsonResponse = await response.json();
    return normalizeCountries(jsonResponse);
}