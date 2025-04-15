/**
 * @class AssetLoader
 * @classdesc A class to load related assets (CSS and JavaScript) required for the application.
 */
class AssetLoader {
    private styles: string[];
    private scripts: string[];

    constructor(styles: string[], scripts: string[]) {
        this.styles = styles;
        this.scripts = scripts;
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
            await this.loadHtmlContent('include/nav.html', 'nav', true);
            await this.loadHtmlContent('include/footer.html', 'footer', false);
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
    async loadHtmlContent(url: string, elementTag: string, prepend: boolean): Promise<void> {
        const parser = new DOMParser(); // Html parser
        let data = await fetch(url);
        const htmlContent = parser.parseFromString(await data.text(), 'text/html');
        const htmlTag: HTMLElement = htmlContent.querySelector(elementTag)!;
        prepend? document.body.prepend(htmlTag) : document.body.append(htmlTag);
    }
}

// CSS files path to be loaded
const styleFiles = [
    'style/css/bootstrap.min.css',
    'style/css/style.css'
];

// JS files path to be loaded
const scriptFiles = [
    'script/js/bootstrap.min.js',
    'script/js/script.js'
];

// Create an instance of class (AssetLoader)
const assetLoader = new AssetLoader(styleFiles, scriptFiles);

// Load assets when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => assetLoader.loadAssets());