import { atom } from 'nanostores';

export const isMobile = atom(false);
export const gridMode = atom(false);

// Initialize mobile detection
if (typeof window !== 'undefined') {
  // Set initial values based on window size
  isMobile.set(window.innerWidth < 768);
  
  // Retrieve gridMode from localStorage
  const savedGridMode = localStorage.getItem('gridMode');
  if (savedGridMode !== null) {
    gridMode.set(savedGridMode === 'true');
  }
  
  // Listen for window resize
  window.addEventListener('resize', () => {
    isMobile.set(window.innerWidth < 768);
  });
  
  // Save gridMode to localStorage when it changes
  gridMode.subscribe((value) => {
    localStorage.setItem('gridMode', String(value));
  });
}