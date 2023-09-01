export const getReviews = async (): Promise<Review[]> => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.append('placeid', 'ChIJH7gwrvrv2ogR06PPSiyjt68');
  url.searchParams.append('fields', 'review');
  url.searchParams.append('key', apiKey);
  const resp = await fetch(url.toString(), { next: { revalidate: 60 * 60 * 24 } });
  const json = await resp.json();
  if (json.status !== 'OK') return [];
  return json.result.reviews;
};
type Review = {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
};
