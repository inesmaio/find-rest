import React from 'react';
import { Form } from './filter.style'
import CountryNameFilter from './input.country.name.filter.component';
import DropDown from './dropdown.filter.component';
import { getRegions, getCurrencies } from "../../utils/countries.utils";

const FilterNav = ({
    countries,
    regionVal,
    currVal,
    countryName,
    handlerNameFilter,
    handlerRegionFilter,
    handlerCurrFilter,
}) => {
        return (
            <Form>
                <CountryNameFilter
                    value={countryName}
                    handler={handlerNameFilter}
                />
                <DropDown
                    label="Region"
                    id="region"
                    name="region"
                    value={regionVal}
                    options={getRegions(countries)}
                    handler={handlerRegionFilter}
                />
                <DropDown
                    label="Currency"
                    id="currency"
                    name="currency"
                    value={currVal}
                    options={getCurrencies(countries)}
                    handler={handlerCurrFilter}
                />

            </Form>
        )
    }


export default FilterNav