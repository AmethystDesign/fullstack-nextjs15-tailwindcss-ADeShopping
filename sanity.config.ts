'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

/*
The error message "'sanity/structure' has no exported member named 'structureTool'" in Sanity v4 indicates that the structureTool export is not found in the sanity/structure module. This is a common issue when migrating or setting up a Sanity v4 project.
The correct export to use for the structure tool in Sanity v4 is simply structure, not structureTool.
*/

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
// import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  structure,
  plugins: [
    // structureTool({ structure }), // ✅ correct way to use custom structure
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
