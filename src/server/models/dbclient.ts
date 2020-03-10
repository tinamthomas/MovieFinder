const { Client } = require('pg')

const getDBClient = async () => {
    const client = new Client()
    await client.connect();
    return {
        run: (query) => client.query(query),
        close: () => client.end(),
    }
};
