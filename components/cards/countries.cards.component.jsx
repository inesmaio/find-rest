import React from "react";
import { ContainerColumn, List, ListItems, SubTitle, Flags } from "./countries.cards.style"

const CountryCard = ({
    countriesArray,
    funcGetFlag
}) => {
    return (
        <ContainerColumn>
            <List>
                {countriesArray.map((country) => <ListItems key={country.name}>
                    <SubTitle><strong>{country.name}</strong></SubTitle><br />
                    <strong>Country Capital</strong> {country.capital}<br />
                    <strong>Region</strong> {country.region}<br />
                    <strong>Population</strong> {country.population}<br />
                    <strong>Currency</strong> {country.currencies} {country.currenciesSymbol}<br />
                    <strong>Borders</strong><br /> {funcGetFlag(country.borders).map((linkToFlag, i) => <Flags src={linkToFlag} key={linkToFlag} width="30px" height="20px" />)}
                </ListItems>)
                }
            </List>
        </ContainerColumn>
    )
}

export default CountryCard