# Changelog

All notable changes to this project will be documented in this file.

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
