import './Customers.scss'
import { getPageCustomers } from "../../api/analytics"
import Customer from "../../components/Customer/Customer"
import Header from "../../components/Header/Header"
import useDataPage from "../../hooks/dataPage"

function Customers() {
    const [ list, page, reducer, adder ] = useDataPage(getPageCustomers)
    
    return (
        <section id="customers">
            <Header
                id='customers'
                name='Customers'
                page={page}
                adder={adder}
                reducer={reducer}
            />

            <article id='list'>
                {list.map(
                    item => {
                        const {
                            accounts,
                            active,
                            address,
                            birthdate,
                            email,
                            name,
                            tier_and_details,
                            username
                        } = item

                        const moreInfo = [
                            {
                                id: 'accounts',
                                name: 'Accounts',
                                data: accounts
                            },
                            {
                                id: 'active',
                                name: 'Active',
                                data: active
                            },
                            {
                                id: 'address',
                                name: 'Address',
                                data: address
                            },
                            {
                                id: 'birthdate',
                                name: 'BirthDate',
                                data: birthdate
                            },
                            {
                                id: 'tier-and-details',
                                name: 'Tier and Details',
                                data: tier_and_details
                            },
                            {
                                id: 'username',
                                name: 'Username',
                                data: username
                            }
                        ]

                        return <Customer
                            key={username}
                            email={email}
                            name={name}
                            moreInfo={moreInfo}
                        />
                    }
                )}
            </article>
        </section>
    )
}
export default Customers