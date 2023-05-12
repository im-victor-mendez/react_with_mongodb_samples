import { Route, Routes } from "react-router-dom"
import NavBar from "../../layouts/NavBar/NavBar"
import AnalyticsPaths, { AnalyticsNavPaths } from "../../constants/AnalyticsPaths"
import Customers from "../../layouts/Customers/Customers"

function Analytics() {
    const { accounts, customers, transactions } = AnalyticsPaths
    
    return (
        <article id="analytics">
            <NavBar links={AnalyticsNavPaths} />
            <Routes>
                {/* <Route path={accounts} element={<Accounts />} /> */}
                <Route path={customers} element={<Customers />} />
                {/* <Route path={transactions} element={<Transactions />} /> */}
            </Routes>
        </article>
    )
}
export default Analytics