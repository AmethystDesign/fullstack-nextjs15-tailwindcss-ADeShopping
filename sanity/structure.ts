// import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())
