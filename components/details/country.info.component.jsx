import { fetchCountry } from "../../services/countries.api.service"
import { ContainerColumn } from "./country.info.style"
import { useRouter } from "next/router"

class CountryDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            loading: false
        }
    }
    componentWillMount() {
        this.loadDetails();
    }

    async loadDetails() {
        this.setState({ loading: true })
        try {
            const details = await fetchCountry(`${this.props.cod}`)
            this.setState({ details })

        } catch {
            alert("Ups something went wrong")
        }

    }


    render() {
        const CountryDetail = () => {
            const Country = () => {
                const router = useRouter();
                const { cod } = router.query;
                return <p>code: {cod}</p>
            }
            return Country
        }
        CountryDetail()
        return (
            <ContainerColumn>
                Hello
                <p>code: {cod}</p>
            </ContainerColumn>
        )

    }


}

export default CountryDetails