import { getPageCustomers } from "../../api/analytics"
import Header from "../../components/Header/Header"
import useDataPage from "../../hooks/dataPage"

function Customers() {
    const [
        list,
        page,
        reducer,
        adder
    ] = useDataPage(getPageCustomers)
    
    return (
        <section id="customers">
            <Header
                id='customers'
                name='Customers'
                page={page}
                adder={adder}
                reducer={reducer}
            />

            <div>
                {list.map(
                    item => {
                    }
                )}
            </div>
        </section>
    )
}
export default Customers