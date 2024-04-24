class AppConfig {

    // Server Port:
    public port = 4000;

    // MongoDB Connection String:
    public mongoDBConnectionString = "mongodb://127.0.0.1:27017/bank";

}
const appConfig = new AppConfig();
export default appConfig;