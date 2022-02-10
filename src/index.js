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
    static name() {
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
        let rules = webpackConfig.module.rules
        let rule = rules.find(rule => rule.test == '/(\\.(png|jpe?g|gif|webp|avif)$|^((?!font).)*\\.svg$)/');
        rule.test = /(\\.(gif|avif)$|^((?!font).)*\\.svg$)/
    }

}

mix.extend(ImageProcessor.name(), new ImageProcessor());