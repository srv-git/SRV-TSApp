/**
 * @class AssetLoader
 * @classdesc A class to load related assets (CSS and JavaScript) required for the application.
 */
class AssetLoader {
    private styles: string[];
    private scripts: string[];
    private baseUrl: string;

    constructor(styles: string[], scripts: string[], baseUrl: string) {
        this.styles = styles;
        this.scripts = scripts;
        this.baseUrl = baseUrl;
    }

    /**
     * Loads stylesheets, header, footer, and scripts asynchronously.
     * @returns {Promise<void>}
     * @throws {Error} 
     */
    public async loadAssets(): Promise<void> {
		try{
            // Load stylesheets
            this.styles.forEach((style: string): void => {
                const link: HTMLLinkElement = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = style;
                document.head.appendChild(link);
            });            
            // Load Header and Footer
            await this.loadHtmlContent(this.baseUrl+'include/user-header.html', 'nav', true);
            await this.loadHtmlContent(this.baseUrl+'include/user-footer.html', 'footer', false);
            // To load Scripts
             this.scripts.forEach((script: string): void => {
                const scriptTag: HTMLScriptElement = document.createElement('script');
                scriptTag.src = script;
                document.body.appendChild(scriptTag);
            });
		} catch(error) {
		        console.error('There was a problem with the fetch operation:', error);
	    };
	}

    /**
     * Fetches HTML content from the URL, parses it, and inserts into the document.
     * @param {string} url 
     * @param {string} elementTag 
     * @param {boolean} prepend 
     * @returns {Promise<void>}
     */
    private async loadHtmlContent(url: string, elementTag: string, prepend: boolean): Promise<void> {
        const parser = new DOMParser(); // Html parser
        let data = await fetch(url);
        const htmlContent = parser.parseFromString(await data.text(), 'text/html');
        const htmlTag: HTMLElement = htmlContent.querySelector(elementTag)!;
        prepend ? document.body.prepend(htmlTag) : document.body.append(htmlTag);
    }
}

/**
 * @class EnvironmentChecker
 * @classdesc A class to check the environment (live or local) of the application.
 */
class EnvironmentChecker {
    private hostname: string;

    constructor() {
        this.hostname = window.location.hostname;
    }

    // To check the environment and log the result in the console. Returns true if running in a live environment, false otherwise.
    public checkEnvironment(): boolean {
        if (this.isLive()) {
            console.log("Running in a live environment.");
            return true;
        } else if (this.isLocal()) {
            console.log("Running in a local environment.");
            return false;
        } else {
            console.log("Running in an unknown environment.");
            return true;
        }
    }

    // To check the local environment
    private isLocal(): boolean {
        return this.hostname === "localhost" || this.hostname === "127.0.0.1" || this.hostname === "::1";
    }

    // To check the live environment
    private isLive(): boolean {
        const liveDomains = ["https://srv-git.github.io/"]; // Add your live domains here
        return liveDomains.includes(this.hostname);
    }
}

// To get the live status    
const envChecker = new EnvironmentChecker();
const live = envChecker.checkEnvironment();
const baseUrl = live ? 'https://srv-git.github.io/SRV-TSApp/' : 'http://127.0.0.1:5500/'; // change to baseUrlLocal for local development
console.log('live', live, baseUrl) // TODO remove it later 

// CSS files path to be loaded
const styleFiles = [
    baseUrl+'style/css/bootstrap.min.css',
    baseUrl+'style/css/style.css'
];

// JS files path to be loaded
const scriptFiles = [
    baseUrl+'script/js/bootstrap.min.js',
    baseUrl+'script/js/script.js'
];

// Create an instance of class (AssetLoader)
const assetLoaderObj = new AssetLoader(styleFiles, scriptFiles, baseUrl);

// Load assets when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () =>{
    const baseElement = document.querySelector('head base');
    if (baseElement) {
        baseElement['href'] = baseUrl;
    }
     assetLoaderObj.loadAssets();
});