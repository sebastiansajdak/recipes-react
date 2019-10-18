declare module '*.css' {
  const names: {[name: string]: string};
  export default names;
}

declare module '*.scss';
declare module '*.json';

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}
