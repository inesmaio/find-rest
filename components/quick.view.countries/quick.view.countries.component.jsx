import React from 'react'
import { ContainerRow, MainContainer, InfoContainer, Title, Flags } from './quick.view.countries.style'

const CountryDetail = ({
    country,
    funcGetFlag
}) => {
    return (
        <MainContainer onClick={(e) => e.stopPropagation()}>
            <ContainerRow>
                <Title>{country.name}</Title>
                <Flags src={country.flag} key={country.flag} width="100px" height="65px"></Flags>
            </ContainerRow>
            <ContainerRow>
                <InfoContainer>
                    <ContainerRow> <p>{country.fullName}</p><p>{country.alpha3Code}</p></ContainerRow>
                    <p><strong>Capital: </strong>{country.capital}</p>
                    <p><strong>Region: </strong>{country.region}</p>
                    <p><strong>Region Bloc: </strong>{country.regionBloc.map(region => <span>{region.name} </span>)}</p>
                    <p><strong>Borders</strong><br /> {funcGetFlag(country.borders).map((linkToFlag, i) => <Flags src={linkToFlag} key={linkToFlag} width="30px" height="20px" />)}</p>
                </InfoContainer>
                <InfoContainer>
                    <p><strong>Currency: </strong>{country.currencies} {country.currenciesSymbol}</p>
                    <p><strong>Population: </strong>{country.population}</p>
                    <p><strong>Area: </strong>{country.area}</p>
                    <p><strong>Timezones: </strong>{country.timezones.map(time => <span>{time} </span>)}</p>
                    <p><strong>Languages: </strong>{country.languages.map(lang => <span>{lang.name} </span>)}</p>
                    <p><strong>Calling Code: </strong>{country.callingCode.map(code => <span>{code} </span>)}</p>
                </InfoContainer>
            </ContainerRow>
        </MainContainer>
    )
}

export default CountryDetail