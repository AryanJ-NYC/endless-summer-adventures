# Endless Summer Adventures - Homepage Redesign Plan

**Date:** 2025-10-10
**Goal:** Transform the homepage from a dated, corporate-feeling layout with cyan colors into a modern, authentic Southwest Florida fishing charter website.

---

## Executive Summary

The current design suffers from:
- Corporate cyan color scheme (feels like SaaS product, not fishing charter)
- Dated layout patterns (text-left/image-right stacking)
- Flat typography with no hierarchy
- Generic pricing cards
- Overwhelming carousel indicators (39+ dots)
- Uninspired contact form

**Target aesthetic:** Warm, authentic, adventurous Southwest Florida fishing experience with professional credibility.

---

## Color Palette Redesign

### Current Problems
- **Cyan (cyan-200, cyan-600, cyan-700, cyan-900)** - Too artificial, tech-startup feel
- **Light blue backgrounds** - Cold, sterile
- **Lacks warmth** - No sunset golds, ocean depth, or natural tones

### New Tailwind Color Palette

#### Primary Colors
| Use Case | Current | New Tailwind Colors | Rationale |
|----------|---------|-------------------|-----------|
| **Hero Title** | `text-cyan-700` | `text-blue-900` | Deep ocean professional |
| **Hero Subtitle** | `text-cyan-600` | `text-blue-700` | Authentic water color |
| **Primary CTA** | `bg-cyan-200 text-cyan-900` | `bg-orange-500 text-white hover:bg-orange-600` | Sunset energy, action |
| **Section Headers** | `text-orange-950` | `text-slate-800` | Better readability |
| **Body Text** | `text-orange-950` | `text-slate-700` | Warm but readable |
| **Accent Text** | `text-blue-900` | `text-teal-700` | Real Gulf water |

#### Background Colors
| Element | Current | New | Rationale |
|---------|---------|-----|-----------|
| **Hero Section** | Default white | `bg-gradient-to-b from-sky-50 to-white` | Open sky to horizon |
| **Review Section** | Default white | `bg-stone-50` | Warm, sandy beach feel |
| **Pricing Section** | Default white | `bg-gradient-to-b from-blue-50 to-sky-50` | Water depth |
| **Captain Section** | Peach/tan | `bg-amber-50` | Warm, welcoming |
| **Gallery Section** | Light blue | `bg-stone-50` | Natural, warm |
| **Contact Section** | Default | `bg-gradient-to-b from-slate-50 to-white` | Professional close |

#### Interactive Elements
| Element | Current | New |
|---------|---------|-----|
| **Buttons Primary** | `bg-cyan-200 text-cyan-900` | `bg-orange-500 text-white hover:bg-orange-600 hover:shadow-xl transition-all` |
| **Buttons Secondary** | `bg-cyan-200 text-cyan-900` | `bg-blue-600 text-white hover:bg-blue-700 transition-all` |
| **Links** | Various | `text-orange-600 hover:text-orange-700 underline-offset-4` |
| **Card Shadows** | `shadow-cyan-200` | `shadow-lg shadow-slate-200/50` |
| **Card Borders** | `border-cyan-700` | `border-orange-500` or `border-teal-600` |

#### Full Color Reference
```javascript
// Primary palette for Southwest Florida fishing
const colorPalette = {
  ocean: {
    deep: 'blue-900',      // #1e3a8a - Deep water, trust
    medium: 'blue-700',    // #1d4ed8 - Gulf blue
    light: 'blue-600',     // #2563eb - Clear water
    sky: 'sky-500',        // #0ea5e9 - Open sky
  },
  sunset: {
    primary: 'orange-500', // #f97316 - Sunset, action
    hover: 'orange-600',   // #ea580c - Deeper sunset
    light: 'orange-400',   // #fb923c - Warm highlight
  },
  natural: {
    sand: 'amber-200',     // #fde68a - Beach sand
    warm: 'amber-50',      // #fffbeb - Warm background
    stone: 'stone-50',     // #fafaf9 - Natural light
  },
  accent: {
    teal: 'teal-600',      // #0d9488 - Real Gulf water
    green: 'emerald-700',  // #047857 - Mangroves
    gold: 'amber-600',     // #d97706 - Trophy fish
  },
  text: {
    primary: 'slate-800',  // #1e293b - Dark, readable
    secondary: 'slate-700',// #334155 - Body text
    light: 'slate-600',    // #475569 - Captions
    white: 'white',        // #ffffff - On color
  }
}
```

