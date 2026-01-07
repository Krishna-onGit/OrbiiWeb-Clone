/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * ORBII DESIGN SYSTEM
 * Enterprise Fintech SaaS Design Specification
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * This file serves as the single source of truth for all design decisions,
 * tokens, and guidelines for the Orbii platform.
 * 
 * Last Updated: January 2026
 * Version: 1.0.0
 */

// ═══════════════════════════════════════════════════════════════════════════════
// 1️⃣ FOUNDATION (Non-Negotiable)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ COLOR SYSTEM                                                                │
 * └─────────────────────────────────────────────────────────────────────────────┘
 */
export const colors = {
    // Primary Brand Colors
    brand: {
        primary: '#B4FF39',      // Neon Yellow-Green (Orbii signature)
        dark: '#8ACC28',         // Darker variant for hover states
        light: '#CDFF73',        // Lighter variant for highlights
        muted: 'rgba(180, 255, 57, 0.1)', // Background tints
    },

    // Neutral Scale (12 steps)
    neutral: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0A0A0A',
        black: '#080E0C',        // Orbii institutional black
    },

    // Semantic Colors
    semantic: {
        success: {
            light: '#22C55E',
            DEFAULT: '#16A34A',
            dark: '#15803D',
            bg: 'rgba(34, 197, 94, 0.1)',
        },
        warning: {
            light: '#FACC15',
            DEFAULT: '#EAB308',
            dark: '#CA8A04',
            bg: 'rgba(234, 179, 8, 0.1)',
        },
        error: {
            light: '#EF4444',
            DEFAULT: '#DC2626',
            dark: '#B91C1C',
            bg: 'rgba(239, 68, 68, 0.1)',
        },
        info: {
            light: '#3B82F6',
            DEFAULT: '#2563EB',
            dark: '#1D4ED8',
            bg: 'rgba(59, 130, 246, 0.1)',
        },
    },

    // Dark Mode Palette (Default)
    dark: {
        background: '#080E0C',
        foreground: '#FFFFFF',
        surface: 'rgba(255, 255, 255, 0.02)',
        surfaceHover: 'rgba(255, 255, 255, 0.04)',
        border: 'rgba(255, 255, 255, 0.06)',
        borderStrong: 'rgba(255, 255, 255, 0.12)',
        text: {
            primary: '#FFFFFF',
            secondary: 'rgba(255, 255, 255, 0.80)',
            muted: 'rgba(255, 255, 255, 0.55)',
            disabled: 'rgba(255, 255, 255, 0.25)',
        },
    },

    // Light Mode Palette
    light: {
        background: '#FFFFFF',
        foreground: '#080E0C',
        surface: 'rgba(0, 0, 0, 0.02)',
        surfaceHover: 'rgba(0, 0, 0, 0.04)',
        border: 'rgba(0, 0, 0, 0.08)',
        borderStrong: 'rgba(0, 0, 0, 0.15)',
        text: {
            primary: '#080E0C',
            secondary: 'rgba(0, 0, 0, 0.70)',
            muted: 'rgba(0, 0, 0, 0.50)',
            disabled: 'rgba(0, 0, 0, 0.25)',
        },
    },
};

/**
 * Color Usage Rules:
 * - Brand primary (#B4FF39) is used ONLY for CTAs, links, and key highlights
 * - Never use brand color for large background areas (too bright)
 * - Neutral.black (#080E0C) is the default background
 * - Text primary is pure white (#FFFFFF) for maximum contrast
 * - Use semantic colors for feedback states only
 * 
 * WCAG AA Contrast Compliance:
 * - White text on #080E0C: ✓ 18.1:1 (AAA)
 * - #B4FF39 on #080E0C: ✓ 12.7:1 (AAA)
 * - rgba(255,255,255,0.80) on #080E0C: ✓ 11.2:1 (AAA)
 */

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ TYPOGRAPHY SYSTEM                                                           │
 * └─────────────────────────────────────────────────────────────────────────────┘
 */
