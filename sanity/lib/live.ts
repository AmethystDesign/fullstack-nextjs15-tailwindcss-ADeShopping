// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from './client'

const token = process.env.SANITY_API_READ_TOKEN || "";
if (!token) {
  console.warn("SANITY_API_READ_TOKEN is not set. Live content will not work.");
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: "vX", // Replace "vX" with the version you want to use
  }),
  serverToken: token, // Required for server-side fetching
  browserToken: token, // Optional, but recommended to avoid CORS issues
  fetchOptions: {
    revalidate: 0, // Disable Next.js caching to always get the freshest content
  },
});
