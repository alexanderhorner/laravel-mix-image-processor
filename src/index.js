let mix = require('laravel-mix');

class ImageProcessor {

    options = {}

    /**
     * The optional name to be used when called by Mix.
     * Defaults to the class name, lowercased.
     *
     * Ex: mix.example();
     *
     * @return {String|Array}
     */
    name() {
        return ['imageProcessor', 'img', 'images']
    }

    /**
     * All npm dependencies that should be installed by Mix.
     *
     * @return {Array}
     */
    dependencies() {
        return ['webpack-image-processor-loader'];
    }

    /**
     * Register the component.
     *
     * When your component is called, all user parameters
     * will be passed to this method.
     *
     * Ex: register(src, output) {}
     * Ex: mix.yourPlugin('src/path', 'output/path');
     *
     * @param  {*} ...params
     * @return {void}
     *
     */
    register(options) {
        this.options = options
    }

    /**
     * Boot the component. This method is triggered after the
     * user's webpack.mix.js file has processed.
     */
    boot() {
        // Example:
        // if (Config.options.foo) {}
    }

    /**
     * Append to the underlying webpack entry object.
     *
     * @param  {Entry} entry
     * @return {void}
     */
    webpackEntry(entry) {
        // Example:
        // entry.add('foo', 'bar');
    }

    /**
     * Rules to be merged with the underlying webpack rules.
     *
     * @return {Array|Object}
     */
    webpackRules() {
        return {
            test: /\.(png|jpe?g|webp|tiff?)/i,
            loader: 'webpack-image-processor-loader',
            options: this.options
        }
    }

    /**
     * Override the underlying webpack configuration.
     *
     * @param  {Object} webpackConfig
     * @return {void}
     */
    webpackConfig(webpackConfig) {
        webpackConfig.module.rules[1].test = /(\\.(gif|avif)$|^((?!font).)*\\.svg$)/
    }

}

mix.extend('imageProcessor', new ImageProcessor());