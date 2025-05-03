var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @class AssetLoader
 * @classdesc A class to load related assets (CSS and JavaScript) required for the application.
 */
var AssetLoader = /** @class */ (function () {
    function AssetLoader(styles, scripts, baseUrl) {
        this.styles = styles;
        this.scripts = scripts;
        this.baseUrl = baseUrl;
    }
    /**
     * Loads stylesheets, header, footer, and scripts asynchronously.
     * @returns {Promise<void>}
     * @throws {Error}
     */
    AssetLoader.prototype.loadAssets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        // Load stylesheets
                        this.styles.forEach(function (style) {
                            var link = document.createElement('link');
                            link.rel = 'stylesheet';
                            link.href = style;
                            document.head.appendChild(link);
                        });
                        // Load Header and Footer
                        return [4 /*yield*/, this.loadHtmlContent(this.baseUrl + 'include/shared-head.html', 'head', true)];
                    case 1:
                        // Load Header and Footer
                        _a.sent();
                        return [4 /*yield*/, this.loadHtmlContent(this.baseUrl + 'include/nav.html', 'nav', true)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadHtmlContent(this.baseUrl + 'include/footer.html', 'footer', false)];
                    case 3:
                        _a.sent();
                        // To load Scripts
                        this.scripts.forEach(function (script) {
                            var scriptTag = document.createElement('script');
                            scriptTag.src = script;
                            document.body.appendChild(scriptTag);
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error('There was a problem with the fetch operation:', error_1);
                        return [3 /*break*/, 5];
                    case 5:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetches HTML content from the URL, parses it, and inserts into the document.
     * @param {string} url
     * @param {string} elementTag
     * @param {boolean} prepend
     * @returns {Promise<void>}
     */
    AssetLoader.prototype.loadHtmlContent = function (url, elementTag, prepend) {
        return __awaiter(this, void 0, void 0, function () {
            var parser, data, htmlContent, _a, _b, htmlTag;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        parser = new DOMParser();
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        data = _c.sent();
                        _b = (_a = parser).parseFromString;
                        return [4 /*yield*/, data.text()];
                    case 2:
                        htmlContent = _b.apply(_a, [_c.sent(), 'text/html']);
                        if (elementTag === 'head') {
                            Array.from(htmlContent.head.childNodes).reverse().forEach(function (node) {
                                ['LINK', 'BASE', 'META', '#comment'].includes(node.nodeName) && document.head.prepend(node);
                            });
                        }
                        else {
                            htmlTag = htmlContent.querySelector(elementTag);
                            prepend ? document.body.prepend(htmlTag) : document.body.append(htmlTag);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return AssetLoader;
}());
/**
 * @class EnvironmentChecker
 * @classdesc A class to check the environment (live or local) of the application.
 */
var EnvironmentChecker = /** @class */ (function () {
    function EnvironmentChecker() {
        this.hostname = window.location.hostname;
    }
    // To check the environment and log the result in the console. Returns true if running in a live environment, false otherwise.
    EnvironmentChecker.prototype.checkEnvironment = function () {
        if (this.isLive()) {
            console.log("Running in a live environment.");
            return true;
        }
        else if (this.isLocal()) {
            console.log("Running in a local environment.");
            return false;
        }
        else {
            console.log("Running in an unknown environment.");
            return true;
        }
    };
    // To check the local environment
    EnvironmentChecker.prototype.isLocal = function () {
        return this.hostname === "localhost" || this.hostname === "127.0.0.1" || this.hostname === "::1";
    };
    // To check the live environment
    EnvironmentChecker.prototype.isLive = function () {
        var liveDomains = ["https://srv-git.github.io/"]; // Add your live domains here
        return liveDomains.includes(this.hostname);
    };
    return EnvironmentChecker;
}());
// To get the live status    
var envChecker = new EnvironmentChecker();
var live = envChecker.checkEnvironment();
var baseUrl = true ? 'https://srv-git.github.io/SRV-TSApp/' : 'http://127.0.0.1:5500/'; // change to baseUrlLocal for local development
console.log('live', live, baseUrl); // TODO remove it later 
// CSS files path to be loaded
var styleFiles = [
    baseUrl + 'style/css/bootstrap.min.css',
    baseUrl + 'style/css/style.css'
];
// JS files path to be loaded
var scriptFiles = [
    baseUrl + 'script/js/bootstrap.min.js',
    baseUrl + 'script/js/script.js'
];
// Create an instance of class (AssetLoader)
var assetLoaderObj = new AssetLoader(styleFiles, scriptFiles, baseUrl);
// Load assets when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    assetLoaderObj.loadAssets();
    var baseElement = document.querySelector('head base');
    if (baseElement) {
        baseElement['href'] = baseUrl;
    }
    else {
        console.log('base not found!');
    }
});
//# sourceMappingURL=loadAssets.js.map