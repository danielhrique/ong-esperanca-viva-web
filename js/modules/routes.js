import { saveData } from './storage.js';

const routeByFile = {
  'inicio.html': 'inicio',
  'projetos.html': 'projetos',
  'cadastro.html': 'cadastro',
};

const fileByRoute = {
  inicio: 'inicio.html',
  projetos: 'projetos.html',
  cadastro: 'cadastro.html',
};

export function getCurrentRoute() {
  const fileName = window.location.pathname.split('/').pop();
  return routeByFile[fileName] || 'inicio';
}

function getRouteFromLink(link) {
  const url = new URL(link.href, window.location.href);
  const fileName = url.pathname.split('/').pop();
  return routeByFile[fileName] || 'inicio';
}

export function initRouter(renderApp) {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href$=".html"]');

    if (!link) {
      return;
    }

    const route = getRouteFromLink(link);
    const nextFile = fileByRoute[route];

    event.preventDefault();
    history.pushState({ route }, '', nextFile);
    saveData('ultimaNavegacao', route);
    renderApp(route);
  });

  window.addEventListener('popstate', (event) => {
    renderApp(event.state?.route || getCurrentRoute());
  });
}
