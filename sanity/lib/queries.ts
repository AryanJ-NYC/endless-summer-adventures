import { groq } from 'next-sanity';
import { sanityFetch } from './sanity-fetch';
import type { Image } from 'sanity';

const homepageQuery = groq`*[_type == "homepage"]`;
export const fetchHomepage = async () => {
  const [homepage] = await sanityFetch<{ splash_images: Image[] }[]>({ query: homepageQuery });
  return homepage;
};