---

## Layout Restructure

### 1. Hero Section
**Current Issues:**
- Side-by-side text/carousel is dated (2015 pattern)
- Small heading (text-5xl/text-6xl)
- CTA button gets lost
- Carousel has 39+ images with overwhelming dots

**New Design:**
```jsx
<Section className="relative min-h-screen flex items-center bg-gradient-to-b from-sky-50 via-blue-50 to-white">
  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
    {/* Text Content - Larger, Bolder */}
    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8 lg:max-w-2xl">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-blue-900 tracking-tight leading-tight">
        Endless Summer Adventures
      </h1>
      <p className="text-xl md:text-2xl text-slate-700 max-w-xl leading-relaxed">
        Experience Marco Island's premier fishing charters with Captain Nick Yacono
      </p>

      {/* CTA Group */}
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

    {/* Hero Image - Single Featured, Auto-rotating */}
    <div className="w-full lg:flex-1 max-w-2xl">
      <Carousel
        interval={5000}
        showArrows={false}
        showIndicators={true}
        className="rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Limit to 5-7 best hero images */}
      </Carousel>
    </div>
  </div>
</Section>
```

**Improvements:**
- Massive hero text (text-8xl on desktop)
- Dual CTA buttons with different styles
- Hover effects with transforms
- Reduced carousel images (5-7 hero shots only)
- Gradient background for depth

---

### 2. Marketing Blurb + Google Reviews
**Current Issues:**
- Orange-950 text is too dark
- Reviews grid is generic white boxes
- No visual hierarchy

**New Design:**
```jsx
<Section className="bg-stone-50 py-16 md:py-24">
  <div className="flex flex-col items-center gap-12 max-w-6xl mx-auto">
    {/* Marketing Blurb */}
    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center max-w-3xl leading-tight">
      {homepage.marketing_blurb}
    </h2>

    {/* Trust Badges */}
    <div className="flex flex-wrap justify-center gap-6 text-center">
      <div className="bg-white rounded-lg px-6 py-4 shadow-md">
        <p className="text-3xl font-bold text-orange-500">5.0</p>
        <p className="text-sm text-slate-600">Google Rating</p>
      </div>
      <div className="bg-white rounded-lg px-6 py-4 shadow-md">
        <p className="text-3xl font-bold text-blue-700">10+</p>
        <p className="text-sm text-slate-600">Years Experience</p>
      </div>
      <div className="bg-white rounded-lg px-6 py-4 shadow-md">
        <p className="text-3xl font-bold text-teal-600">100%</p>
        <p className="text-sm text-slate-600">Local Expert</p>
      </div>
    </div>

    {/* Google Reviews */}
    {reviews.length && (
      <div className="w-full">
        <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
          What Our Anglers Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.author_name}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={review.profile_photo_url}
                    alt={review.author_name}
                  />
                  <div>
                    <p className="font-semibold text-slate-800">{review.author_name}</p>
                    <p className="text-xs text-slate-500">{review.relative_time_description}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed line-clamp-4">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href={googleReviewsUrl}
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Read All Reviews
          </a>
        </div>
      </div>
    )}
  </div>
</Section>
```

**Improvements:**
- Trust badges with stats
- Better review card design
- Star ratings with actual stars (★)
- Hover effects
- Better spacing

---

### 3. Pricing Section
**Current Issues:**
- Cards look like SaaS pricing
- White with cyan shadows (corporate)
- Fish emojis feel forced
- No visual hierarchy

