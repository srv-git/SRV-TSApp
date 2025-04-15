/**
 * @class AssetLoader
 * @classdesc A class to load related assets (CSS and JavaScript) required for the application.
 *
 * This class allows you to specify an array of stylesheets and scripts that will be dynamically
 * loaded into the document when the `loadAssets` method is called.
 */
var AssetLoader = /** @class */ (function () {
    /**
     * Creates an instance of AssetLoader.
     *
     * @param {string[]} styles - An array of css files path to be loaded.
     * @param {string[]} scripts - An array of JS files path to be loaded.
     */
    function AssetLoader(styles, scripts) {
        this.styles = styles;
        this.scripts = scripts;
    }
    /**
     * Loads the specified styles and scripts into the document.
     *
     * This method creates <link> elements for stylesheets and <script> elements for JavaScript files,
     * appending them to the document's head and body respectively.
     *
     * @returns {void}
     */
    AssetLoader.prototype.loadAssets = function () {
        this.styles.forEach(function (style) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = style;
            document.head.appendChild(link);
        });
        this.functionToSetHeader(); // To include header
        this.functionToSetFooter(); // To include Footer
        this.scripts.forEach(function (script) {
            var scriptTag = document.createElement('script');
            scriptTag.src = script;
            document.body.appendChild(scriptTag);
        });
    };
    /**
     * Fetches the navigation HTML from 'include/nav.html' and prepends it to the body of the document.
     *
     * This function performs an asynchronous fetch request to retrieve the navigation HTML content,
     * parses it, and inserts the <nav> element into the document body. If the fetch fails or the
     * response is not OK, an error is logged to the console.
     *
     * @returns {void} This function does not return a value.
     *
     * @throws {Error} Throws an error if the fetch request fails or if the response is not OK.
     */
    AssetLoader.prototype.functionToSetHeader = function () {
        fetch('include/nav.html')
            .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            return response.text();
        })
            .then(function (htmlString) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(htmlString, 'text/html');
            // Now you can use DOM methods on `doc`
            var nav = doc.querySelector('nav');
            document.body.prepend(nav);
        })
            .catch(function (error) {
            console.error('Error loading nav.html:', error);
        });
    };
    /**
     * Fetches the footer HTML from 'include/footer.html' and prepends it to the body of the document.
     *
     * This function performs an asynchronous fetch request to retrieve the footer HTML content,
     * parses it, and inserts the <footer> element into the document body. If the fetch fails or the
     * response is not OK, an error is logged to the console.
     *
     * @returns {void} This function does not return a value.
     *
     * @throws {Error} Throws an error if the fetch request fails or if the response is not OK.
    */
    AssetLoader.prototype.functionToSetFooter = function () {
        fetch('include/footer.html')
            .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            return response.text();
        })
            .then(function (htmlString) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(htmlString, 'text/html');
            // Now you can use DOM methods on `doc`
            var footer = doc.querySelector('footer');
            document.body.append(footer);
        })
            .catch(function (error) {
            console.error('Error loading footer.html:', error);
        });
    };
    return AssetLoader;
}());
// CSS files path to be loaded
var styleFiles = [
    'style/css/bootstrap.min.css',
    'style/css/style.css'
];
// JS files path to be loaded
var scriptFiles = [
    'script/js/bootstrap.min.js',
    'script/js/script.js'
];
// Create an instance of AssetLoader with the specified styles and scripts
var assetLoader = new AssetLoader(styleFiles, scriptFiles);
// Load assets when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () { return assetLoader.loadAssets(); });
//# sourceMappingURL=loadAssets.js.map