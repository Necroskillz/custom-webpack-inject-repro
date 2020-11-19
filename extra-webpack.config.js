const webpack = require('webpack');
const InjectPlugin = require('webpack-inject-plugin').default;

module.exports = (config, options, targetOptions) => {
    config.plugins.push(new InjectPlugin(() => 'hi'));

    return config;
};
