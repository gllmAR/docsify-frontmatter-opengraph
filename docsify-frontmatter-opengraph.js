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
            if (content === null || content === undefined || !name || !attr) return false;
            
            var meta = document.createElement('meta');
            meta.setAttribute(attr, name);
            meta.setAttribute('content', String(content));
            
            if (document.head) {
                document.head.appendChild(meta);
                return true;
            } else {
                console.warn('Document head not found');
                return false;
            }
        } catch (error) {
            console.warn('Error inserting meta tag:', error);
            return false;
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
            
            // Handle relative path starting with ./ - remove the ./
            if (img.indexOf('./') === 0) {
                img = img.substring(2);
            }
            
            // Handle relative path - compatible with older browsers
            var cleanBasePath = basePath.replace(/\/[^/]*$/, '/');
            if (cleanBasePath === '/') {
                return location.origin + '/' + img;
            }
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

    // Helper: Load site-wide defaults from root README.md
    function loadSiteDefaults(callback) {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', './README.md', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var siteDefaults = parseFrontMatter(xhr.responseText);
                        callback(siteDefaults);
                    } else {
                        console.warn('Could not load root README.md for site defaults');
                        callback({});
                    }
                }
            };
            xhr.send();
        } catch (error) {
            console.warn('Error loading site defaults:', error);
            callback({});
        }
    }

    // Main plugin with enhanced error handling
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = [].concat(function (hook, vm) {
        
        // Store front-matter for later use
        var currentFrontMatter = {};
        var siteDefaults = {};
        
        // Load site-wide defaults from root README.md on initialization
        hook.init(function() {
            loadSiteDefaults(function(defaults) {
                siteDefaults = defaults;
                console.log('Loaded site defaults from README.md:', siteDefaults);
            });
        });
        
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
        hook.doneEach(function () {
            try {
                // Get current path for debugging
                var path = window.location.pathname + window.location.hash;
                console.log('doneEach hook triggered for path:', path);
                
                // Get default configuration from docsify config
                var config = (window.$docsify && window.$docsify.frontmatterOpenGraph) || {};
                
                // Apply variable substitution to the HTML content using stored front-matter
                // Note: This is now handled in the separate afterEach hook
                
                // Three-tier priority system:
                // 1. Page front-matter (highest priority)
                // 2. Root README.md front-matter (site-wide defaults)
                // 3. index.html configuration (fallback defaults)
                
                var title = currentFrontMatter.title || 
                           siteDefaults.title ||
                           config.defaultTitle || 
                           document.title || 
                           'Untitled';
                           
                var description = currentFrontMatter.description || 
                                siteDefaults.description ||
                                config.defaultDescription ||
                                (document.querySelector('meta[name="description"]') ? 
                                 document.querySelector('meta[name="description"]').getAttribute('content') : '') || 
                                '';
                                
                var type = currentFrontMatter.type || 
                          siteDefaults.type ||
                          config.defaultType || 
                          'article';
                          
                var author = currentFrontMatter.author || 
                           siteDefaults.author ||
                           config.defaultAuthor || 
                           '';
                           
                var basePath = (vm && vm.route && vm.route.path) ? vm.route.path : '/';
                
                // Image resolution with three-tier priority
                var image = null;
                
                // Try front-matter image first
                if (currentFrontMatter.image) {
                    image = getImageUrl(currentFrontMatter.image, basePath);
                }
                
                // Try site defaults image
                if (!image && siteDefaults.image) {
                    image = getImageUrl(siteDefaults.image, '/');
                }
                
                // Try config default image  
                if (!image && config.defaultImage) {
                    image = getImageUrl(config.defaultImage, '/');
                }
                
                // Try cover image fallback
                if (!image) {
                    image = getCoverImage(basePath);
                }
                
                console.log('Final resolved image:', image);

                // Remove old meta tags
                removeMetaTags();

                // Debug logging
                console.log('Frontmatter OpenGraph Plugin - Generating meta tags:');
                console.log('Title:', title);
                console.log('Description:', description);
                console.log('Image:', image);
                console.log('Type:', type);

                // Insert Open Graph meta tags
                insertMetaTag('property', 'og:title', title);
                insertMetaTag('property', 'og:description', description);
                insertMetaTag('property', 'og:type', type);
                insertMetaTag('property', 'og:url', location.href);
                if (image) insertMetaTag('property', 'og:image', image);
                
                // Optional: Site name
                if (config.siteName) {
                    insertMetaTag('property', 'og:site_name', config.siteName);
                }
                
                // Optional: Locale
                if (config.locale) {
                    insertMetaTag('property', 'og:locale', config.locale);
                }
                
                // Optional: Author
                if (author) {
                    insertMetaTag('property', 'article:author', author);
                }
                
                // Optional: Facebook App ID
                if (config.facebookAppId) {
                    insertMetaTag('property', 'fb:app_id', config.facebookAppId);
                }

                // Insert Twitter Card meta tags
                insertMetaTag('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
                insertMetaTag('name', 'twitter:title', title);
                insertMetaTag('name', 'twitter:description', description);
                if (image) insertMetaTag('name', 'twitter:image', image);
                
                // Optional: Twitter handle
                if (config.twitterHandle) {
                    insertMetaTag('name', 'twitter:site', config.twitterHandle);
                }
                if (image) insertMetaTag('name', 'twitter:image', image);

            } catch (error) {
                console.error('Error in frontmatter-opengraph plugin:', error);
            }
        });
        
        // Separate hook for variable substitution in HTML content
        hook.afterEach(function (html, next) {
            try {
                // Apply variable substitution to the HTML content using stored front-matter
                html = substituteVariables(html, currentFrontMatter);
                next(html);
            } catch (error) {
                console.error('Error in variable substitution:', error);
                next(html);
            }
        });
    }, window.$docsify.plugins);
})();
