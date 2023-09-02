import { groq } from 'next-sanity';
import { sanityFetch } from './sanity-fetch';
import type { Image } from 'sanity';

const homepageQuery = groq`*[_type == "homepage"][0]`;
export const fetchHomepage = async () => {
  const homepage = await sanityFetch<Homepage>({ query: homepageQuery });
  return homepage;
};
type Homepage = {
  meet_captain_nick_img: Image;
  meet_captain_nick_text: string;
  splash_images: Image[];
};