**New Design:**
```jsx
<Section className="bg-gradient-to-b from-blue-50 to-sky-50 py-16 md:py-24">
  <div className="flex flex-col items-center gap-12 max-w-6xl mx-auto">
    <div className="text-center">
      <h2 className="text-5xl font-bold text-blue-900 mb-4">
        Charter Pricing
      </h2>
      <p className="text-xl text-slate-700">
        All-inclusive packages for your perfect fishing adventure
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {/* 4 Hour Package */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-2 border-slate-200">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full text-sm">
            Half Day
          </div>
          <div>
            <p className="text-slate-600 text-sm mb-2">4 hours</p>
            <p className="text-5xl font-bold text-blue-900">$450</p>
          </div>
          <ul className="text-left space-y-2 text-slate-700">
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> Live bait included
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> All tackle & gear
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> Fishing license
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> Fish cleaning
            </li>
          </ul>
        </div>
      </div>

      {/* 6 Hour Package - FEATURED */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl transform md:scale-105 border-4 border-orange-400 relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 font-bold px-6 py-1 rounded-full text-sm">
          Most Popular
        </div>
        <div className="flex flex-col items-center text-center space-y-6 text-white">
          <div className="bg-white/20 font-semibold px-4 py-2 rounded-full text-sm">
            Three Quarter Day
          </div>
          <div>
            <p className="text-orange-100 text-sm mb-2">6 hours</p>
            <p className="text-6xl font-bold">$650</p>
          </div>
          <ul className="text-left space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-amber-300">✓</span> Live bait included
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-300">✓</span> All tackle & gear
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-300">✓</span> Fishing license
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-300">✓</span> Fish cleaning
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-300">✓</span> More fishing time!
            </li>
          </ul>
        </div>
      </div>

      {/* 8 Hour Package */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border-2 border-slate-200">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full text-sm">
            Full Day
          </div>
          <div>
            <p className="text-slate-600 text-sm mb-2">8 hours</p>
            <p className="text-5xl font-bold text-blue-900">$800</p>
          </div>
          <ul className="text-left space-y-2 text-slate-700">
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> Live bait included
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> All tackle & gear
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> Fishing license
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> Fish cleaning
            </li>
            <li className="flex items-center gap-2">
              <span className="text-orange-500">✓</span> Maximum adventure!
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Pricing Details */}
    <div className="bg-white rounded-xl p-8 max-w-2xl shadow-md border border-slate-200">
      <h3 className="font-bold text-lg text-slate-800 mb-4">What's Included</h3>
      <div className="space-y-3 text-slate-700">
        <p>✓ All prices include tackle, fishing license, live bait, water, ice, and fish cleaning</p>
        <p>✓ Base fare covers <span className="font-semibold text-blue-800">two guests</span></p>
        <p>✓ Additional passengers (3rd & 4th): <span className="font-semibold text-blue-800">$25 each</span></p>
        <p>✓ Children under 7 fish <span className="font-semibold text-blue-800">free</span></p>
        <p>✓ Maximum passenger weight: <span className="font-semibold text-blue-800">750 lbs</span></p>
      </div>
    </div>
  </div>
</Section>
```

**Improvements:**
- Middle card is featured with gradient
- "Most Popular" badge
- Checkmark lists instead of emojis
- Better visual hierarchy
- Hover effects
- Includes box for details

---

### 4. Meet Captain Nick Section
**Current Issues:**
- Orange-900 text is harsh
- Side-by-side layout is generic
- No personality

**New Design:**
```jsx
<Section className="bg-amber-50 py-16 md:py-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
    <div className="order-2 lg:order-1 space-y-6">
      <div>
        <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-2">
          Your Captain
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Meet Captain Nick Yacono
        </h2>
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
```

**Improvements:**
- Section label above title
- Better text color
- Credential badges
- Larger rounded image

---

### 5. Gallery Section
**Current Issues:**
- Another carousel (two carousels = overwhelming)
- 39+ indicator dots
- Layout is awkward

**New Design - Option A (Grid):**
```jsx
<Section className="bg-stone-50 py-16 md:py-24">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        {homepage.gallery_title}
      </h2>
      <p className="text-xl text-slate-700 max-w-2xl mx-auto">
        {homepage.gallery_caption}
      </p>
    </div>

    {/* Masonry-style grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {homepage.gallery?.slice(0, 12).map((img, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 group cursor-pointer"
          style={{ gridRow: i % 3 === 0 ? 'span 2' : 'span 1' }}
        >
          <img
            src={urlForImage(img).width(600).quality(85).url()}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            alt="Fishing catch"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  </div>
</Section>
```

**Improvements:**
- Grid instead of carousel
- Hover zoom effects
- Masonry layout (varied heights)
- Limit to 12 best images

---

### 6. Contact Form Section
**Current Issues:**
- Generic inputs with no styling
- Side-by-side is uninspired
- No visual interest

