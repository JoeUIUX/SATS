// src/components/FontLoader/FontLoader.tsx
import React, { useEffect, useState } from 'react';

interface FontLoaderProps {
  fontFamily?: string;
}

const FontLoader: React.FC<FontLoaderProps> = ({ fontFamily = 'System Default' }) => {
  // state to track loaded fonts and force re-renders when needed
  const [loadedFonts, setLoadedFonts] = useState<string[]>([]);

  useEffect(() => {
    // Font loading logic - only load non-system fonts
    const loadFonts = async () => {
      // Map of font names to Google Fonts URLs
      const fontUrls: Record<string, string> = {
        'Roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        'Open Sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
        'Montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap',
        'Source Code Pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600&display=swap'
      };

      // Extract the base font name from the fontFamily string
      const baseFontName = fontFamily.split(',')[0].trim().replace(/["']/g, '');
      
      // Skip loading for system default
      if (baseFontName === 'Arial' || baseFontName === 'System Default') {
        return;
      }

      // Find matching font URL
      let fontUrl = '';
      for (const [fontName, url] of Object.entries(fontUrls)) {
        if (baseFontName.includes(fontName) || fontName.includes(baseFontName)) {
          fontUrl = url;
          break;
        }
      }

      if (!fontUrl) return;

      // Add the font link to the document head if not already loaded
      if (!loadedFonts.includes(baseFontName)) {
        const link = document.createElement('link');
        link.href = fontUrl;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        
        // Update loaded fonts state
        setLoadedFonts(prev => [...prev, baseFontName]);
        
        console.log(`Loaded font: ${baseFontName}`);
      }

      // Add a specific style element for this font to force the preview to update
      const styleId = `font-preview-style-${baseFontName.replace(/\s+/g, '-')}`;
      let styleEl = document.getElementById(styleId);
      
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
      }
      
      styleEl.textContent = `
        .font-preview-${baseFontName.replace(/\s+/g, '-')} {
          font-family: ${fontFamily} !important;
        }
      `;
    };

    loadFonts();
    
    // Force a re-render with setTimeout to ensure the font has loaded
    const forceUpdateTimer = setTimeout(() => {
      // This empty function will trigger a re-render due to the useEffect dependency
      setLoadedFonts(prev => [...prev]);
    }, 100);
    
    return () => clearTimeout(forceUpdateTimer);
  }, [fontFamily, loadedFonts]); // Add loadedFonts as a dependency

  // This component doesn't render anything visible
  return null;
};

export default FontLoader;