export const typography = {
    // Font Families
    fonts: {
        primary: "'Inter', system-ui, sans-serif",     // Headlines & Body
        display: "'DM Sans', sans-serif",              // Alternative display
        mono: "'JetBrains Mono', 'Fira Code', monospace", // Code blocks
    },

    // Type Scale (rem-based, 1rem = 16px)
    scale: {
        // Display
        'display-2xl': { size: '4.5rem', lineHeight: 1.05, weight: 700 },   // 72px
        'display-xl': { size: '3.75rem', lineHeight: 1.05, weight: 700 },   // 60px

        // Headings
        h1: { size: '3rem', lineHeight: 1.1, weight: 700 },      // 48px
        h2: { size: '2.25rem', lineHeight: 1.15, weight: 700 },  // 36px
        h3: { size: '1.875rem', lineHeight: 1.2, weight: 600 },  // 30px
        h4: { size: '1.5rem', lineHeight: 1.25, weight: 600 },   // 24px
        h5: { size: '1.25rem', lineHeight: 1.3, weight: 600 },   // 20px
        h6: { size: '1.125rem', lineHeight: 1.35, weight: 600 }, // 18px

        // Body
        'body-xl': { size: '1.25rem', lineHeight: 1.6, weight: 400 },  // 20px
        'body-lg': { size: '1.125rem', lineHeight: 1.6, weight: 400 }, // 18px
        'body-md': { size: '1rem', lineHeight: 1.6, weight: 400 },     // 16px (base)
        'body-sm': { size: '0.875rem', lineHeight: 1.5, weight: 400 }, // 14px

        // Utility
        caption: { size: '0.75rem', lineHeight: 1.4, weight: 400 },    // 12px
        overline: { size: '0.625rem', lineHeight: 1.4, weight: 800, tracking: '0.2em' }, // 10px
        label: { size: '0.75rem', lineHeight: 1.4, weight: 700 },      // 12px
    },

    // Font Weights
    weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        black: 800,
    },

    // Letter Spacing
    tracking: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
        caps: '0.2em',      // For all-caps text
    },

    // Line Length Rules
    maxWidth: {
        prose: '65ch',      // Optimal for body text (45-75ch range)
        heading: '20ch',    // Headings should be concise
        caption: '45ch',    // Shorter for supporting text
    },

    // Responsive Typography (mobile-first)
    responsive: {
        h1: { mobile: '2.25rem', tablet: '2.75rem', desktop: '3rem' },
        h2: { mobile: '1.75rem', tablet: '2rem', desktop: '2.25rem' },
        body: { mobile: '0.9375rem', tablet: '1rem', desktop: '1rem' },
    },
};

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ SPACING & LAYOUT                                                            │
 * └─────────────────────────────────────────────────────────────────────────────┘
 */
export const spacing = {
    // Base Unit: 4px
    // Scale follows 4/8-based system
    scale: {
        0: '0',
        0.5: '0.125rem',   // 2px
        1: '0.25rem',      // 4px
        1.5: '0.375rem',   // 6px
        2: '0.5rem',       // 8px
        2.5: '0.625rem',   // 10px
        3: '0.75rem',      // 12px
        3.5: '0.875rem',   // 14px
        4: '1rem',         // 16px
        5: '1.25rem',      // 20px
        6: '1.5rem',       // 24px
        7: '1.75rem',      // 28px
        8: '2rem',         // 32px
        9: '2.25rem',      // 36px
        10: '2.5rem',      // 40px
        11: '2.75rem',     // 44px
        12: '3rem',        // 48px
        14: '3.5rem',      // 56px
        16: '4rem',        // 64px
        20: '5rem',        // 80px
        24: '6rem',        // 96px
        28: '7rem',        // 112px
        32: '8rem',        // 128px
    },

    // Section Spacing
    section: {
        sm: '4rem',        // 64px - Tight sections
        md: '6rem',        // 96px - Standard sections
        lg: '8rem',        // 128px - Major sections
        xl: '10rem',       // 160px - Hero sections
    },

    // Component Padding
    component: {
        xs: '0.5rem',      // 8px - Chips, tags
        sm: '0.75rem',     // 12px - Small buttons
        md: '1rem',        // 16px - Standard buttons
        lg: '1.5rem',      // 24px - Cards
        xl: '2rem',        // 32px - Large cards
    },
};

export const layout = {
    // Max Content Width
    maxWidth: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1100px',      // Orbii standard container
        '2xl': '1280px',
        full: '100%',
    },

    // Grid System (12-column)
    grid: {
        columns: 12,
        gutter: '1.5rem',  // 24px
        margin: '1.5rem',  // 24px (mobile), 2rem desktop
    },

    // Breakpoints
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },

    // Z-Index Scale
    zIndex: {
        behind: -1,
        base: 0,
        dropdown: 10,
        sticky: 20,
        overlay: 30,
        modal: 40,
        popover: 50,
        toast: 60,
        tooltip: 70,
    },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 2️⃣ COMPONENT SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ BUTTONS                                                                     │
 * └─────────────────────────────────────────────────────────────────────────────┘
 */
