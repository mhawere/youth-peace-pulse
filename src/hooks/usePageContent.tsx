import { useState, useCallback, useMemo } from 'react';

// Centralized content management to replace excessive useState calls
interface PageContent {
  [key: string]: string;
}

const DEFAULT_CONTENT: Record<string, PageContent> = {
  index: {
    missionText: "To empower and support youth and their communities to foster peace, sustainability, and prosperity—through diplomacy, advocacy, climate action, interfaith cooperation, education, and community service.",
    visionText: "A world where youth are supported, empowered, and engaged to create a peaceful, sustainable, and prosperous future for themselves and their communities.",
    ctaTitle: "Ready to Make a Difference?",
    ctaDescription: "Join thousands of young changemakers worldwide. Whether you want to volunteer, start a program, or partner with us—there's a place for you in the Y-Peace movement.",
    missionSectionTitle: "Our Mission & Vision",
    youthCardTitle: "Youth-Powered Movement",
    youthCardDescription: "Driven by young leaders who understand tomorrow's challenges today.",
    globalCardTitle: "Global Impact",
    globalCardDescription: "Connecting local solutions with global resources for maximum impact.",
    actionCardTitle: "Action-Oriented",
    actionCardDescription: "We don't just advocate—we activate and create tangible change.",
    storiesTitle: "Stories of Impact",
    storiesSubtitle: "Meet the young changemakers transforming communities around the world",
    kenyaTitle: "Climate Action in Kenya",
    kenyaQuote: "Through Y-Peace, we planted over 10,000 trees and educated 500+ youth about climate change in our community.",
    colombiaTitle: "Peace Building in Colombia",
    colombiaQuote: "Our interfaith dialogue program brought together 200 youth from different backgrounds to build lasting peace.",
    indiaTitle: "Digital Skills in India",
    indiaQuote: "We trained 300+ women in digital skills, helping them start their own online businesses and achieve financial independence."
  }
};

export const usePageContent = (pageKey: string) => {
  const [content, setContent] = useState<PageContent>(
    () => DEFAULT_CONTENT[pageKey] || {}
  );

  const updateContent = useCallback((key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  }, []);

  const getContent = useCallback((key: string, fallback: string = '') => {
    return content[key] || fallback;
  }, [content]);

  const memoizedContent = useMemo(() => content, [content]);

  return {
    content: memoizedContent,
    updateContent,
    getContent
  };
};