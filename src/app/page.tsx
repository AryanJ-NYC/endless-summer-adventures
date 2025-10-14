import { Toaster } from 'react-hot-toast';
import { Carousel } from './homepage/Carousel';
import { getReviews } from './homepage/lib/google-places';
import { Section } from './homepage/Section';
import { BoatsSection } from './homepage/BoatsSection';
import { ContactUsForm } from './homepage/ContactUsForm';
import { fetchHomepage } from '../../sanity/lib/queries';
import { urlForImage } from '../../sanity/lib/image';
import { ContactUsInfo } from './homepage/ContactUsInfo';
import { GalleryWithLightbox } from './homepage/GalleryWithLightbox';
import { ReviewCard } from './homepage/ReviewCard';

const googleReviewsUrl =
  'https://www.google.com/maps/place/ENDLESS+SUMMER+ADVENTURES/@25.9838265,-81.7291439,6z/data=!4m12!1m2!2m1!1sendless+summer+adventures!3m8!1s0x88daeffaae30b81f:0xafb7a32c4acfa3d3!8m2!3d25.9838265!4d-81.7291439!9m1!1b1!15sChllbmRsZXNzIHN1bW1lciBhZHZlbnR1cmVzkgEPZmlzaGluZ19jaGFydGVy4AEA!16s%2Fg%2F11l4d81b_4?entry=ttu';

export default async function Home() {
  const [homepage, reviews] = await Promise.all([fetchHomepage(), getReviews()]);

  return (
    <main className="scroll-smooth tracking-wide">
      <Section className="relative flex items-center bg-gradient-to-b from-sky-50 via-blue-50 to-white">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8 lg:max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-blue-900 tracking-tight leading-tight">
              Endless Summer Adventures
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-xl leading-relaxed">
              Experience Marco Island&apos;s premier fishing charters with Captain Nick Yacono
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contact-us"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-10 py-5 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Book Your Adventure
              </a>
              <a
                href="tel:+12397844935"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl px-10 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="w-full lg:flex-1 max-w-2xl">
            <Carousel interval={5_000} className="rounded-2xl overflow-hidden shadow-2xl">
              {homepage.splash_images
                .map((slide) => urlForImage(slide).quality(90).url())
                .map((imgUrl) => (
                  <img
                    className="w-full h-full object-cover"
                    key={imgUrl}
                    src={imgUrl}
                    alt="Fishing adventure"
                  />
                ))}
            </Carousel>
          </div>
        </div>
      </Section>
      <Section className="bg-stone-50 py-16 md:py-24">
        <div className="flex flex-col items-center gap-12 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center max-w-3xl leading-tight">
            {homepage.marketing_blurb}
          </h2>
          {reviews.length ? (
            <div className="w-full flex flex-col gap-12">
              <h3 className="text-2xl font-bold text-slate-800 text-center">
                What Our Anglers Say
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                  <ReviewCard
                    key={`${review.author_name}_${review.relative_time_description}`}
                    review={review}
                  />
                ))}
              </div>
              <div className="text-center">
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  Read All Reviews
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </Section>
      <BoatsSection />
      <Section className="bg-amber-50 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-2">
                Your Captain
              </p>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Meet Captain Nick Yacono</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              {homepage.meet_captain_nick_text}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg px-6 py-3 shadow-md">
                <p className="text-sm text-slate-600">Licensed Since</p>
                <p className="text-2xl font-bold text-blue-800">2011</p>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-md">
                <p className="text-sm text-slate-600">Local Knowledge</p>
                <p className="text-2xl font-bold text-teal-600">30+ Years</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              className="w-full rounded-2xl shadow-2xl"
              src={urlForImage(homepage.meet_captain_nick_img).width(800).height(600).url()}
              alt="Captain Nick Yacono"
            />
          </div>
        </div>
      </Section>
      <Section className="bg-stone-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              {homepage.gallery_title}
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">{homepage.gallery_caption}</p>
          </div>
          <GalleryWithLightbox
            images={homepage.gallery.map((img) => ({
              src: urlForImage(img).width(1200).quality(90).url(),
              alt: 'Fishing catch',
            }))}
          />
        </div>
      </Section>
      <Section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24" id="contact-us">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Ready to Cast Off?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Book your unforgettable fishing adventure today. We&apos;ll get back to you within 24
              hours.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactUsForm />
            </div>
            <div className="lg:col-span-2">
              <ContactUsInfo />
            </div>
          </div>
        </div>
      </Section>
      <Toaster />
    </main>
  );
}

export const revalidate = 3600; // revalidate at most every hour
