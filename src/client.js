import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "zyjnlny9",
    
    dataset: "production"
})

export const previewClient = sanityClient({
    projectId: "zyjnlny9",
    dataset: "production",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  })