const AnalyticsPaths = Object.freeze({
    "accounts": 'accounts',
    "customers": 'customers',
    "transactions": 'transactions'
})

export const AnalyticsNavPaths = [
    {
        name: "Accounts",
        to: AnalyticsPaths.accounts
    },
    {
        name: "Customers",
        to: AnalyticsPaths.customers
    },
    {
        name: "Transactions",
        to: AnalyticsPaths.transactions
    }
]

export default AnalyticsPaths