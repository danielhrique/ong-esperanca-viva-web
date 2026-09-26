import { initRouter, getCurrentRoute } from './modules/routes.js';
import { renderTemplate, updateFooterYear } from './modules/templates.js';
import { setupFormValidation } from './modules/validation.js';

function renderApp(route = getCurrentRoute()) {
  renderTemplate(route);
  setupFormValidation();
}

updateFooterYear();
renderApp();
initRouter(renderApp);
