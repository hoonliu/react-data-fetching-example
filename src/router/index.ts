import React from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

const routers = import.meta.glob('../pages/**/*.(tsx|jsx|js|ts)');

function formatPath(key: string) {
  const path = key
    .replace(/\.\/pages/, '')
    .replace(/^\./, '')
    .replace(/\.(tsx|jsx|js)$/, '')
    .replace(/\/index(\[\w+])*$/, '$1')
    .replace(/\[(\w+)]/g, '/:$1')
    .replace(/\/\//g, '/')
    .toLowerCase();
  return path;
}

function parseRouters2BrowserRouter(
  routers: Record<string, () => Promise<any>>
) {
  const result: RouteObject[] = [];
  for (const key of Object.keys(routers)) {
    result.push({
      path: formatPath(key),
      Component: React.lazy(routers[key]),
    });
  }
  return result;
}

export default createBrowserRouter(parseRouters2BrowserRouter(routers));
