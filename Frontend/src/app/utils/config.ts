class AppConfig {
    public accountsUrl = "http://localhost:4000/api/accounts/"
    public actionsByAccountNumber = "http://localhost:4000/api/accounts/actions-by-accountnumber/"
}
export const appConfig = new AppConfig();