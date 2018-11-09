const chainWebpack = config => {
  config.module
    .rule('svg-sprite')
    .use('svgo-loader')
    .loader('svgo-loader')
};

module.exports = (api, options, rootOptions) => {
    api.render('./template');

    if (options.addSvgoLoader) {
        const fs = require('fs');

        api.extendPackage({
            devDependencies: {
                'svgo': '^1.1.0',
                'svgo-loader': '^2.1.0',
            },
        });

        let hasChainWebpackOption = false;
        const vueConfig = api.resolve('vue.config.js');
        if (fs.existsSync(vueConfig)) {
            let projectOptions = require(vueConfig);
            if (projectOptions.chainWebpack) {
                hasChainWebpackOption = true;
            }
        }

        if (hasChainWebpackOption) {
            const {chalk} = require('@vue/cli-shared-utils');

            const message = `Please add the following config to your ${chalk.cyan('chainWebpack')} method:` +
                '\n\n' +
                chalk.green(`config.module.rule('svg-sprite').use('svgo-loader').loader('svgo-loader');`);

            api.exitLog(message, 'info');
        } else {
            api.extendPackage({
                vue: {
                    chainWebpack,
                },
            });
        }
    }
};
