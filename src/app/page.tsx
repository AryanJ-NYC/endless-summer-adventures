import Image from 'next/image';
import { Toaster } from 'react-hot-toast';
import logo from './favicon.ico';
import { Carousel } from './homepage/Carousel';
import { getReviews } from './homepage/google-places';
import { Section } from './homepage/Section';
import { PricingSection } from './homepage/PricingSection';
import { ContactUsForm } from './homepage/ContactUsForm';
import { fetchHomepage } from '../../sanity/lib/queries';
import { urlForImage } from '../../sanity/lib/image';
import { Fragment } from 'react';

const googleReviewsUrl =
  'https://www.google.com/maps/place/ENDLESS+SUMMER+ADVENTURES/@25.9838265,-81.7291439,6z/data=!4m12!1m2!2m1!1sendless+summer+adventures!3m8!1s0x88daeffaae30b81f:0xafb7a32c4acfa3d3!8m2!3d25.9838265!4d-81.7291439!9m1!1b1!15sChllbmRsZXNzIHN1bW1lciBhZHZlbnR1cmVzkgEPZmlzaGluZ19jaGFydGVy4AEA!16s%2Fg%2F11l4d81b_4?entry=ttu';

export default async function Home() {
  const [homepage, reviews] = await Promise.all([fetchHomepage(), getReviews()]);

  return (
    <main className="scroll-smooth tracking-wide">
      <nav className="bg-cyan-50 flex items-end px-2 sm:px-8 py-4 justify-between">
        <Image alt="Pelican holding a surfboard" height={96} src={logo} />
        <a href="tel:2397844935">
          <p className="text-cyan-600 text-xs text-center">Call or Text</p>
          <p className="text-cyan-950">(239) 784-4​935</p>
        </a>
      </nav>
      <div className="relative">
        <Carousel>
          {homepage.splash_images
            .map((slide) => urlForImage(slide).quality(90).url())
            .map((imgUrl) => (
              <div key={imgUrl}>
                <img className="h-[66vh] object-cover" src={imgUrl} />
                <div className="absolute top-0 bg-black opacity-60 h-full w-full" />
              </div>
            ))}
        </Carousel>
        <div className="absolute flex flex-col justify-center items-center h-full gap-y-5 px-2 text-center text-white top-0 w-full">
          <h1 className="text-5xl sm:text-6xl tracking-wider uppercase">
            <span className="text-cyan-200">Endless</span>{' '}
            <span className="text-orange-200">Summer</span>{' '}
            <span className="text-cyan-200">Adventures</span>
          </h1>
          <p className="max-w-lg text-cyan-50 text-2xl tracking-wide">
            Dive into Marco Island&apos;s best fishing with Captain Nick Yacono&apos;s at Endless
            Summer Adventures!
          </p>
          <a className="bg-cyan-200 px-6 py-2 rounded-sm text-cyan-900" href="#contact-us">
            Contact Us!
          </a>
        </div>
      </div>
      <Section>
        <p className="max-w-2xl font-medium text-orange-950 text-3xl text-center tracking-wide uppercase">
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
                    key={`${review.author_name}_${review.relative_time_description}`}
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
              Read all Google Reviews
            </a>
          </div>
        ) : null}
      </Section>
      <PricingSection />
      <Section className="gap-y-16">
        <p className="max-w-2xl font-medium text-orange-900 text-3xl text-center tracking-wider uppercase">
          Meet Captain Nick Yacono
        </p>
        <img src={urlForImage(homepage.meet_captain_nick_img).width(666).height(420).url()} />
        <p className="text-lg max-w-xl text-orange-950">{homepage.meet_captain_nick_text}</p>
      </Section>
      {homepage.boat_imgs?.length && homepage.boat_text && homepage.boat_title && (
        <Section>
          <div className="flex flex-col items-center gap-y-16">
            <p className="max-w-2xl font-medium text-blue-900 text-3xl text-center tracking-wider uppercase">
              {homepage.boat_title}
            </p>
            <Carousel className="max-w-3xl" showArrows>
              {homepage.boat_imgs
                .map((slide) => urlForImage(slide).quality(90).url())
                .map((imgUrl) => (
                  <img width={100} key={imgUrl} src={imgUrl} />
                ))}
            </Carousel>
            <p className="max-w-lg text-blue-900 tracking-wide">{homepage.boat_text}</p>
          </div>
        </Section>
      )}
      <Section id="contact-us">
        <div>
          <p className="max-w-2xl font-medium text-3xl text-center tracking-wide uppercase">
            Contact Us
          </p>
          <p>Send us a message and we&apos;ll call or email right back!</p>
        </div>
        <ContactUsForm />
      </Section>
      <Toaster />
    </main>
  );
}
