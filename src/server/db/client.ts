import connect from "./connect";

interface DBClient {
    list: (dbName: string, limit: number) => Promise<any>;
}

const dbClient: DBClient = {
    list:  async (dbName: string, limit: number) => {
        const client = connect();
        const results =  await client.query(`SELECT * from ${dbName} LIMIT ${limit}`);
        client.end();
        return results.rows;
    }
}

export default dbClient;