declare module "next" {
  // prevent bad imports from breaking build
  export type PageProps = never;
}
