const SitemapGenerator = require('sitemap-generator');

// creamos el generator
const generator = SitemapGenerator('https://hardsof.com', {
    maxDepth: 5,
    filepath: './sitemap.xml',
    maxEntriesPerFile: 50000,
    stripQuerystring: true,
    lastMod: true,
    priorityMap: [1.0,0.9],
    changeFreq: 'weekly'
});

// registramos el event listeners
generator.on('done', () => {
    // sitemaps se ha creado
    console.log('sitemap creado');
    
});

// empieza a generar sitemap-ejecutar: node sitemap.js
generator.start();