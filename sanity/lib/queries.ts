import { groq } from 'next-sanity';
import { sanityFetch } from './sanity-fetch';
import type { Image } from 'sanity';

export const fetchHomepage = async () => {
  const homepageQuery = groq`*[_type == "homepage"][0]`;
  const homepage = await sanityFetch<Homepage>({ query: homepageQuery });
  return homepage;
};
type Homepage = {
  gallery: Image[];
  gallery_caption: string;
  gallery_title: string;
  marketing_blurb: string;
  meet_captain_nick_img: Image;
  meet_captain_nick_text: string;
  splash_images: Image[];
};