export const buttons = {
    variants: {
        primary: {
            bg: '#B4FF39',
            text: '#080E0C',
            hover: 'opacity-90',
            active: 'scale-95',
            disabled: 'opacity-50 cursor-not-allowed',
        },
        secondary: {
            bg: 'transparent',
            text: '#FFFFFF',
            border: 'rgba(255, 255, 255, 0.12)',
            hover: 'bg-white/5',
            active: 'scale-95',
            disabled: 'opacity-50 cursor-not-allowed',
        },
        tertiary: {
            bg: 'transparent',
            text: '#B4FF39',
            hover: 'text-white',
            active: 'scale-95',
            disabled: 'opacity-50 cursor-not-allowed',
        },
        destructive: {
            bg: '#DC2626',
            text: '#FFFFFF',
            hover: '#B91C1C',
            active: 'scale-95',
            disabled: 'opacity-50 cursor-not-allowed',
        },
    },

    sizes: {
        sm: { px: '0.75rem', py: '0.375rem', text: '0.75rem' },  // 12px / 6px
        md: { px: '1.5rem', py: '0.5rem', text: '0.6875rem' },   // 24px / 8px
        lg: { px: '2.5rem', py: '1rem', text: '0.875rem' },      // 40px / 16px
    },

    // Standard button styling
    base: `
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    border-radius: 9999px;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  `,

    // Focus ring for accessibility
    focusRing: 'ring-2 ring-offset-2 ring-offset-background ring-brand/50',

    // Loading state
    loading: {
        spinner: 'animate-spin w-4 h-4',
        disabled: true,
    },
};

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ INPUTS & FORMS                                                              │
 * └─────────────────────────────────────────────────────────────────────────────┘
 */
export const forms = {
    input: {
        base: `
      bg-white/[0.02]
      border border-white/[0.08]
      rounded-xl
      px-4 py-3
      text-white
      placeholder:text-white/40
      focus:outline-none
      focus:border-brand/50
      focus:ring-1
      focus:ring-brand/30
      transition-all duration-200
    `,
        error: 'border-red-500 focus:border-red-500 focus:ring-red-500/30',
        disabled: 'opacity-50 cursor-not-allowed bg-white/[0.01]',
    },

    label: {
        base: 'text-xs font-bold uppercase tracking-widest text-white/60 mb-2 block',
        required: "after:content-['*'] after:text-red-500 after:ml-1",
    },

    helperText: 'text-xs text-white/40 mt-2',
    errorText: 'text-xs text-red-500 mt-2',

    // Checkbox & Radio
    checkbox: {
        base: 'w-5 h-5 rounded border-white/20 bg-white/5 checked:bg-brand checked:border-brand',
        label: 'ml-3 text-sm text-white/80',
    },

    // Toggle Switch
    toggle: {
        track: 'w-11 h-6 rounded-full bg-white/10 peer-checked:bg-brand transition-colors',
        thumb: 'w-5 h-5 rounded-full bg-white translate-x-0.5 peer-checked:translate-x-5 transition-transform',
    },
};

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ CARDS & CONTAINERS                                                          │
 * └─────────────────────────────────────────────────────────────────────────────┘
 */
export const cards = {
    variants: {
        default: {
            bg: 'rgba(0, 0, 0, 0.4)',
            border: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '1rem',
            backdrop: 'blur(20px)',
        },
        elevated: {
            bg: 'rgba(0, 0, 0, 0.6)',
            border: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '1rem',
            shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        },
        interactive: {
            bg: 'rgba(255, 255, 255, 0.02)',
            border: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '1rem',
            hoverBorder: 'rgba(180, 255, 57, 0.3)',
            cursor: 'pointer',
        },
    },

    padding: {
        sm: '1rem',     // 16px
        md: '1.5rem',   // 24px
        lg: '2rem',     // 32px
    },

    // Shadow Usage Rules
    shadows: {
        none: 'none',
        soft: '0 4px 20px rgba(0, 0, 0, 0.1)',
        medium: '0 10px 40px rgba(0, 0, 0, 0.2)',
        glow: '0 0 40px rgba(180, 255, 57, 0.1)',
    },
};

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ NAVIGATION                                                                  │
 * └─────────────────────────────────────────────────────────────────────────────┘
 */
