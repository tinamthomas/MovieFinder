const healthCheckHandler = async(req, resp) => {
    return {code: "Alive and well!"};
}

export default healthCheckHandler;