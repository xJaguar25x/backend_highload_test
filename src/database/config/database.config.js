const config = {
    development: {
        username: process.env.PG_USER || "postgres",
        password: process.env.PG_PASS || "root",
        database: process.env.PG_DB || "backend_highload_test",
        host: process.env.PG_HOST || "127.0.0.1",
        port: Number(process.env.PG_PORT) || 5432,
        dialect: "postgres",
        // logging: (msg) => console.log(msg),
        logging: false,
        /*pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 500
        }*/
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "postgres",
        // logging: console.log,
        logging: false,
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "postgres"
    }
};
export default config;
