#!/usr/bin/env node

/**
 * Social Media Static Page Generator
 * Generates static HTML files with proper Open Graph meta tags for social media crawlers
 */

const fs = require('fs');
const path = require('path');

// Page configurations with Open Graph data
const pages = {
  'documentation': {
    title: 'Documentation',
    description: 'Complete documentation for the Docsify Frontmatter OpenGraph Plugin - API reference, examples, and guides',
    image: 'https://gllmar.github.io/docsify-frontmatter-opengraph/documentation/cover.jpg',
    type: 'article',
    redirectPath: '/#/documentation/'
  },
  'getting-started': {
    title: 'Getting Started',
    description: 'Quick start guide for the Docsify Frontmatter OpenGraph Plugin - installation and basic configuration',
    image: 'https://gllmar.github.io/docsify-frontmatter-opengraph/documentation/getting-started/cover.jpg',
    type: 'article',
    redirectPath: '/#/documentation/getting-started/'
  },
  'api-reference': {
    title: 'API Reference',
    description: 'Complete API reference for the Docsify Frontmatter OpenGraph Plugin - configuration options and front-matter fields',
    image: 'https://gllmar.github.io/docsify-frontmatter-opengraph/documentation/api-reference/cover.jpg',
    type: 'article',
    redirectPath: '/#/documentation/api-reference/'
  },
  'examples': {
    title: 'Examples',
    description: 'Real-world examples and use cases for the Docsify Frontmatter OpenGraph Plugin',
    image: 'https://gllmar.github.io/docsify-frontmatter-opengraph/documentation/examples/cover.jpg',
    type: 'article',
    redirectPath: '/#/documentation/examples/'
  },
  'tests': {
    title: 'Testing Suite',
    description: 'Comprehensive testing suite for the Docsify Frontmatter OpenGraph Plugin - unit tests, integration tests, and test cases',
    image: 'https://gllmar.github.io/docsify-frontmatter-opengraph/tests/cover.jpg',
    type: 'article',
    redirectPath: '/#/tests/'
  }
};

const baseUrl = 'https://gllmar.github.io/docsify-frontmatter-opengraph';
const siteName = 'Docsify Frontmatter OpenGraph Plugin';

function generateStaticPage(pageKey, pageData) {
  const html = `<!DOCTYPE html>
<html lang="en" prefix="og: https://ogp.me/ns#">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary Meta Tags -->
    <title>${pageData.title} - ${siteName}</title>
    <meta name="title" content="${pageData.title} - ${siteName}">
    <meta name="description" content="${pageData.description}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${pageData.type}">
    <meta property="og:url" content="${baseUrl}/${pageKey}.html">
    <meta property="og:title" content="${pageData.title}">
    <meta property="og:description" content="${pageData.description}">
    <meta property="og:image" content="${pageData.image}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${pageData.title} cover image">
    <meta property="og:site_name" content="${siteName}">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${baseUrl}/${pageKey}.html">
    <meta name="twitter:title" content="${pageData.title}">
    <meta name="twitter:description" content="${pageData.description}">
    <meta name="twitter:image" content="${pageData.image}">
    <meta name="twitter:image:alt" content="${pageData.title} cover image">
    
    <!-- Additional Open Graph properties for articles -->
    ${pageData.type === 'article' ? `
    <meta property="article:author" content="Plugin Developer">
    <meta property="article:section" content="Documentation">
    <meta property="article:tag" content="docsify">
    <meta property="article:tag" content="plugin">
    <meta property="article:tag" content="opengraph">
    <meta property="article:tag" content="social-sharing">
    ` : ''}
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${baseUrl}${pageData.redirectPath}">
    
    <!-- Instant redirect for browsers (social crawlers will read meta tags first) -->
    <meta http-equiv="refresh" content="0; url=${pageData.redirectPath}">
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "${pageData.type === 'article' ? 'Article' : 'WebPage'}",
      "headline": "${pageData.title}",
      "description": "${pageData.description}",
      "image": "${pageData.image}",
      "url": "${baseUrl}${pageData.redirectPath}",
      "author": {
        "@type": "Person",
        "name": "Plugin Developer"
      },
      "publisher": {
        "@type": "Organization",
        "name": "${siteName}",
        "url": "${baseUrl}"
      }
    }
    </script>
    
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 40px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .container {
            max-width: 600px;
            background: rgba(255,255,255,0.1);
            padding: 40px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        h1 { margin: 0 0 20px 0; font-size: 2.5em; }
        p { font-size: 1.2em; margin: 20px 0; opacity: 0.9; }
        .redirect-link { 
            color: #fff; 
            text-decoration: none; 
            background: rgba(255,255,255,0.2);
            padding: 12px 24px;
            border-radius: 6px;
            display: inline-block;
            margin-top: 20px;
            transition: background 0.3s;
        }
        .redirect-link:hover { background: rgba(255,255,255,0.3); }
        .loading { opacity: 0.7; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>${pageData.title}</h1>
        <p>${pageData.description}</p>
        <div class="loading">Redirecting to documentation...</div>
        <a href="${pageData.redirectPath}" class="redirect-link">Go to ${pageData.title}</a>
    </div>
    
    <script>
        // Immediate redirect for browsers
        if (!navigator.userAgent.includes('facebookexternalhit') && 
            !navigator.userAgent.includes('twitterbot') &&
            !navigator.userAgent.includes('linkedinbot')) {
            window.location.href = '${pageData.redirectPath}';
        }
    </script>
</body>
</html>`;

  return html;
}

// Generate static pages
console.log('🚀 Generating static social media pages...');

Object.entries(pages).forEach(([pageKey, pageData]) => {
  const html = generateStaticPage(pageKey, pageData);
  const filename = `${pageKey}.html`;
  
  fs.writeFileSync(filename, html);
  console.log(`✅ Generated: ${filename}`);
});

console.log('\n🎉 Static pages generated successfully!');
console.log('\nThese URLs will work with social media crawlers:');
Object.keys(pages).forEach(pageKey => {
  console.log(`   ${baseUrl}/${pageKey}.html`);
});

console.log('\n📋 Next steps:');
console.log('1. Deploy these .html files to your GitHub Pages');
console.log('2. Share the .html URLs on social media');
console.log('3. Users will be automatically redirected to your Docsify pages');
