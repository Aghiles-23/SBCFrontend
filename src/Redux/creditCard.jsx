// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const offreApi = createApi({
  reducerPath: "offreApi",
  baseQuery: fetchBaseQuery({
    // @ts-ignore
    baseUrl: `http://localhost:1337/api/`,
  }),
  endpoints: (builder) => ({
    getoffreByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetoffreByNameQuery } = offreApi;