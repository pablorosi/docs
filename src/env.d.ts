/// <reference types="astro/client" />

declare module "virtual:starlight/user-config" {
  const config: any;
  export default config;
}

declare namespace App {
  interface Locals {
    starlightRoute: {
      sidebar: any[];
    };
  }
}