**New Design:**
```jsx
<Section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24" id="contact-us">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
        Ready to Cast Off?
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Book your unforgettable fishing adventure today. We'll get back to you within 24 hours.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
      {/* Contact Form - Takes up 3 columns */}
      <div className="lg:col-span-3">
        <form className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200" onSubmit={onSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                {...register('telephoneNumber')}
                type="tel"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                placeholder="(239) 555-1234"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address <span className="text-orange-500">*</span>
              </label>
              <input
                {...register('emailAddress')}
                type="email"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                placeholder="your@email.com"
              />
              <p className="text-red-500 text-sm mt-1 min-h-[20px]">
                {formState.errors.emailAddress?.message || ' '}
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Message <span className="text-orange-500">*</span>
              </label>
              <p className="text-xs text-slate-500 mb-2">
                Please include party size and preferred date(s)
              </p>
              <textarea
                {...register('message')}
                rows={8}
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                placeholder="I'd like to book a charter for..."
              />
            </div>

            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-400 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:cursor-not-allowed"
            >
              {formState.isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <AiOutlineLoading3Quarters className="animate-spin" />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info - Takes up 2 columns */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <a
              href="tel:+12397844935"
              className="flex items-start gap-4 hover:translate-x-1 transition-transform"
            >
              <div className="bg-white/20 rounded-lg p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-100">Phone</p>
                <p className="text-lg font-semibold">(239) 784-4935</p>
              </div>
            </a>

            <a
              href="mailto:nick@endless-summer-adventures.com"
              className="flex items-start gap-4 hover:translate-x-1 transition-transform"
            >
              <div className="bg-white/20 rounded-lg p-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-100">Email</p>
                <p className="text-sm font-semibold break-all">nick@endless-summer-adventures.com</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-200">
          <h4 className="font-bold text-slate-800 mb-3">Response Time</h4>
          <p className="text-slate-700">
            We typically respond within <span className="font-semibold text-orange-600">24 hours</span>.
            For same-day bookings, please call directly.
          </p>
        </div>
      </div>
    </div>
  </div>
</Section>
```

**Improvements:**
- Styled form inputs with focus states
- Better labels and placeholders
- Contact info in colored card
- Response time callout
- Better button states

---

## Typography Improvements

### Current Hierarchy
- Hero: `text-5xl lg:text-6xl`
- Section Headers: `text-3xl`
- Body: Default size

### New Hierarchy
```css
/* Hero Title */
text-6xl md:text-7xl lg:text-8xl font-bold

/* Main Section Headers */
text-4xl md:text-5xl font-bold

/* Subsection Headers */
text-2xl md:text-3xl font-bold

/* Body Large */
text-lg md:text-xl

/* Body Regular */
text-base

/* Captions */
text-sm
```

---

## Implementation Checklist

### Phase 1: Color Migration
- [ ] Update hero section colors in `page.tsx`
- [ ] Update pricing section in `PricingSection.tsx`
- [ ] Update contact form in `ContactUsForm.tsx`
- [ ] Update contact info in `ContactUsInfo.tsx`
- [ ] Update Section component backgrounds

### Phase 2: Layout Improvements
- [ ] Enhance hero with larger typography
- [ ] Add trust badges to review section
- [ ] Redesign pricing cards with featured card
- [ ] Add credential badges to Captain section
- [ ] Convert gallery from carousel to grid
- [ ] Style form inputs with borders and focus states

### Phase 3: Polish
- [ ] Add hover effects to all interactive elements
- [ ] Add transition animations
- [ ] Test responsive behavior on mobile
- [ ] Optimize image loading
- [ ] Add loading states to buttons

---

## Expected Outcome

### Before
- Corporate cyan tech aesthetic
- Flat, dated layout
- Generic pricing cards
- Overwhelming carousels
- Bland form inputs

### After
- Warm Southwest Florida fishing aesthetic
- Modern, dynamic layout with depth
- Premium pricing presentation
- Focused image galleries
- Professional styled forms
- Clear visual hierarchy
- Authentic color palette that builds trust

---

## Color Quick Reference Card

**Copy this for implementation:**

```javascript
// Replace these throughout the codebase:

// OLD → NEW
'text-cyan-700' → 'text-blue-900'
'text-cyan-600' → 'text-blue-700'
'bg-cyan-200' → 'bg-orange-500'
'text-cyan-900' → 'text-white'
'shadow-cyan-900' → 'shadow-slate-200/50'
'shadow-cyan-200' → 'shadow-slate-200/50'
'border-cyan-700' → 'border-orange-500' or 'border-blue-600'
'text-orange-950' → 'text-slate-800'
'text-orange-900' → 'text-slate-800'
'text-blue-900' (headers) → 'text-slate-800' or keep 'text-blue-900'
'text-blue-800' → 'text-slate-700'

// Backgrounds
'bg-white' (sections) → 'bg-stone-50' or 'bg-amber-50' or gradients
```

**Done!** 🎣
