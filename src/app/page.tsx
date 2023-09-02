import { Carousel } from './homepage/Carousel';
import { getReviews } from './homepage/google-places';
import { fetchHomepage } from '../../sanity/lib/queries';
import { urlForImage } from '../../sanity/lib/image';

const googleReviewsUrl =
  'https://www.google.com/maps/place/ENDLESS+SUMMER+ADVENTURES/@25.9838265,-81.7291439,6z/data=!4m12!1m2!2m1!1sendless+summer+adventures!3m8!1s0x88daeffaae30b81f:0xafb7a32c4acfa3d3!8m2!3d25.9838265!4d-81.7291439!9m1!1b1!15sChllbmRsZXNzIHN1bW1lciBhZHZlbnR1cmVzkgEPZmlzaGluZ19jaGFydGVy4AEA!16s%2Fg%2F11l4d81b_4?entry=ttu';

export default async function Home() {
  const [homepage, reviews] = await Promise.all([fetchHomepage(), getReviews()]);

  return (
    <main className="scroll-smooth">
      <nav className="bg-cyan-50 flex px-2 sm:px-8 py-6 justify-between">
        <p>Logo Here</p>
        <div>
          <p className="text-cyan-600 text-xs text-center">Call or Text</p>
          <a className="text-cyan-950" href="tel:2397844935">
            (239) 784-4​935
          </a>
        </div>
      </nav>
      <div className="relative">
        <Carousel
          imgUrls={homepage.splash_images.map((slide) => urlForImage(slide).quality(90).url())}
        />
        <div className="absolute flex flex-col justify-center items-center h-full gap-y-5 px-2 text-center text-white top-0 w-full">
          <h1 className="text-5xl sm:text-6xl tracking-wider uppercase">
            <span className="text-cyan-200">Endless</span>{' '}
            <span className="text-orange-200">Summer</span>{' '}
            <span className="text-cyan-200">Adventures</span>
          </h1>
          <p className="max-w-lg text-cyan-50 text-2xl">
            Dive into Marco Island&apos;s best fishing with Captain Nick at Endless Summer
            Adventures!
          </p>
          <a className="bg-cyan-200 px-6 py-2 rounded-sm text-cyan-900" href="#contact-us">
            Contact Us!
          </a>
        </div>
      </div>
      <div className="bg-orange-50 flex flex-col gap-y-4 px-2 sm:px-8 py-16">
        <p className="max-w-2xl self-center font-medium text-orange-950 text-3xl text-center tracking-wide uppercase">
          The best fishing charters in Marco Island, Isles of Capri and all Southwest Florida
        </p>
        {reviews.length ? (
          <div className="flex flex-col items-center gap-y-6 py-8">
            <p className="font-semibold text-center text-blue-900 text-xl tracking-widest uppercase">
              Top-Rated on Google
            </p>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
              {reviews.map((review) => {
                return (
                  <div
                    className="bg-white border flex flex-col gap-y-4 rounded-md text-sm md:text-base py-4 px-8 max-h-96 overflow-y-auto"
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
              className="bg-cyan-200 px-6 py-2 rounded-sm text-cyan-900"
              href={googleReviewsUrl}
              target="_blank"
            >
              View all Google Reviews
            </a>
          </div>
        ) : null}
      </div>
      <div className="bg-cyan-50 flex flex-col items-center gap-y-8 px-2 sm:px-8 py-16">
        <p className="max-w-2xl font-medium text-cyan-800 text-3xl text-center tracking-wide uppercase">
          Meet Captain Nick Yacono
        </p>
        <img src={urlForImage(homepage.meet_captain_nick_img).width(666).height(420).url()} />
        <p className="text-lg max-w-xl text-cyan-950">{homepage.meet_captain_nick_text}</p>
      </div>
      <div
        className="bg-orange-50 flex flex-col items-center gap-y-4 px-2 sm:px-8 py-16 text-orange-950"
        id="contact-us"
      >
        <div>
          <p className="max-w-2xl font-medium text-3xl text-center tracking-wide uppercase">
            Contact Us
          </p>
          <p>Send us a message and we&apos;ll call or email right back!</p>
        </div>
        <form className="flex flex-col max-w-lg gap-y-4">
          <label className="flex flex-col gap-y-1 self-start w-full">
            Phone Number
            <input className="py-1 px-2" type="tel" />
          </label>
          <label className="flex flex-col gap-y-1 self-start w-full">
            Email Address
            <input className="py-1 px-2" type="email" />
          </label>
          <label className="flex flex-col gap-y-1">
            <p>Message</p>
            <textarea className="box-border p-4 resize-none w-full" rows={12} cols={69} />
          </label>
          <button className="bg-cyan-200 px-6 py-2 rounded-sm text-cyan-900" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
