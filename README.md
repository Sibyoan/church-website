# Grace Church Website

A modern, content-rich church website inspired by bethanychurchlax.org, built with Next.js, TypeScript, Tailwind CSS, Firebase, and Razorpay payment gateway.

## Features

- 🏛️ Clean, peaceful, faith-oriented design
- 💰 Secure donation system with Razorpay integration
- 🔥 Firebase Firestore for data storage
- 📱 Fully responsive mobile-first design
- 🎨 Beautiful Tailwind CSS styling
- 🙏 Prayer request submission
- 📧 Contact form with Google Maps integration
- 📺 Watch sermons online
- 📅 Events calendar
- ⛪ Ministry information
- ✨ Anonymous donation option

## Pages

- **Home** (`/`) - Hero with CTAs, service timings, ministry highlights, events preview
- **About** (`/about`) - Church history, vision, mission, beliefs, leadership
- **Ministries** (`/ministries`) - Kids, Youth, Small Groups, Worship Team
- **Events** (`/events`) - Upcoming church events with details
- **Watch** (`/watch`) - Live stream and sermon archive
- **Give** (`/give`) - Dedicated donation page with Razorpay checkout
- **Give Success** (`/give/success`) - Thank you page after donation
- **Contact** (`/contact`) - Contact form and church information
- **Prayer Request** (`/prayer-request`) - Submit prayer requests
- **Donate** (`/donate`) - Alternative donation page (legacy)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **Database:** Firebase Firestore
- **Payment:** Razorpay (India)
- **Icons:** React Icons

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Get your Firebase configuration
4. Update `.env.local` with your Firebase credentials

### 3. Configure Razorpay

1. Create a Razorpay account at [https://razorpay.com](https://razorpay.com)
2. Get your API keys from the dashboard
3. Update `.env.local` with your Razorpay credentials

### 4. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Razorpay Configuration
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 5. Firestore Collections

The app uses these Firestore collections:

- **donations** - Stores donation records
  - amount (number)
  - purpose (string: tithes, offering, charity, building)
  - donorName (string)
  - email (string)
  - anonymous (boolean)
  - paymentId (string)
  - createdAt (timestamp)

- **prayerRequests** - Stores prayer requests
  - name (string)
  - email (string, optional)
  - request (string)
  - createdAt (timestamp)

- **contactMessages** - Stores contact form submissions
  - name (string)
  - email (string)
  - phone (string, optional)
  - message (string)
  - createdAt (timestamp)

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 7. Build for Production

```bash
npm run build
npm start
```

## Site Structure

### Navigation
- Home | About | Ministries | Events | Watch | Contact | Give

### Hero CTAs
- Give Online
- Watch Online
- Get Directions

### Key Sections
- Service Timings
- Ministry Highlights
- Upcoming Events
- Leadership
- Beliefs

## Customization

### Update Church Information

1. **Church Name & Logo:** Edit `components/Header.tsx`
2. **Contact Details:** Update `components/Footer.tsx` and `app/contact/page.tsx`
3. **Service Timings:** Modify `app/page.tsx`
4. **Events:** Update `app/events/page.tsx`
5. **Ministries:** Edit `app/ministries/page.tsx`
6. **About Content:** Update `app/about/page.tsx`
7. **Leadership:** Edit leadership section in `app/about/page.tsx`
8. **Sermons:** Update video IDs in `app/watch/page.tsx`

### Styling

All styles use Tailwind CSS. The color scheme uses blue tones for a peaceful, trustworthy feel. Modify colors in component files.

## Security Best Practices

- ✅ Environment variables for sensitive keys
- ✅ Client-side validation
- ✅ Razorpay secure checkout
- ✅ Firebase security rules (configure in Firebase Console)
- ✅ No secret keys exposed to client
- ✅ TypeScript strict mode

## Firebase Security Rules

Add these rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /donations/{document} {
      allow read: if false;
      allow create: if request.resource.data.keys().hasAll(['amount', 'purpose', 'paymentId', 'createdAt'])
                    && request.resource.data.amount is number
                    && request.resource.data.amount > 0;
    }
    
    match /prayerRequests/{document} {
      allow read: if false;
      allow create: if request.resource.data.keys().hasAll(['name', 'request', 'createdAt']);
    }
    
    match /contactMessages/{document} {
      allow read: if false;
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'message', 'createdAt']);
    }
  }
}
```

## Deployment

Deploy to Vercel:

```bash
npm install -g vercel
vercel
```

Or use the Vercel dashboard to import your GitHub repository.

## Testing Donations

Use Razorpay test cards:

- **Card Number:** 4111 1111 1111 1111
- **Expiry:** Any future date
- **CVV:** 123
- **OTP:** 123456 (for test mode)

## Project Structure

```
church-donation/
├── app/                    # Next.js pages
│   ├── about/
│   ├── contact/
│   ├── donate/
│   ├── events/
│   ├── give/
│   ├── ministries/
│   ├── prayer-request/
│   ├── watch/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/             # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── DonateButton.tsx
├── lib/                    # Utilities
│   └── firebase.ts
├── types/                  # TypeScript types
│   └── index.ts
├── public/                 # Static assets
└── .env.local             # Environment variables
```

## Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - 5-minute quick start guide
- **[GETTING_STARTED.md](GETTING_STARTED.md)** - Complete setup checklist
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed configuration
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Deployment guide
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Code organization
- **[FEATURES.md](FEATURES.md)** - Feature documentation
- **[DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)** - Documentation guide

## Support

For issues or questions, contact: info@gracechurch.in

## License

This project is for Grace Church. All rights reserved.
