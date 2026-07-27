import { useEffect, useRef, RefObject } from 'react';

interface SpotlightOptions {
  size?: number;
  intensity?: number;
  color?: string;
  disabled?: boolean;
}

/**
 * Windows Reveal/Spotlight Effect Hook
 * Creates a smooth radial gradient that follows the cursor on hover
 * 
 * @param options - Customization options for the spotlight effect
 * @returns ref - Attach this ref to the element you want to add the effect to
 */
export function useSpotlightEffect<T extends HTMLElement>(
  options: SpotlightOptions = {}
): RefObject<T> {
  const elementRef = useRef<T>(null);
  const {
    size = 200,
    intensity = 0.2,
    color = '255, 255, 255',
    disabled = false
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || disabled) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;

      // Cancel any pending animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Use requestAnimationFrame for smooth performance
      animationFrameId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update CSS custom properties
        element.style.setProperty('--spotlight-x', `${x}px`);
        element.style.setProperty('--spotlight-y', `${y}px`);
        element.style.setProperty('--spotlight-size', `${size}px`);
        element.style.setProperty('--spotlight-intensity', `${intensity}`);
        element.style.setProperty('--spotlight-color', color);
      });
    };

    const handleMouseEnter = () => {
      isHovering = true;
      element.classList.add('spotlight-active');
    };

    const handleMouseLeave = () => {
      isHovering = false;
      element.classList.remove('spotlight-active');
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };

    // Add event listeners
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [size, intensity, color, disabled]);

  return elementRef;
}

/**
 * Adds the spotlight effect to every element matching `selector`.
 *
 * Returns a disposer that must be called on unmount — otherwise the pointer
 * listeners outlive the elements they were bound to.
 *
 * Skipped entirely on coarse-pointer (touch) devices, where a cursor-follow
 * effect can never fire and would only cost listeners.
 */
export function initializeSpotlightEffects(
  selector: string = '.spotlight-effect',
  options: SpotlightOptions = {}
): () => void {
  const noop = () => { };

  const {
    size = 200,
    intensity = 0.2,
    color = '255, 255, 255'
  } = options;

  if (typeof window === 'undefined') return noop;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return noop;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return noop;

  const elements = document.querySelectorAll<HTMLElement>(selector);
  const disposers: Array<() => void> = [];

  elements.forEach((element) => {
    let animationFrameId = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering || animationFrameId) return;

      // One update per frame; extra moves within the same frame are dropped
      // rather than queued, so fast cursors can't back up the rAF queue.
      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = 0;
        const rect = element.getBoundingClientRect();
        element.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
        element.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
      });
    };

    const handleMouseEnter = () => {
      isHovering = true;
      element.classList.add('spotlight-active');
    };

    const handleMouseLeave = () => {
      isHovering = false;
      element.classList.remove('spotlight-active');
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    };

    // Static values are written once instead of on every pointer move.
    element.classList.add('spotlight-effect');
    element.style.setProperty('--spotlight-size', `${size}px`);
    element.style.setProperty('--spotlight-intensity', `${intensity}`);
    element.style.setProperty('--spotlight-color', color);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);

    disposers.push(() => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    });
  });

  return () => disposers.forEach((dispose) => dispose());
}
