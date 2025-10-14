import { groq } from 'next-sanity';
import { sanityFetch } from './sanity-fetch';
import type { Image, PortableTextBlock } from 'sanity';

export const fetchHomepage = async () => {
  const homepageQuery = groq`*[_type == "homepage"][0]`;
  const homepage = await sanityFetch<Homepage>({ query: homepageQuery });
  return homepage;
};

export const fetchBoats = async () => {
  const boatsQuery = groq`*[_type == "boat"] | order(orderRank)`;
  const boats = await sanityFetch<Boat[]>({ query: boatsQuery });
  return boats;
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

export type Boat = {
  _id: string;
  name: string;
  images: Image[];
  description: PortableTextBlock[];
  features: string[];
  capacity_info: string;
  rates: {
    half_day: number;
    half_day_hours: number;
    three_quarter_day: number;
    three_quarter_day_hours: number;
    full_day: number;
    full_day_hours: number;
  };
  base_passenger_count: number;
  additional_passenger_rate: number;
  max_passengers?: number;
  max_weight?: number;
};
