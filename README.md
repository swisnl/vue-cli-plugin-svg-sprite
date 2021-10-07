# vue-cli-plugin-svg-sprite

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-cli-plugin-svg-sprite.svg)](https://www.npmjs.com/package/vue-cli-plugin-svg-sprite)
[![Code Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Software License](https://img.shields.io/github/license/swisnl/vue-cli-plugin-svg-sprite.svg)](LICENSE.md)
[![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen.svg)](https://plant.treeware.earth/swisnl/vue-cli-plugin-svg-sprite)
[![Known Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/vue-cli-plugin-svg-sprite.svg)](https://snyk.io/test/github/swisnl/vue-cli-plugin-svg-sprite?targetFile=package.json)
[![Made by SWIS](https://img.shields.io/badge/%F0%9F%9A%80-made%20by%20SWIS-%23D9021B.svg)](https://www.swis.nl)

vue-cli 3 plugin to build an SVG sprite using [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader).

## Install

```bash
vue add svg-sprite
```

## Usage

Use the [SvgIcon component](template/src/components/SvgIcon.vue) provided by the generator or check the [loader documentation](https://github.com/kisenka/svg-sprite-loader#runtime-configuration) for other/advanced usages.

N.B. This plugin only adds a loader to the Webpack configuration, it doesn't glob your directory and include every file it finds. You need to require the icons from within your code (JS, CSS, etc.) just like other modules to have them added to the sprite!

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
             * The regex that will be used for the Webpack rule.
             */
            test: /\.(svg)(\?.*)?$/,
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            loaderOptions: {
                extract: true,
                spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
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

### Extra loaders

It is possible to add extra Webpack loaders to this plugin.
This can be useful if you want your icons to be optimized before the sprite is created.
The following example can be created using the generator and uses [svgo](https://github.com/svg/svgo) and [svgo-loader](https://github.com/rpominov/svgo-loader) to accomplish this.

Install extra dependencies:
```bash
npm install svgo svgo-loader --save-dev
```

Add the loader to your Webpack config in your `vue.config.js` file:
```javascript
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('svg-sprite')
            .use('svgo-loader')
            .loader('svgo-loader');
    }
};
```

### Injected webpack-chain Rules

- `config.module.rule('svg-sprite')`
- `config.module.rule('svg-sprite').use('svg-sprite-loader')`
- `config.plugin('svg-sprite')`

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

This package is [Treeware](https://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/swisnl/vue-cli-plugin-svg-sprite) to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.

## SWIS :heart: Open Source

[SWIS](https://www.swis.nl) is a web agency from Leiden, the Netherlands. We love working with open source software.
