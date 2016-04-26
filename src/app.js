export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',    moduleId: './users',    nav: true, title:'Github Users' },
      { route: 'attribute-usage',         name: 'attribute-usage',    moduleId: './attribute-usage',    nav: true, title:'attribute-usage' },
      { route: 'htmlonly',         name: 'htmlonly',    moduleId: './customElements/elements-host',    nav: true, title:'htmlonly' }
    ]);

    this.router = router;
  }
}
