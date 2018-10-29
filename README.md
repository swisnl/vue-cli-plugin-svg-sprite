# vue-cli-plugin-svg-sprite

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-cli-plugin-svg-sprite.svg)](https://www.npmjs.com/package/vue-cli-plugin-svg-sprite)
[![Code Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Software License](https://img.shields.io/github/license/swisnl/vue-cli-plugin-svg-sprite.svg)](LICENSE.md)
[![Made by SWIS](https://img.shields.io/badge/%F0%9F%9A%80-made%20by%20SWIS-%23D9021B.svg)](https://www.swis.nl)

vue-cli 3 plugin to build a SVG sprite

## Install

```bash
vue add svg-sprite
```

## Usage

TODO

### Options

Most options for this plugin are passed directly to svg-sprite-loader and its plugin.
Please refer to [their documentation](https://github.com/kisenka/svg-sprite-loader#configuration) for further details.
The configuration must be defined in your `vue.config.js` file as below (defaults shown).

```javascript
module.exports = {
    pluginOptions: {
        svgSprite: {
            /*
             * The directory containing your SVG files.
             */
            dir: 'src/assets/icons',
            /*
             * The reqex that will be used for the Webpack rule.
             */
            test: /\.(svg)(\?.*)?$/,
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            loaderOptions: {
                extract: true,
                spriteFilename: 'img/icons.[hash:8].svg'
            },
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            pluginOptions: {
                plainSprite: true
            }    
        }    
    }    
};
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information about what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.

### Security

If you discover any security related issues, please email security@swis.nl instead of using the issue tracker.

## Credits

- [Jasper Zonneveld](https://github.com/JaZo)
- [All Contributors](../../contributors)

This package is a vue-cli 3 plugin wrapping [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader). Many thanks to [Stas Kurilov](https://github.com/kisenka) for his excellent package!

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## SWIS

[SWIS](https://www.swis.nl) is a web agency from Leiden, the Netherlands. We love working with open source software.
