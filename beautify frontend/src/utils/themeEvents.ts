// src/utils/themeEvents.ts
// Custom event system for theme changes

/**
 * Event types for theme changes
 */
export const THEME_EVENTS = {
    THEME_CHANGED: 'theme-changed',
    SETTINGS_UPDATED: 'theme-settings-updated'
  };
  
  /**
   * Dispatch a theme change event
   * @param isDarkMode Whether dark mode is active
   */
  export function dispatchThemeChangedEvent(isDarkMode: boolean): void {
    const event = new CustomEvent(THEME_EVENTS.THEME_CHANGED, {
      detail: { isDarkMode }
    });
    
    window.dispatchEvent(event);
    console.log(`Theme changed event dispatched: isDarkMode=${isDarkMode}`);
  }
  
  /**
   * Dispatch an event when theme settings are updated
   * @param settings The updated settings
   */
  export function dispatchSettingsUpdatedEvent(settings: any): void {
    const event = new CustomEvent(THEME_EVENTS.SETTINGS_UPDATED, {
      detail: { settings }
    });
    
    window.dispatchEvent(event);
    console.log('Theme settings updated event dispatched');
  }
  
  /**
   * Listen for theme change events
   * @param callback Function to call when theme changes
   * @returns A function to remove the listener
   */
  export function onThemeChanged(callback: (isDarkMode: boolean) => void): () => void {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent;
      callback(customEvent.detail.isDarkMode);
    };
    
    window.addEventListener(THEME_EVENTS.THEME_CHANGED, handler);
    
    // Return a cleanup function
    return () => {
      window.removeEventListener(THEME_EVENTS.THEME_CHANGED, handler);
    };
  }
  
  /**
   * Listen for theme settings update events
   * @param callback Function to call when settings are updated
   * @returns A function to remove the listener
   */
  export function onSettingsUpdated(callback: (settings: any) => void): () => void {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent;
      callback(customEvent.detail.settings);
    };
    
    window.addEventListener(THEME_EVENTS.SETTINGS_UPDATED, handler);
    
    // Return a cleanup function
    return () => {
      window.removeEventListener(THEME_EVENTS.SETTINGS_UPDATED, handler);
    };
  }