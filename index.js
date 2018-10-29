module.exports = (api, projectOptions) => {
    api.chainWebpack(webpackConfig => {
        const pluginOptions = projectOptions.pluginOptions ? projectOptions.pluginOptions.svgSprite || {} : {};

        const dir = api.resolve(pluginOptions.dir || 'src/assets/icons');

        webpackConfig.module
            .rule('svg-sprite')
            .test(pluginOptions.test || /\.(svg)(\?.*)?$/)
            .include
            .add(dir)
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options(pluginOptions.loaderOptions || {
                extract: true,
                spriteFilename: projectOptions.filenameHashing ? 'img/icons.[hash:8].svg' : 'img/icons.svg',
            });

        webpackConfig
            .plugin('svg-sprite')
            .use(require('svg-sprite-loader/plugin'), [pluginOptions.pluginOptions || { plainSprite: true }]);

        webpackConfig.module
            .rule('svg')
            .exclude
            .add(dir);
    });
};
