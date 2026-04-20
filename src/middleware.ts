import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Check if we are trying to access a protected dashboard route
  // Exclude the login page itself
  if (context.url.pathname.startsWith('/dashboard') && context.url.pathname !== '/dashboard/login') {
    if (!context.cookies.has("admin_role")) {
      return context.redirect('/dashboard/login');
    }
  }

  // Continue to the next step
  return next();
});
