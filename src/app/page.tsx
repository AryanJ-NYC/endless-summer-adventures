import { Carousel } from './homepage/Carousel';
import { getReviews } from './homepage/google-places';
import { fetchHomepage } from '../../sanity/lib/queries';
import { urlForImage } from '../../sanity/lib/image';

const googleReviewsUrl =
  'https://www.google.com/maps/place/ENDLESS+SUMMER+ADVENTURES/@25.9838265,-81.7291439,6z/data=!4m12!1m2!2m1!1sendless+summer+adventures!3m8!1s0x88daeffaae30b81f:0xafb7a32c4acfa3d3!8m2!3d25.9838265!4d-81.7291439!9m1!1b1!15sChllbmRsZXNzIHN1bW1lciBhZHZlbnR1cmVzkgEPZmlzaGluZ19jaGFydGVy4AEA!16s%2Fg%2F11l4d81b_4?entry=ttu';

export default async function Home() {
  const [homepage, reviews] = await Promise.all([fetchHomepage(), getReviews()]);

  return (
    <main>
      <nav className="px-2 sm:px-8 py-6">
        <p>Endless Summer Adventures</p>
      </nav>
      <div className="relative">
        <Carousel
          imgUrls={homepage.splash_images.map((slide) => urlForImage(slide).quality(90).url())}
        />
        <div className="absolute flex flex-col justify-center items-center h-full gap-y-4 px-2 text-center text-white top-0 w-full">
          <h1 className="text-4xl sm:text-6xl tracking-wider uppercase">
            <span className="text-cyan-200">Endless</span>{' '}
            <span className="text-orange-200">Summer</span>{' '}
            <span className="text-cyan-200">Adventures</span>
          </h1>
          <p className="text-xl">
            Dive into Marco Island&apos;s best fishing with Captain Nick at Endless Summer
            Adventures!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 px-2 sm:px-8 py-8">
        <div>
          <p className="text-center">The best fishing charters in</p>
          <p className="text-center">Marco Island, Isles of Capri and all Southwest Florida</p>
        </div>
        {reviews.length ? (
          <div className="flex flex-col items-center gap-y-4">
            <p className="text-center text-xl tracking-wider uppercase">Top-Rated on Google</p>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
              {reviews.map((review) => {
                return (
                  <div
                    className="border flex flex-col gap-y-4 rounded-md text-sm md:text-base py-4 px-8 max-h-96 overflow-y-auto"
                    key={review.relative_time_description}
                  >
                    <div className="flex gap-x-4 justify-between">
                      <div className="flex gap-x-4 items-center">
                        <img
                          className="h-8 w-8"
                          referrerPolicy="no-referrer"
                          src={review.profile_photo_url}
                        />
                        <div>
                          <p className="text-gray-800">{review.author_name}</p>
                          <p className="text-gray-500 text-xs">
                            {review.relative_time_description}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-x-1 self-end">
                        {new Array(review.rating).fill(null).map((_, i) => (
                          <p key={`review_${i}`}>⭐</p>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-800">{review.text}</p>
                  </div>
                );
              })}
            </div>
            <a
              className="bg-cyan-200 px-4 py-2 rounded-md text-cyan-900"
              href={googleReviewsUrl}
              target="_blank"
            >
              View all Google Reviews
            </a>
          </div>
        ) : null}
      </div>
    </main>
  );
}
