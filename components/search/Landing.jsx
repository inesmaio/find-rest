import React from "react";
import { Container, ContainerColumn, ContainerRow, Title, PopUpCointainer } from "./landing.style";
import { fetchCountries } from "../../services/countries.api.service";
import { CountryCard } from '../cards';
import { FilterNav } from '../filter';
import { Pagination } from '../pagination';
import { CountryDetail } from "../quick.view.countries" // TODO: Fix import with index

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countryNameFilter: "",
      currencyVal: "",
      countryRegFilter: "",
      countries: [],
      currentPage: 1,
      cardsPerPage: 6,
      countryName: "",
      loading: false,
    }

    this.handleTextOnChange = this.handleTextOnChange.bind(this);
    this.handleCurrencyOnChange = this.handleCurrencyOnChange.bind(this);
    this.handleRegionOnChange = this.handleRegionOnChange.bind(this);
    this.handleCurrentPage = this.handleCurrentPage.bind(this);
    this.handleIncreasePage = this.handleIncreasePage.bind(this);
    this.handleDecreasePage = this.handleDecreasePage.bind(this);
    this.handleQuickView = this.handleQuickView.bind(this);
    this.handleExitQuickView = this.handleExitQuickView.bind(this)

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

  handleQuickView(country) {
    this.setState({ countryName: country.name })
  }

  handleExitQuickView() {
    this.setState({ countryName: "" })
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
    return (
      <Container>
        <Title>Countries List</Title>
        {!!this.state.countryName &&
          <PopUpCointainer
            onClick={this.handleExitQuickView}>
            <CountryDetail
              country={this.state.countries.find(c => c.name === this.state.countryName)}
              funcGetFlag={this.getFlag.bind(this)}
            />
          </PopUpCointainer>
        }
        <ContainerRow>
          <ContainerRow>
            <FilterNav
              countries={this.state.countries}
              countryNameFilter={this.state.countryNameFilter}
              regionVal={this.state.countryRegFilter}
              currVal={this.state.currencyVal}
              handlerNameFilter={this.handleTextOnChange}
              handlerRegionFilter={this.handleRegionOnChange}
              handlerCurrFilter={this.handleCurrencyOnChange}
            />
          </ContainerRow>
          <ContainerColumn>
            <CountryCard
              showDisplayCountry={this.showDisplayCountry.bind(this)}
              countries={this.state.countries}
              currentPage={this.state.currentPage}
              funcGetFlag={this.getFlag.bind(this)}
              onClickHandler={this.handleQuickView}
            />
            <Pagination
              countries={this.state.countries}
              showDisplayCountry={this.showDisplayCountry.bind(this)}
              clickHandler={this.handleCurrentPage}
              increaseHandler={this.handleIncreasePage}
              decreaseHandler={this.handleDecreasePage}
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