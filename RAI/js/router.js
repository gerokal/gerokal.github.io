class Router {
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.handleRouteChange());
        this.handleRouteChange();
    }

    handleRouteChange() {
        const route = window.location.hash.substring(1) || 'home';
        const page = this.routes[route];
        if (page) {
            this.loadPage(page);
        } else {
            // Handle 404
            console.error('Page not found');
        }
    }

    loadPage(page) {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = page.template;
    }
}