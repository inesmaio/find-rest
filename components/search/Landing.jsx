import React from "react";
import styled from "styled-components";
import { DropDown } from '../filter';
import CountryNameFilter from '../filter/input.country.name.filter.component';
import CountryCard from '../cards/countries.cards.component';
import { fetchCountries } from "../../services/countries.api.service";
import { getRegions, getCurrencies } from "../../utils/countries.utils";
import Pagination from "../pagination/pagination.numbers.component"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background: #b0cfc5;
  color: #385f71;
`;

const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
  width: 80vw;
  background: #b0cfc5;
  color: #385f71;
`
const ContainerRow = styled.section`
  display: flex;
  flex-direction: row;
  background: #b0cfc5;
  color: #385f71;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: normal;
  margin: 20px;
  width: 20vw;
`;

const Title = styled.h1`
  font-size: 40px;
  text-shadow: 5px 5px 10px #F2F7F6;
  text-align: center;
  color: #a95a4c;
`


class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countryNameFilter: "",
      countryRegFilter: "",
      currencyVal: "",
      countries: [],
      currentPage: 1,
      cardsPerPage: 6,
      loading: false,
    }
    this.handleTextOnChange = this.handleTextOnChange.bind(this);
    this.handleCurrencyOnChange = this.handleCurrencyOnChange.bind(this);
    this.handleRegionOnChange = this.handleRegionOnChange.bind(this);
    this.handleCurrentPage = this.handleCurrentPage.bind(this);
    this.handleIncreasePage = this.handleIncreasePage.bind(this);
    this.handleDecreasePage = this.handleDecreasePage.bind(this);

  }

  handleTextOnChange() {
    this.setState({ countryNameFilter: event.target.value, currentPage: 1 });
  }

  handleCurrencyOnChange() {
    this.setState({ currencyVal: event.target.value, currentPage: 1 })
  }
  handleRegionOnChange() {
    this.setState({ countryRegFilter: event.target.value, currentPage: 1 })
  }
  handleCurrentPage() {
    this.setState({ currentPage: Number(event.target.id) })
  }

  handleDecreasePage() {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 })
    }
  }
  handleIncreasePage() {
    const linksNum = this.state.countries.filter(this.showDisplayCountry.bind(this)).length;
    if (this.state.currentPage < (linksNum / this.state.cardsPerPage)) {
      this.setState({ currentPage: this.state.currentPage + 1 })
    }
  }


  componentWillMount() {
    this.loadData();
  }

  getFlag(borders) {
    return borders.map(borderCountry => {
      const flags = this.state.countries.filter(country => {
        if (borderCountry === country.alphaCode) {
          return country.flag
        }
      })
      return flags[0].flag
    })
  }


  isCountryRegionFilter(country) {
    return !this.state.countryRegFilter || country.region.toUpperCase().includes(this.state.countryRegFilter.toUpperCase())
  }

  isCountryNameFilter(country) {
    return country.name.toUpperCase().startsWith(this.state.countryNameFilter.toUpperCase())
  }

  isCountryCurrencyFilter(country) {
    return !this.state.currencyVal || country.currencies.includes(this.state.currencyVal)
  }

  showDisplayCountry(country) {
    return this.isCountryNameFilter(country) && this.isCountryCurrencyFilter(country) && this.isCountryRegionFilter(country)
  }


  async loadData() {
    this.setState({ loading: true });
    try {
      const countries = await fetchCountries();
      this.setState({ countries });
    } catch {
      console.log("Ups!!! Something went wrong")
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    // Get current countries
    const countriesToShow = this.state.countries.filter(this.showDisplayCountry.bind(this));
    const indexOfLastCountry = this.state.currentPage * this.state.cardsPerPage;
    const indexOfFirstCountry = indexOfLastCountry - this.state.cardsPerPage;
    const currentCountry = countriesToShow.slice(indexOfFirstCountry, indexOfLastCountry)


    return (
      <Container>
        <Title>Countries List</Title>
        <ContainerRow>
          <ContainerRow>
            <Form>
              <CountryNameFilter
                value={this.state.countryNameFilter}
                handler={this.handleTextOnChange}
              />
              <DropDown
                label="Region"
                id="region"
                name="region"
                value={this.state.countryRegFilter}
                options={getRegions(this.state.countries)}
                handler={this.handleRegionOnChange}
              />
              <DropDown
                label="Currency"
                id="currency"
                name="currency"
                value={this.state.currencyVal}
                options={getCurrencies(this.state.countries)}
                handler={this.handleCurrencyOnChange}
              />
            </Form>
          </ContainerRow>
          <ContainerColumn>
            <CountryCard
              countriesArray={currentCountry}
              funcGetFlag={this.getFlag.bind(this)}
            />
            <Pagination
              clickHandler={this.handleCurrentPage}
              increaseHandler={this.handleIncreasePage}
              decreaseHandler={this.handleDecreasePage}
              countriesToShow={countriesToShow.length}
              currentPage={this.state.currentPage}
              cardsPerPage={this.state.cardsPerPage}
            />
          </ContainerColumn>
        </ContainerRow>
      </Container>
    )
  }
}

export default Landing;
