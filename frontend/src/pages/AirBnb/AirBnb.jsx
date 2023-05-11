import './AirBnb.scss'
import AirBnbList from "../../layouts/AirBnbList/AirBnbList"
import useDataPage from '../../hooks/dataPage'
import { getPageAirBnb } from '../../api/airbnb'
import Header from '../../components/Header/Header'

function AirBnb() {
    const [
        list,
        page,
        reducer,
        adder
    ] = useDataPage(getPageAirBnb)

    return (
        <article id="airbnb">
            <Header
                id='airbnb'
                name='AirBnb'
                page={page}
                reducer={reducer}
                adder={adder}
            />
            <AirBnbList list={list} />
        </article>
    )
}
export default AirBnb