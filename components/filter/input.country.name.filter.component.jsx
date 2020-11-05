import React from "react"
import { ContainerColumn, Form_Lables, Form_Inputs } from "./filter.style";

class CountryNameFilter extends React.Component {
    render() {
        return (
            <ContainerColumn>
                <Form_Lables htmlFor="countryName">Countries</Form_Lables>
                <Form_Inputs
                    type="text"
                    name="countryName"
                    id="countryName"
                    placeholder="Enter Country Name"
                    value={this.props.value}
                    onChange={this.props.handler}
                />
            </ContainerColumn>
        )
    }
}

export default CountryNameFilter