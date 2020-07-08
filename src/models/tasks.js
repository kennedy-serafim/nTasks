module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback(
                [
                    { tittle: 'Some' }
                ]
            );
        }
    }
}