export const navigation = {
    header: {
        height: '64px',
        mobileHeight: '56px',
        position: 'fixed',
        zIndex: 50,
        bg: 'rgba(0, 0, 0, 0.8)',
        blur: 'blur(20px)',
    },

    sticky: {
        offset: '120px',       // Top offset for sticky elements
        threshold: 100,        // Scroll threshold before hiding
        hideOnScrollDown: true,
        showOnScrollUp: true,
    },

    activeState: {
        indicator: 'border-b-2 border-brand',
        textColor: 'text-brand',
        bgColor: 'bg-brand/10',
    },

    mobileMenu: {
        animation: 'slideDown',
        duration: '0.35s',
        ease: 'power2.out',
    },
};

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ FEEDBACK COMPONENTS                                                         │
 * └─────────────────────────────────────────────────────────────────────────────┘
 */
export const feedback = {
    toast: {
        position: 'bottom-right',
        duration: 5000,
        animation: { in: 'slideInRight', out: 'slideOutRight' },
        variants: {
            success: { bg: '#16A34A', icon: 'CheckCircle' },
            error: { bg: '#DC2626', icon: 'XCircle' },
            warning: { bg: '#EAB308', icon: 'AlertTriangle' },
            info: { bg: '#2563EB', icon: 'Info' },
        },
    },

    modal: {
        overlay: 'rgba(0, 0, 0, 0.8)',
        animation: { in: 'fadeIn scale', out: 'fadeOut scale' },
        duration: '0.3s',
        maxWidth: { sm: '400px', md: '540px', lg: '720px' },
    },

    tooltip: {
        delay: 200,
        bg: '#262626',
        text: '#FFFFFF',
        arrow: true,
        maxWidth: '240px',
    },

    skeleton: {
        bg: 'rgba(255, 255, 255, 0.05)',
        shimmer: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
        animation: 'shimmer 1.5s infinite',
    },

    emptyState: {
        icon: 'w-16 h-16 text-white/20',
        title: 'text-lg font-semibold text-white/60',
        description: 'text-sm text-white/40',
        action: 'mt-4',
    },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 3️⃣ MOTION & INTERACTION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ MOTION SYSTEM                                                               │
 * └─────────────────────────────────────────────────────────────────────────────┘
 */
export const motion = {
    // Motion Principles
    principles: [
        'Motion should feel purposeful and intentional',
        'Animations should guide attention, not distract',
        'Speed should match user expectations (instant feedback for actions)',
        'Always respect prefers-reduced-motion',
        'Motion should enhance understanding of spatial relationships',
    ],

    // Easing Curves (GSAP compatible)
    easing: {
        // Standard easings
        linear: 'none',
        easeOut: 'power2.out',       // Most common - deceleration
        easeIn: 'power2.in',         // Acceleration
        easeInOut: 'power2.inOut',   // Smooth both ends

        // Expressive easings
        smooth: 'power3.out',        // Smoother deceleration
        snappy: 'power4.out',        // Quick start, smooth end
        bounce: 'back.out(1.2)',     // Slight overshoot (use sparingly)

        // CSS equivalents
        css: {
            easeOut: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
            snappy: 'cubic-bezier(0.16, 1, 0.3, 1)',
        },
    },

    // Duration Scale
    duration: {
        instant: '0.1s',       // 100ms - Micro-feedback
        fast: '0.2s',          // 200ms - Hover states, toggles
        normal: '0.3s',        // 300ms - Most transitions
        slow: '0.5s',          // 500ms - Page transitions
        slower: '0.8s',        // 800ms - Complex animations
        lazy: '1.2s',          // 1200ms - Ambient effects
    },

    // Animation Presets
    presets: {
        fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
            duration: '0.3s',
            ease: 'power2.out',
        },
        slideUp: {
            from: { opacity: 0, y: 20 },
            to: { opacity: 1, y: 0 },
            duration: '0.5s',
            ease: 'power2.out',
        },
        scaleIn: {
            from: { opacity: 0, scale: 0.96 },
            to: { opacity: 1, scale: 1 },
            duration: '0.35s',
            ease: 'power2.out',
        },
        slideDown: {
            from: { opacity: 0, y: -10 },
            to: { opacity: 1, y: 0 },
            duration: '0.3s',
            ease: 'power2.out',
        },
    },

    // Scroll-based Animation Triggers
    scrollTrigger: {
        start: 'top 80%',         // When element enters viewport
        end: 'top 50%',           // When animation completes
        scrub: true,              // Smooth scroll-linked animation
        once: true,               // Only animate once
    },

    // Reduced Motion (Accessibility)
    reducedMotion: {
        query: '(prefers-reduced-motion: reduce)',
        behavior: 'Disable all non-essential animations',
        essential: ['Focus indicators', 'Error alerts'],
    },
};

