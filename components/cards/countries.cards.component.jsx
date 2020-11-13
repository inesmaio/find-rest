import React from "react";
import { ContainerColumn, ContainerRow, List, ListItems, SubTitle, Flags } from "./countries.cards.style"
import render from "dom-serializer";

class CountryCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardsPerPage: 5,
        }
    }
    render() {
        const countriesToShow = this.props.countries.filter(this.props.showDisplayCountry);
        const indexOfLastCountry = this.props.currentPage * this.state.cardsPerPage;
        const indexOfFirstCountry = indexOfLastCountry - this.state.cardsPerPage;
        const currentCountry = countriesToShow.slice(indexOfFirstCountry, indexOfLastCountry);
        return (
            <ContainerColumn>
                <List>
                    {currentCountry.map((country) => (
                        <ListItems key={country.name} onClick={() => this.props.onClickHandler(country)}>
                            <ContainerRow><SubTitle><strong>{country.name}</strong></SubTitle><Flags src={country.flag} key={country.flag} width="60px" height="40px"></Flags></ContainerRow>
                            <strong>Country Capital</strong> {country.capital}<br />
                            <strong>Region</strong> {country.region}<br />
                            <strong>Population</strong> {country.population}<br />
                            <strong>Currency</strong> {country.currencies} {country.currenciesSymbol}<br />
                            <strong>Borders</strong><br /> {this.props.funcGetFlag(country.borders).map((linkToFlag, i) => <Flags src={linkToFlag} key={linkToFlag} width="30px" height="20px" />)}
                        </ListItems>)
                    )}
                </List>
            </ContainerColumn>
        )
    }
}

export default CountryCard