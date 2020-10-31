const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'TMI PHP Docs',

    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#fe346e'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * The base URL the site will be deployed at.
     *
     * ref：https://vuepress.vuejs.org/config/#base
     */
    base: "/",

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: 'ghostzero/tmi-website',
        editLinks: true,
        docsDir: 'docs',
        docsBranch: 'main',
        editLinkText: 'Help us improve this page!',
        lastUpdated: true,
        nav: [
            {
                text: 'Documentation',
                link: '/docs/'
            },
            {
                text: 'Ecosystem',
                ariaLabel: 'Ecosystem Menu',
                items: [
                    { text: 'TMI Cluster', link: '/docs/tmi-cluster' },
                ]
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/qsxVMNg'
            }
        ],
        sidebar: {
            '/docs/': [
                {
                    title: 'Documentation',
                    collapsable: false,
                    children: [
                        '',
                        'events',
                    ]
                },
                {
                    title: 'Official Packages',
                    sidebarDepth: 2,
                    collapsable: false,
                    children: [
                        'tmi-cluster',
                    ]
                }
            ],
        },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