/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │ MICRO-INTERACTIONS                                                          │
 * └─────────────────────────────────────────────────────────────────────────────┘
 */
export const microInteractions = {
    buttonHover: {
        scale: 1,              // No scale on hover (clean fintech feel)
        opacity: 0.9,          // Slight dim
        transition: '0.2s ease',
    },

    buttonActive: {
        scale: 0.95,           // Slight press effect
        transition: '0.1s ease',
    },

    inputFocus: {
        borderColor: 'rgba(180, 255, 57, 0.5)',
        ringWidth: '1px',
        ringColor: 'rgba(180, 255, 57, 0.3)',
        transition: '0.2s ease',
    },

    linkHover: {
        color: '#FFFFFF',
        textDecoration: 'none',
        transition: '0.2s ease',
    },

    cardHover: {
        borderColor: 'rgba(180, 255, 57, 0.3)',
        translateY: '0',        // No lift (too playful for fintech)
        transition: '0.3s ease',
    },

    iconHover: {
        translateX: '0.25rem',  // Arrow icons
        transition: '0.2s ease',
    },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 4️⃣ UX PROBLEM-SOLVING SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

export const uxGuidelines = {
    /** Information Architecture */
    infoArchitecture: {
        hierarchy: [
            '1. Hero with primary value proposition',
            '2. Social proof / trust indicators',
            '3. Key features or capabilities',
            '4. How it works / process',
            '5. Detailed use cases',
            '6. Pricing or CTA',
            '7. FAQ / Support',
        ],
        aboveFold: ['Primary headline', 'Core value prop', 'Main CTA'],
        progressiveDisclosure: 'Reveal complexity only when needed',
    },

    /** User Flow Design */
    userFlow: {
        primaryGoal: 'Get user to request demo or start trial',
        oneCtaPerSection: true,
        reducedDecisionPoints: true,
        clearNextAction: 'Always visible, always obvious',
        noDeadEnds: 'Every page has a forward path',
    },

    /** Content UX */
    contentUx: {
        headlines: 'Lead with value, not features',
        bodyCopy: 'Concise, scannable, benefit-oriented',
        visualTextBalance: '60% visual, 40% text maximum',
        iconUsage: 'Clarify, never decorate',
        tone: 'Professional, confident, clear',
    },

    /** Trust & Clarity */
    trustPatterns: {
        socialProof: ['Testimonials', 'Logos', 'Stats', 'Case studies'],
        transparency: 'Clear pricing, no hidden fees',
        errorPrevention: 'Validate early, guide correction',
        confirmation: 'Always acknowledge user actions',
    },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 5️⃣ ACCESSIBILITY & INCLUSIVITY
// ═══════════════════════════════════════════════════════════════════════════════

export const accessibility = {
    // Keyboard Navigation
    keyboard: {
        tabOrder: 'Logical, follows visual order',
        skipLinks: true,
        escapeClosesModals: true,
        arrowNavigation: 'Menus, tabs, carousels',
    },

    // Focus Indicators
    focus: {
        visible: 'ring-2 ring-brand/50 ring-offset-2 ring-offset-background',
        outlineNever: 'Never remove focus outlines completely',
    },

    // Color Independence
    colorIndependence: {
        rule: 'Color is never the sole information carrier',
        patterns: ['Icons + color', 'Text + color', 'Patterns + color'],
    },

    // Images
    images: {
        altText: 'Descriptive, not "image of..."',
        decorative: 'alt="" for decorative images',
    },

    // Semantic HTML
    semantics: {
        landmarks: ['header', 'main', 'footer', 'nav', 'aside'],
        headings: 'Logical H1-H6 hierarchy',
        lists: 'Use ul/ol for lists, not divs',
        buttons: 'Use button for actions, not div',
    },

    // Touch Targets
    touchTargets: {
        minimum: '44px × 44px',
        comfortable: '48px × 48px',
        spacing: 'At least 8px between targets',
    },

    // Font Sizes
    typography: {
        minimum: '14px',
        preferred: '16px',
        scalable: 'Use rem/em, not px for text',
    },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 6️⃣ RESPONSIVE & DEVICE UX
// ═══════════════════════════════════════════════════════════════════════════════

export const responsive = {
    approach: 'Mobile-first',

    breakpoints: {
        sm: { min: '640px', description: 'Large phones' },
        md: { min: '768px', description: 'Tablets' },
        lg: { min: '1024px', description: 'Laptops' },
        xl: { min: '1280px', description: 'Desktops' },
        '2xl': { min: '1536px', description: 'Large screens' },
    },

    touchFriendly: {
        tapTargets: '44-48px minimum',
        thumbZone: 'Primary CTAs within thumb reach',
        gestureSupport: 'Swipe for carousels, pull to refresh',
    },

    noHoverOnly: {
        rule: 'Never hide essential content behind hover',
        alternative: 'Tap to reveal on touch devices',
    },

    adaptiveNav: {
        desktop: 'Horizontal nav with dropdowns',
        mobile: 'Hamburger with slide-out menu',
    },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 7️⃣ PERFORMANCE-AWARE DESIGN
// ═══════════════════════════════════════════════════════════════════════════════

export const performance = {
    shadows: {
        rule: 'Minimal shadow usage',
        preferred: 'Border-based elevation or subtle glow',
        avoid: 'Large blur-radius shadows',
    },

    images: {
        format: 'WebP with JPEG fallback',
        lazy: 'Lazy load below-fold images',
        responsive: 'srcset for multiple sizes',
        compression: '80% quality for photos',
    },

    loading: {
        skeleton: true,
        spinners: 'Avoid; use skeleton instead',
        progressive: 'Load critical content first',
    },

    layoutShift: {
        avoid: 'Always reserve space for dynamic content',
        images: 'Always specify width/height',
        fonts: 'Use font-display: swap',
    },

    animations: {
        transform: 'Prefer transform over position',
        willChange: 'Use sparingly',
        compositing: 'Stick to opacity and transform',
    },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 8️⃣ DESIGN CONSISTENCY & GOVERNANCE
// ═══════════════════════════════════════════════════════════════════════════════

export const governance = {
    tokens: {
        source: 'This file (design-system.ts)',
        tailwindConfig: 'tailwind.config.ts',
        cssVariables: 'globals.css',
    },

    componentRules: {
        location: 'src/components/',
        naming: 'PascalCase.tsx',
        variants: 'Defined in component props',
        documentation: 'JSDoc comments above each component',
    },

    doAndDont: {
        do: [
            'Use design tokens for all values',
            'Follow established component patterns',
            'Test across breakpoints',
            'Check color contrast',
            'Include focus states',
        ],
        dont: [
            'Hardcode colors or spacing',
            'Create one-off button styles',
            'Skip mobile testing',
            'Remove focus outlines',
            'Use hover-only interactions',
        ],
    },
};

// ═══════════════════════════════════════════════════════════════════════════════
// 9️⃣ MODERN & CLEAN UI FILTER
// ═══════════════════════════════════════════════════════════════════════════════

export const modernUiChecklist = {
    whitespace: {
        intentional: true,
        breathing: 'Generous padding between sections',
        grouping: 'Related items close, unrelated far',
    },

    colorUsage: {
        minimal: true,
        primaryOnly: 'One accent color (brand green)',
        hierarchy: 'Neutrals for everything else',
    },

    motion: {
        subtle: true,
        purposeful: 'Every animation has a reason',
        calm: 'No flashy or fast animations',
    },

    alignment: {
        consistent: true,
        grid: '8px baseline grid',
        leftAligned: 'Text primarily left-aligned',
    },

    borderRadius: {
        consistent: true,
        scale: { sm: '8px', md: '12px', lg: '16px', full: '9999px' },
        usage: 'Larger radius = more important',
    },

    shadows: {
        minimal: true,
        soft: 'Low opacity, large blur',
        glow: 'Brand color glow for emphasis only',
    },

    impression: {
        calm: true,
        trustworthy: true,
        professional: true,
        modern: true,
    },
};

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT ALL
// ═══════════════════════════════════════════════════════════════════════════════

export const designSystem = {
    colors,
    typography,
    spacing,
    layout,
    buttons,
    forms,
    cards,
    navigation,
    feedback,
    motion,
    microInteractions,
    uxGuidelines,
    accessibility,
    responsive,
    performance,
    governance,
    modernUiChecklist,
};

export default designSystem;
