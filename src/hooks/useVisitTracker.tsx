import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVisitTracker = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Only track once per session
        const hasTracked = sessionStorage.getItem('visit-tracked');
        if (hasTracked) return;

        const visitData = {
          pagePath: window.location.pathname,
          referrer: document.referrer || null,
          userAgent: navigator.userAgent
        };

        const { error } = await supabase.functions.invoke('track-visit', {
          body: visitData
        });

        if (error) {
          console.error('Failed to track visit:', error);
        } else {
          sessionStorage.setItem('visit-tracked', 'true');
        }
      } catch (error) {
        console.error('Visit tracking error:', error);
      }
    };

    // Track the visit after a short delay to avoid impacting page load
    const timeoutId = setTimeout(trackVisit, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
};