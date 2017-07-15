const swBuild = require('workbox-build');

swBuild.generateSW({
    navigateFallback: 'index.html',
    globDirectory: './dist',
    globIgnores: [''],
    globPatterns: [
        'index.html',
        '**\/*.{html,js,css}',
        'assets/img/**'
    ],
    swDest: './dist/sw.js',
    templatedUrls: {
        '?utm_source=pwa': ['index.html'],

    }
}).then(() => console.log('Service Worker generated!'));