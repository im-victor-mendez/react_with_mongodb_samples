import { Route, Routes } from "react-router-dom"
import NavBar from "../../layouts/NavBar/NavBar"
import AnalyticsPaths, { AnalyticsNavPaths } from "../../constants/AnalyticsPaths"
import Customers from "../../layouts/Customers/Customers"
import Accounts from "../../layouts/Accounts/Accounts"

function Analytics() {
    const { accounts, customers } = AnalyticsPaths
    
    return (
        <article id="analytics">
            <NavBar links={AnalyticsNavPaths} />
            <Routes>
                <Route path={accounts} element={<Accounts />} />
                <Route exact path={customers} element={<Customers />} />
                {/* <Route path={transactions} element={<Transactions />} /> */}
            </Routes>
        </article>
    )
}
export default Analytics