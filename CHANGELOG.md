# Changelog

All notable changes to this project will be documented in this file.

## [1.0.3] - 2025-06-07

### Fixed
- **🐦 TWITTER CARD FIX**: Corrected Twitter Card meta tags to use `name` attribute instead of `property`
  - Fixed static page generator to use proper `name="twitter:*"` attributes
  - Ensures compatibility with Twitter Card validator requirements
  - All static social media pages now have correctly formatted Twitter meta tags

### Added
- **✅ Static Page Validation**: New `validate-static-pages.js` script for quality assurance
  - Validates all generated static pages have proper Open Graph and Twitter Card meta tags
  - Checks for required redirect meta tags
  - Available as `npm run validate` command
  - Comprehensive validation output with specific tag content verification

### Improved
- **📦 Build Pipeline**: Enhanced package.json scripts for better development workflow
  - Added `validate` script for meta tag validation
  - Improved build process reliability with validation step

## [1.0.2] - 2025-06-07

### Fixed
- **🔧 SOCIAL MEDIA CRAWLER FIX**: Added static meta tags to index.html for social media crawlers
  - Added static Open Graph and Twitter Card meta tags in index.html
  - Updated plugin to update existing static tags instead of duplicating them
  - Plugin now marks tags with `data-docsify-frontmatter` attribute for tracking
  - Social media crawlers can now properly read meta tags without JavaScript execution

### Added
- **🤖 Social Media Crawler Support**: Static meta tags in index.html that work without JavaScript
- **🔍 Advanced Meta Tag Checker**: `check-social-tags.html` tool for comprehensive testing
  - Checks both static and dynamic meta tags
  - Simulates social media crawler behavior
  - Shows the difference between what browsers see vs. what crawlers see

### Improved
- Plugin now intelligently updates existing meta tags instead of removing/recreating them
- Better preservation of static meta tags from index.html
- Enhanced tracking of plugin-managed vs. static meta tags

## [1.0.1] - 2025-06-07

### Fixed
- **🔧 CRITICAL FIX**: Resolved DOM timing issue preventing meta tags from being inserted
  - Changed from `afterEach` to `doneEach` hook to ensure DOM is ready
  - Fixed image URL construction for relative paths (removed duplicate `./`)
  - Added proper error handling with return values in `insertMetaTag`
  - Meta tags now successfully appear in document head for social media crawlers

### Added
- **🧪 Testing Tools**: Created comprehensive verification and social media preview testing tools
  - `verify-meta-tags.html` - Checks if meta tags are present in the DOM
  - `social-media-test.html` - Simulates social media crawler behavior
  - Links to external validators (Facebook, Twitter, LinkedIn, Open Graph Checker)

### Improved
- Enhanced debug logging for troubleshooting
- Better error handling across all helper functions
- Clearer console output for development

## [1.0.0] - 2025-06-07

### Added
- **Initial release** of Docsify Frontmatter OpenGraph Plugin
- **Automatic meta tag generation** from YAML front-matter
- **Smart image resolution** with fallback to cover images
- **Variable substitution** using `{{variable}}` syntax
- **Three-tier configuration system** (page → site → default)
- **ES5 browser compatibility** (IE9+)
- **Comprehensive error handling** with graceful degradation
- **Zero external dependencies**

### Features
- 📄 Open Graph meta tag generation (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`)
- 🐦 Twitter Card meta tag generation (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- 🖼️ Automatic relative-to-absolute URL conversion for images
- 🔄 Dynamic meta tag updates on route changes
- 🛡️ Malformed YAML handling without breaking pages
- 📋 Configurable defaults through `frontmatterOpenGraph` config

### Browser Support
- ✅ Internet Explorer 9+
- ✅ Chrome (all versions)
- ✅ Firefox (all versions)  
- ✅ Safari (all versions)
- ✅ Edge (all versions)
- ✅ Mobile browsers

### Testing
- 🧪 **15+ unit tests** covering all core functions
- 🔧 **4+ integration tests** for end-to-end behavior
- 📝 **6 test case files** with different front-matter scenarios
- 🤖 **Automated test runner** for continuous validation

---

## Development History

This plugin was developed through extensive testing and refinement:

1. **Initial Implementation** - Basic front-matter parsing and meta tag injection
2. **Browser Compatibility** - ES5 conversion for legacy browser support
3. **Enhanced YAML Parser** - Robust parsing with error handling
4. **Variable Substitution** - Template variable replacement feature
5. **Three-Tier Configuration** - Priority-based configuration system
6. **Comprehensive Testing** - Full test suite development
7. **Production Polish** - Documentation and repository cleanup

The plugin is now production-ready with zero external dependencies and comprehensive error handling.
