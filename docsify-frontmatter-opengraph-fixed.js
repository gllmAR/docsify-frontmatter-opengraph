// Docsify Frontmatter Open Graph Plugin
// Reads YAML front-matter and injects Open Graph/Twitter meta tags
(function () {
    'use strict';
    
    // Helper: Enhanced YAML front-matter parser with error handling
    function parseFrontMatter(content) {
        try {
            if (!content || typeof content !== 'string') {
                return {};
            }
            
            var match = content.match(/^---([\s\S]*?)---/);
            if (!match) return {};
            
            var yaml = match[1];
            var obj = {};
            
            yaml.split(/\r?\n/).forEach(function (line) {
                line = line.trim();
                if (!line || line.charAt(0) === '#') return; // Skip empty lines and comments
                
                var colonIndex = line.indexOf(':');
                if (colonIndex === -1) return; // Skip malformed lines
                
                var key = line.substring(0, colonIndex).trim();
                var value = line.substring(colonIndex + 1).trim();
                
                // Remove quotes if present - ES5 compatible
                if ((value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') || 
                    (value.charAt(0) === "'" && value.charAt(value.length - 1) === "'")) {
                    value = value.slice(1, -1);
                }
                
                if (key && value) {
                    obj[key] = value;
                }
            });
            
            return obj;
        } catch (error) {
            console.warn('Error parsing front-matter:', error);
            return {};
        }
    }

    // Helper: Remove existing OG/Twitter meta tags with error handling
    function removeMetaTags() {
        try {
            var selectors = [
                'meta[property^="og:"]',
                'meta[name^="twitter:"]'
            ];
            selectors.forEach(function (sel) {
                var elements = document.querySelectorAll(sel);
                for (var i = 0; i < elements.length; i++) {
                    var el = elements[i];
                    if (el && el.parentNode) {
                        el.parentNode.removeChild(el);
                    }
                }
            });
        } catch (error) {
            console.warn('Error removing meta tags:', error);
        }
    }

    // Helper: Insert meta tag with error handling
    function insertMetaTag(attr, name, content) {
        try {
            if (!content || !name || !attr) return;
            
            var meta = document.createElement('meta');
            meta.setAttribute(attr, name);
            meta.setAttribute('content', content);
            
            if (document.head) {
                document.head.appendChild(meta);
            } else {
                console.warn('Document head not found');
            }
        } catch (error) {
            console.warn('Error inserting meta tag:', error);
        }
    }

    // Helper: Get absolute image URL with enhanced compatibility
    function getImageUrl(img, basePath) {
        try {
            if (!img) return null;
            
            // Check for absolute URL (http/https)
            if (/^https?:\/\//.test(img)) return img;
            
            // Check for root-relative path
            if (img.charAt(0) === '/') {
                return location.origin + img;
            }
            
            // Handle relative path - compatible with older browsers
            var cleanBasePath = basePath.replace(/\/[^/]*$/, '/');
            return location.origin + cleanBasePath + img;
        } catch (error) {
            console.warn('Error processing image URL:', error);
            return null;
        }
    }

    // Helper: Try to find a cover image with error handling
    function getCoverImage(basePath) {
        try {
            var covers = ['cover.jpg', 'cover.png', 'cover.gif'];
            var cleanBasePath = basePath.replace(/\/[^/]*$/, '/');
            
            for (var i = 0; i < covers.length; i++) {
                var url = cleanBasePath + covers[i];
                // Return the first potential cover image URL
                // Note: Cannot check existence synchronously in browser
                return location.origin + url;
            }
            
            // Fallback: site-wide default
            return null;
        } catch (error) {
            console.warn('Error getting cover image:', error);
            return null;
        }
    }

    // Helper: Substitute variables in content with front-matter values
    function substituteVariables(content, frontMatter) {
        try {
            if (!content || typeof content !== 'string' || !frontMatter) {
                return content;
            }

            // Standard variable substitution syntax: {{variable}}
            return content.replace(/\{\{([^}]+)\}\}/g, function(match, variable) {
                var key = variable.trim();
                if (frontMatter.hasOwnProperty(key)) {
                    return frontMatter[key];
                }
                // Return original if variable not found
                return match;
            });
        } catch (error) {
            console.warn('Error substituting variables:', error);
            return content;
        }
    }

    // Main plugin with enhanced error handling
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [].concat(function (hook, vm) {
        
        // Store front-matter for later use
        var currentFrontMatter = {};
        
        // Remove front-matter from markdown before rendering
        hook.beforeEach(function (markdown) {
            try {
                // Parse and store front-matter
                currentFrontMatter = parseFrontMatter(markdown);
                
                // Remove front-matter from markdown to prevent it from being rendered
                var cleanMarkdown = markdown.replace(/^---[\s\S]*?---\s*/, '');
                return cleanMarkdown;
            } catch (error) {
                console.warn('Error processing front-matter in beforeEach:', error);
                return markdown;
            }
        });
        
        // Process HTML and inject meta tags
        hook.afterEach(function (html, next) {
            try {
                // Apply variable substitution to the HTML content using stored front-matter
                html = substituteVariables(html, currentFrontMatter);
                
                var title = currentFrontMatter.title || document.title || 'Untitled';
                var description = currentFrontMatter.description || 
                    (document.querySelector('meta[name="description"]') ? 
                     document.querySelector('meta[name="description"]').getAttribute('content') : '') || '';
                var type = currentFrontMatter.type || 'article';
                var basePath = (vm && vm.route && vm.route.path) ? vm.route.path : '/';
                var image = getImageUrl(currentFrontMatter.image, basePath) || getCoverImage(basePath);

                // Remove old meta tags
                removeMetaTags();

                // Insert Open Graph meta tags
                insertMetaTag('property', 'og:title', title);
                insertMetaTag('property', 'og:description', description);
                insertMetaTag('property', 'og:type', type);
                insertMetaTag('property', 'og:url', location.href);
                if (image) insertMetaTag('property', 'og:image', image);

                // Insert Twitter Card meta tags
                insertMetaTag('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
                insertMetaTag('name', 'twitter:title', title);
                insertMetaTag('name', 'twitter:description', description);
                if (image) insertMetaTag('name', 'twitter:image', image);

            } catch (error) {
                console.error('Error in frontmatter-opengraph plugin:', error);
            } finally {
                next(html);
            }
        });
    }, window.$docsify.plugins);
})();
