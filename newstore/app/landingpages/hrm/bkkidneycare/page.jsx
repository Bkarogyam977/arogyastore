import React from "react";
import Allcode from "./allcode";
import Chat from "./chat";
import Consultaion from "./consultation";
import Script from "next/script";

function Page() {
  return (
    <div>
      {/* ✅ Facebook Meta Pixel Code */}
      <Script
        id="fb-pixel-script"
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
            fbq('init', '1790816261451048');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* ✅ NoScript fallback (for users without JS) */}
      <noscript>
        <image
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1790816261451048&ev=PageView&noscript=1"
          alt="fb-pixel"
        />
      </noscript>

      {/* Page Components */}
      <Allcode />
      <Chat />
      <Consultaion />
    </div>
  );
}

export default Page;
