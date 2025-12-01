
// app/login/layout.js
'use client';
import { useEffect } from 'react';

export default function LoginLayout({ children }) {
  useEffect(() => {
    // Elements to hide by ID
    const elements = [
      '#scrollable-navbar',
      '#header-menu',
      'header',       // General header
      'footer'        // General footer
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
