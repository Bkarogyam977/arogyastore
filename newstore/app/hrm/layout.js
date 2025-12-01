
// export default function HrmLayout({ children }) {
//     return (
//         <html lang="en">
//         <body>
//             <main>{children}</main> {/* Render the specific page content here */}
//         </body>
//         </html>
//     );
// }




// app/hrm/layout.js
'use client';
import { useEffect } from 'react';

export default function HrmLayout({ children }) {
  useEffect(() => {
    // Elements to hide by ID
    const elements = [
      '#scrollable-navbar',
      '#header-menu',
      'header',       // General header
      'footer',
                // General footer
    ];

    elements.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) el.style.display = 'none';
    });

    return () => {
      // Optional: Restore on unmount if needed
      elements.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.style.display = '';
      });
    };
  }, []);

  return <>{children}</>;
}

