const { Client } = require('pg')

const connect = () => {
    const c = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'moviefinder',
        password: process.env.PG_PWD || 'mysecretpassword',
        port: 5432,
    })
    c.connect();
    return c;
}
    

export default connect;