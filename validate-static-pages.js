#!/usr/bin/env node

/**
 * Validate Static Pages for Social Media
 * Checks that all generated static HTML files have proper Open Graph and Twitter Card meta tags
 */

const fs = require('fs');
const path = require('path');

const staticPages = [
  'documentation.html',
  'getting-started.html', 
  'api-reference.html',
  'examples.html',
  'tests.html'
];

const requiredOGTags = [
  'og:title',
  'og:description', 
  'og:type',
  'og:url',
  'og:image',
  'og:site_name'
];

const requiredTwitterTags = [
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:image'
];

console.log('🔍 Validating static pages for social media compatibility...\n');

let allValid = true;

staticPages.forEach(filename => {
  console.log(`📄 Checking ${filename}...`);
  
  if (!fs.existsSync(filename)) {
    console.log(`  ❌ File not found: ${filename}`);
    allValid = false;
    return;
  }
  
  const content = fs.readFileSync(filename, 'utf8');
  let pageValid = true;
  
  // Check Open Graph tags
  console.log('  🌐 Open Graph tags:');
  requiredOGTags.forEach(tag => {
    const regex = new RegExp(`<meta\\s+property="${tag}"\\s+content="[^"]*"`, 'i');
    if (regex.test(content)) {
      const match = content.match(new RegExp(`<meta\\s+property="${tag}"\\s+content="([^"]*)"`, 'i'));
      console.log(`    ✅ ${tag}: "${match[1]}"`);
    } else {
      console.log(`    ❌ Missing: ${tag}`);
      pageValid = false;
    }
  });
  
  // Check Twitter Card tags
  console.log('  🐦 Twitter Card tags:');
  requiredTwitterTags.forEach(tag => {
    const regex = new RegExp(`<meta\\s+name="${tag}"\\s+content="[^"]*"`, 'i');
    if (regex.test(content)) {
      const match = content.match(new RegExp(`<meta\\s+name="${tag}"\\s+content="([^"]*)"`, 'i'));
      console.log(`    ✅ ${tag}: "${match[1]}"`);
    } else {
      console.log(`    ❌ Missing: ${tag}`);
      pageValid = false;
    }
  });
  
  // Check for redirect meta tag
  const redirectRegex = /<meta\s+http-equiv="refresh"\s+content="0;\s*url=([^"]*)">/i;
  if (redirectRegex.test(content)) {
    const match = content.match(redirectRegex);
    console.log(`  🔀 Redirect to: ${match[1]}`);
  } else {
    console.log(`  ❌ Missing redirect meta tag`);
    pageValid = false;
  }
  
  if (pageValid) {
    console.log(`  ✅ ${filename} is valid for social media\n`);
  } else {
    console.log(`  ❌ ${filename} has issues\n`);
    allValid = false;
  }
});

if (allValid) {
  console.log('🎉 All static pages are valid for social media sharing!');
  console.log('\n📋 Next steps:');
  console.log('1. Deploy these .html files to GitHub Pages');
  console.log('2. Use the .html URLs for social media sharing');
  console.log('3. Test with social media validators:');
  console.log('   - Facebook: https://developers.facebook.com/tools/debug/');
  console.log('   - Twitter: https://cards-dev.twitter.com/validator');
  console.log('   - LinkedIn: https://www.linkedin.com/post-inspector/');
  process.exit(0);
} else {
  console.log('❌ Some static pages have validation issues. Please fix them before deploying.');
  process.exit(1);
}
