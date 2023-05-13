import './Accounts.scss'
import { getPageAccounts } from "../../api/analytics"
import Account from "../../components/Account/Account"
import Header from "../../components/Header/Header"
import useDataPage from "../../hooks/dataPage"

function Accounts() {
    const [ list, page, reducer, adder ] = useDataPage(getPageAccounts)

    return (
        <section id="accounts">
            <Header
                id='accounts'
                name='Accounts'
                page={page}
                adder={adder}
                reducer={reducer}
            />

            <article id="list">
                {list.map(item => {
                    const { account_id, limit, products } = item

                    return <Account key={account_id} account_id={account_id} limit={limit} products={products} />
                })}
            </article>
        </section>
    )
}
export default Accounts