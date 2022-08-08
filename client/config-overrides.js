module.exports = {
    devServer: function (configFunction) {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            //config.port = 3333;
            config.proxy = {
                '/api': 'http://localhost:3333'
            };
            return config;
        }
    }
}