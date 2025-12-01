import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "./homepage/navbar";
import WebFooter from "./homepage/footer";
import Loading from "./loading";
import { Suspense } from "react";
import { AppProvider } from "./providers";
import { ProvidersQuery } from "./protvidersquery";
import { App } from "antd";
import { ToastContainer } from "react-toastify";
import CartFloatButton from "./e-store/productdetails/components/CartFloatButton";
import DiwaliAnimation from "./DiwaliAnimation";
import DhanTeras from "./DhanTeras";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Buy Authentic Ayurvedic Medicine Online | ArogyaMission",
  description:
    "Shop 100% natural Ayurvedic products for diabetes, weight loss & immunity. Get online doctor consultations, health advisor MLM opportunities & Ayurvedic remedies.",
  keywords: [
    "Buy Ayurvedic medicine online",
    "Best Ayurvedic products",
    "Authentic Ayurveda store",
    "Ayurvedic treatment",
    "Natural Ayurvedic remedies",
    "Online Ayurvedic doctor consultation",
    "Ayurvedic doctor near me",
    "Best Ayurvedic prescription",
    "Personalized Ayurvedic treatment",
    "Ayurvedic health advisor",
    "Ayurvedic MLM business opportunity",
    "Join Ayurvedic network marketing",
    "Health advisor training program",
    "Earn with Ayurveda products",
    "Best Ayurvedic affiliate program",
    "Ayurvedic medicine for diabetes",
    "Natural cure for arthritis",
    "Ayurvedic treatment for weight loss",
    "Best Ayurvedic medicine for digestion",
    "Ayurvedic remedies for skin problems",
    "Buy Ayurvedic supplements online",
    "Herbal medicine for immunity",
    "Organic Ayurvedic products",
    "Best Ayurvedic oil for pain relief",
    "Ayurvedic hair care products",
    "Ayurvedic lifestyle tips",
    "Benefits of Ayurvedic herbs",
    "Ayurveda for daily wellness",
    "How Ayurveda improves digestion",
    "Ayurvedic detox methods",
    "Best Ayurvedic YouTube channels",
    "Ayurvedic home remedies videos",
    "Learn Ayurveda online free",
    "Ayurvedic cooking recipes",
    "Ayurvedic wellness tips",
    "Best Ayurvedic store in India",
    "Ayurvedic clinic near me",
    "Buy Ayurvedic products in India",
    "Trusted Ayurvedic brand",
    "Ayurvedic wholesaler supplier",
    "How to use Ayurvedic medicine",
    "Side effects of Ayurvedic treatment",
    "Best time to take Ayurvedic medicine",
    "Difference between Ayurveda and allopathy",
    "Scientific research on Ayurveda",
    "Ayurvedic immunity booster for winter",
    "Best Ayurvedic medicine for summer",
    "Ayurvedic detox for monsoon",
    "Ayurvedic skincare for dry skin",
    "Ayurvedic stress relief techniques",
    "ArogyaMission Ayurveda",
  ].join(", "),
  openGraph: {
    title: "Buy Authentic Ayurvedic Medicine Online | ArogyaMission",
    description:
      "Shop 100% natural Ayurvedic products with doctor consultations & MLM opportunities",
    url: "https://www.arogyamission.com",
    siteName: "ArogyaMission",
    images: [{ url: "/favicon.ico" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Authentic Ayurvedic Medicine Online | ArogyaMission",
    description: "Trusted Ayurvedic products with doctor consultations",
    // images: ['https://www.arogyamission.com/twitter-card.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Data Layer Initialization */}
        <Script
          id="data-layer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];`,
          }}
        />

        {/* Google Tag Manager - HEAD */}
        <Script
          id="google-tag-manager-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N52ZGL98');`,
          }}
        />

        {/* Add the Google Site Verification meta tag here */}
        <meta
          name="google-site-verification"
          content="jIW9R-o7pHBGUj31MAGfUP4F0S8DCkCSMZTNipBtxHc"
        />
        <meta
          name="facebook-domain-verification"
          content="u4xqxnpcpqfbror3lr8bj4p3i29etw"
        />

        <meta name="msvalidate.01" content="FF7D4BE23FED2252CF5F54EBB4AD0009" />

        {/* Google Tag Manager - Global site tag (gtag.js) */}
        {/* Note: Running both GTM and gtag.js directly can cause issues.
         * It's recommended to manage GA4 through GTM.
         * If you must use both, ensure they don't conflict. */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-WX1P5M5VMJ`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WX1P5M5VMJ');
            `,
          }}
        />

        {/* Microsoft Clarity Tracking Code */}
        <Script
          id="clarity-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "r4fnijjpko");
            `,
          }}
        />

        {/* Hotjar/Contentsquare */}
        <Script id="hotjar-contentsquare" strategy="afterInteractive">
          {`
            (function (c, s, q, u, a, r, e) {
                c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
                c._hjSettings = { hjid: a };
                r = s.getElementsByTagName('head')[0];
                e = s.createElement('script');
                e.async = true;
                e.src = q + c._hjSettings.hjid + u;
                r.appendChild(e);
            })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 6384547);
          `}
        </Script>

        {/* Meta Pixel Code - First Pixel */}
        {/* <Script
          id="fb-pixel-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1021785883240665');
              fbq('track', 'PageView');
            `,
          }}
        /> */}
        {/* <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1021785883240665&ev=PageView&noscript=1"
          />
        </noscript> */}

        {/* Meta Pixel Code - Second Pixel */}
        {/* <Script
          id="fb-pixel-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1485550789085479');
              fbq('track', 'PageView');
            `,
          }}
        /> */}
        {/* <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1485550789085479&ev=PageView&noscript=1"
          />
        </noscript> */}

        {/* Meta Pixel */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '230341233251224');
              fbq('track', 'PageView');
            `,
          }}
        /> */}
        {/* NoScript Image Tag */}
        {/* <noscript>
          <image 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=230341233251224&ev=PageView&noscript=1`}
            alt="Meta Pixel"
          />
        </noscript> */}

        {/* new Meta Pixel 21 november 2025 */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1506585217294169');
      fbq('track', 'PageView');
    `,
          }}
        />

        <noscript
          dangerouslySetInnerHTML={{
            __html: `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1506585217294169&ev=PageView&noscript=1"/>
    `,
          }}
        />

        {/*End Meta Pixel Code  */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) - BODY */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N52ZGL98"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <App>
          <ToastContainer />
          <ProvidersQuery>
            <AppProvider>
              {/* <DiwaliAnimation />
              <DhanTeras /> */}
              <NavBar />
              <Suspense fallback={<Loading />}>
                {children}
                <CartFloatButton />
              </Suspense>
            </AppProvider>
          </ProvidersQuery>

          <WebFooter />
        </App>
      </body>
    </html>
  );
}
