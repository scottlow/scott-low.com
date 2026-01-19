'use client';

import { useEffect } from 'react';

export default function FootnoteHandler() {
  useEffect(() => {
    function hashchange() {
      let hash: string | undefined;

      try {
        hash = decodeURIComponent(location.hash.slice(1)).toLowerCase();
      } catch {
        return;
      }

      if (!hash) return;

      const name = 'user-content-' + hash;
      const target =
        document.getElementById(name) || document.getElementsByName(name)[0];

      if (target) {
        setTimeout(function () {
          target.scrollIntoView();
        }, 0);
      }
    }

    function handleClick(event: MouseEvent) {
      if (
        event.target &&
        event.target instanceof HTMLAnchorElement &&
        event.target.href === location.href &&
        location.hash.length > 1
      ) {
        setTimeout(function () {
          if (!event.defaultPrevented) {
            hashchange();
          }
        }, 0);
      }
    }

    // Handle initial page load with hash
    hashchange();

    // Handle hash changes
    window.addEventListener('hashchange', hashchange);

    // Handle clicks on anchors already at current URL
    document.addEventListener('click', handleClick, false);

    return () => {
      window.removeEventListener('hashchange', hashchange);
      document.removeEventListener('click', handleClick, false);
    };
  }, []);

  return null;
}
