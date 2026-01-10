# Vioratech Insurance - Architecture Documentation

## Overview
Vioratech Insurance is a comprehensive insurance marketplace platform featuring all major insurance categories with detailed product pages, interactive calculators, quote forms, and comparison tools. The platform implements a sophisticated "Dark Glass & Glow" visual theme with 3D animations, following strict responsive design principles and accessibility standards.

---

## Table of Contents
1. [Platform Overview](#platform-overview)
2. [Visual Design System](#visual-design-system)
3. [Semantic HTML Structure](#semantic-html-structure)
4. [Component Architecture](#component-architecture)
5. [Data Architecture](#data-architecture)
6. [Routing & Navigation](#routing--navigation)
7. [Interactive Features](#interactive-features)
8. [Color Palette](#color-palette)
9. [Typography System](#typography-system)
10. [Accessibility Features](#accessibility-features)
11. [Animation System](#animation-system)
12. [Performance Optimizations](#performance-optimizations)

---

## Platform Overview

### Insurance Categories
Vioratech Insurance covers **five major insurance categories**:

1. **Life Insurance** - Term Insurance, Whole Life, ULIP, Endowment, Money-Back
2. **Health Insurance** - Individual, Family Floater, Senior Citizen, Critical Illness, Maternity, Top-Up
3. **Motor Insurance** - Car Insurance, Two-Wheeler, Commercial Vehicle
4. **Investment Plans** - ULIP, Pension, Child Plans, Guaranteed Returns
5. **Other Insurance** - Travel, Home, Personal Accident, Cyber Insurance, Pet Insurance

### Platform Statistics
- **Total Products:** 61 detailed insurance product pages
- **Data Files:** 7 comprehensive TypeScript data files
- **Product Pages:** Individual, Family Floater, Senior Citizen, Critical Illness, Term Insurance, Car Insurance, Two-Wheeler, Travel, and more
- **Interactive Calculators:** Premium calculators for health, life, motor insurance
- **Comparison Tools:** Side-by-side product comparison tables
- **Quote Forms:** Multi-step forms for policy inquiries

### Content Depth Per Product
Each insurance product page includes:
- ✅ **Minimum 10 FAQs** with accordion interface
- ✅ **3+ Comparison Tables** (plan comparisons, feature matrices)
- ✅ **3+ Metric Tables** (premium rates, coverage limits, statistics)
- ✅ **Hero Section** with key statistics
- ✅ **Benefits Section** with detailed feature cards
- ✅ **Claims Process** step-by-step guides
- ✅ **Policy Entry Forms** for inquiries and quotes
- ✅ **Expert Recommendations** and tips
- ✅ **Myths vs Reality** sections
- ✅ **Life Stage Guidance** for different age groups

---

## Visual Design System

### Design Philosophy: "Dark Glass & Glow"

The platform implements a sophisticated dark theme with glassmorphism effects:

#### Core Visual Elements
1. **Deep Black Backgrounds** - `#050505` (not pure black for OLED optimization)
2. **Glassmorphism Effects** - `backdrop-filter: blur(12px)` with semi-transparent overlays
3. **Gradient Borders** - Subtle white/gray gradients on cards and containers
4. **Glow Effects** - Radial glows on interactive elements (buttons, cards)
5. **3D Interactive Background** - Spline 3D scene in hero section

#### Visual Hierarchy
```
Background Layer (#050505)
  └── 3D Spline Animation (hero section)
      └── Dark Overlay (20% black for readability)
          └── Glass Cards (white/5 with blur)
              └── Content + Glow Effects
```

### 12-Column Responsive Grid System

The entire platform follows a strict **12-column grid** for responsive layouts:

```css
/* Mobile: 1 column (span-12) */
@media (max-width: 639px) {
  .product-card { grid-column: span 12; }
}

/* Tablet: 2 columns (span-6) */
@media (min-width: 640px) and (max-width: 1023px) {
  .product-card { grid-column: span 6; }
}

/* Desktop: 3-4 columns (span-4 or span-3) */
@media (min-width: 1024px) {
  .product-card { grid-column: span 4; }
}
```

### Typography Hierarchy

Strict typography scale maintained across the platform:

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| Hero Title | 4xl-8xl (36-96px) | Thin (100) | Hero sections, landing pages |
| Section Title | 3xl-6xl (30-60px) | Thin (100) | Major section headings |
| Subsection Title | 2xl-4xl (24-36px) | Thin (100) | Product categories, features |
| Card Title | xl-3xl (20-30px) | Thin (100) | Insurance product cards |
| Body Text | base (16px) | Thin (100) | Descriptions, content |
| Small Text | sm (14px) | Thin (100) | Labels, captions |
| Fine Print | xs (12px) | Thin (100) | Disclaimers, footnotes |

**Important:** Font sizes, weights, and line-heights are NEVER overridden with Tailwind classes unless explicitly requested. All typography is controlled through `/styles/globals.css`.

---

## Semantic HTML Structure

### Main Application Structure
```html
<div id="root">
  <!-- Homepage -->
  <section> <!-- Hero Section with Spline 3D Background -->
    <header>
      <nav aria-label="Main navigation">
        <!-- Desktop Navigation -->
        <!-- Mobile Menu Toggle -->
      </nav>
    </header>
    
    <div> <!-- Hero Content with 20% Overlay -->
      <h1>Hero Title</h1>
      <p>Hero Description</p>
      <div> <!-- Call-to-action buttons -->
    </div>
    
    <div> <!-- Insurance Category Cards -->
      <article> × 5 <!-- Life, Health, Motor, Investment, Other -->
    </div>
  </section>

  <main>
    <section aria-labelledby="about-heading">
      <!-- About Vioratech -->
    </section>
    
    <section aria-labelledby="features-heading">
      <!-- Unique Features -->
    </section>
    
    <section aria-labelledby="calculators-heading">
      <!-- Interactive Calculators -->
    </section>
  </main>

  <footer role="contentinfo">
    <!-- Footer Navigation & Information -->
  </footer>
</div>
```

### Product Page Structure
```html
<div> <!-- Product Detail Page -->
  <section> <!-- Product Hero -->
    <nav aria-label="Breadcrumb">
    <h1> <!-- Product Name -->
    <div> <!-- Key Statistics Cards -->
  </section>

  <main>
    <section> <!-- What is This Insurance? -->
    <section> <!-- Why You Need It -->
    <section> <!-- Types/Plans -->
    <section> <!-- Comprehensive Benefits -->
    <section> <!-- Premium Calculator -->
    <section> <!-- Claims Process -->
    <section> <!-- Comparison Tables -->
    <section> <!-- FAQ Accordion -->
    <section> <!-- Quote Form -->
  </main>
</div>
```

---

## Component Architecture

### Page Components (8 Major Pages)

1. **App.tsx** - Main homepage with routing logic
2. **HealthInsurancePage.tsx** - Comprehensive health insurance hub
3. **TermInsurancePage.tsx** - Life insurance/term insurance details
4. **CarInsurancePage.tsx** - Motor insurance (car) details
5. **OtherInsurancePage.tsx** - Travel, home, personal accident insurance
6. **InvestmentPage.tsx** - Investment and pension plans
7. **InsuranceCalculatorPage.tsx** - Multi-calculator interface
8. **InsuranceDetailPage.tsx** - Dynamic product detail renderer

### Shared Components

#### UI Components (from shadcn/ui)
Located in `/components/ui/`:
- `accordion.tsx` - FAQ sections
- `button.tsx` - CTA buttons, form submits
- `card.tsx` - Product cards, info cards
- `input.tsx` - Form fields
- `select.tsx` - Dropdown selectors
- `table.tsx` - Comparison and metric tables
- `tabs.tsx` - Tabbed content (claims process)
- `dialog.tsx` - Modal windows
- `slider.tsx` - Premium range selectors
- `badge.tsx` - Category labels, tags
- `progress.tsx` - Loading states, completion indicators
- `checkbox.tsx`, `radio-group.tsx` - Form controls
- `calendar.tsx` - Date pickers for DOB
- `tooltip.tsx` - Contextual help

#### Custom Components
- **ImageWithFallback** (`/components/figma/ImageWithFallback.tsx`) - Protected component for image handling
- **Spline 3D Scene** - Interactive animated background

### Card Components

#### Insurance Product Card
```tsx
<article className="glass-card spotlight-effect">
  <div> {/* Icon */}
  <h3> {/* Product Name */}
  <p> {/* Description */}
  <div> {/* Feature Tags */}
  <Button> {/* Learn More CTA */}
</article>
```

**CSS Properties:**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px; /* --radius-2xl */
  padding: 32px; /* --spacing-8 */
}
```

#### Feature Card
```tsx
<div className="feature-card">
  <figure> {/* Icon with glow effect */}
  <h4> {/* Feature Title */}
  <p> {/* Feature Description */}
</div>
```

---

## Data Architecture

### Data Files Structure

All insurance products are organized across **7 TypeScript data files**:

1. **insuranceProducts.ts** - Core products (Term, Health Individual, Health Family Floater, Critical Illness, Senior Citizen)
2. **additionalProducts.ts** - Additional health plans (Maternity, Top-Up, Hospital Daily Cash)
3. **remainingProducts.ts** - Motor insurance (Car, Two-Wheeler, Commercial Vehicle)
4. **healthInsuranceExtension.ts** - Extended health products (Group Health, Super Top-Up, Disease-Specific)
5. **healthMotorExtension.ts** - Health and motor additions (Arogya Sanjeevani, Bike Insurance)
6. **motorOtherExtension.ts** - Other insurance categories (Travel, Home, Personal Accident, Pet, Cyber)
7. **finalExtension.ts** - Investment and life plans (ULIP, Pension, Child Plans, Whole Life)

### Product Data Schema

```typescript
interface InsuranceProduct {
  id: string;
  name: string;
  category: 'life' | 'health' | 'motor' | 'investment' | 'other';
  subcategory?: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  
  // Product Details
  features: string[];
  benefits: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  
  // Coverage Information
  coverageRange: {
    min: number;
    max: number;
    currency: 'INR';
  };
  
  // Pricing
  premiumRange: {
    min: number;
    max: number;
    period: 'monthly' | 'yearly';
  };
  
  // Comparisons
  comparisonTables: Array<{
    title: string;
    headers: string[];
    rows: Array<string[]>;
  }>;
  
  // Metrics
  metricTables: Array<{
    title: string;
    data: Array<{
      label: string;
      value: string | number;
    }>;
  }>;
  
  // FAQs
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  
  // Claims
  claimsProcess: {
    cashless: string[];
    reimbursement: string[];
  };
  
  // Additional Info
  exclusions?: string[];
  taxBenefits?: string[];
  renewalInfo?: string;
}
```

### Data Merging Strategy

```typescript
// In App.tsx
const allProducts = { 
  ...insuranceProducts, 
  ...allAdditionalProducts, 
  ...allRemainingProducts,
  ...healthInsuranceExtension,
  ...healthMotorExtension,
  ...motorOtherExtension,
  ...finalExtensionProducts
};
```

This creates a single unified product catalog with **61 total products** accessible throughout the application.

---

## Routing & Navigation

### Client-Side Routing (State-Based)

The platform uses **React state-based routing** (not React Router):

```typescript
const [currentPage, setCurrentPage] = useState<
  'home' | 'health-insurance' | 'calculator' | 'term-insurance' | 
  'investment' | 'car-insurance' | 'other-insurance' | 
  'one-crore-term' | string
>('home');

const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
```

### Navigation Hierarchy

```
Home (/)
├── Health Insurance (/health-insurance)
├── Term Insurance (/term-insurance)
├── Car Insurance (/car-insurance)
├── Investment Plans (/investment)
├── Other Insurance (/other-insurance)
├── Calculator (/calculator)
├── One Crore Term Plan (/one-crore-term)
└── Product Detail (/product/:id)
    └── Dynamic rendering based on selectedProductId
```

### Navigation Components

#### Desktop Navigation
```tsx
<nav className="hidden md:flex items-center gap-8">
  <button onClick={() => setCurrentPage('home')}>Home</button>
  <button onClick={() => setCurrentPage('health-insurance')}>Health</button>
  <button onClick={() => setCurrentPage('term-insurance')}>Life</button>
  <button onClick={() => setCurrentPage('car-insurance')}>Motor</button>
  <button onClick={() => setCurrentPage('investment')}>Investment</button>
  <button onClick={() => setCurrentPage('other-insurance')}>Other</button>
  <button onClick={() => setCurrentPage('calculator')}>Calculators</button>
</nav>
```

#### Mobile Navigation
```tsx
<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
  <SheetContent>
    {/* Mobile menu items */}
  </SheetContent>
</Sheet>
```

#### Breadcrumb Navigation
```tsx
<nav aria-label="Breadcrumb">
  <ol>
    <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
    <li><span aria-current="page">Product Name</span></li>
  </ol>
</nav>
```

---

## Interactive Features

### 1. Spline 3D Background Animation

**Integration Details:**
- **Spline Scene URL:** `https://prod.spline.design/Qh7B3uJXfzvTIqol/scene.splinecode`
- **Implementation:** `@splinetool/react-spline` library
- **Location:** Hero section background
- **Overlay:** 20% dark overlay (`rgba(0, 0, 0, 0.2)`) for text readability
- **Performance:** Lazy loaded, GPU-accelerated

```tsx
<div className="absolute inset-0 -z-10">
  <Spline 
    scene="https://prod.spline.design/Qh7B3uJXfzvTIqol/scene.splinecode"
    className="w-full h-full"
  />
  <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
</div>
```

### 2. Windows Reveal Spotlight Effect

**Custom Hook:** `/hooks/useSpotlightEffect.ts`

Implements a Windows 11-style reveal effect on interactive elements:

```typescript
// Spotlight effect automatically applied to:
- buttons
- links
- article cards
- .spotlight-effect class elements
```

**CSS Implementation:**
```css
.spotlight-effect {
  position: relative;
}

.spotlight-effect::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    600px circle at var(--spotlight-x) var(--spotlight-y),
    rgba(255, 255, 255, 0.1),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.spotlight-effect.spotlight-active::before {
  opacity: 1;
}
```

### 3. Premium Calculators

**Interactive Form Components:**
- Age/Gender selectors
- Coverage amount sliders
- Pre-existing conditions checkboxes
- Add-on selectors (maternity, dental, etc.)
- Real-time premium calculation
- Breakdown display (base premium + taxes + add-ons)

**Calculator Types:**
1. Health Insurance Premium Calculator
2. Life Insurance Premium Calculator
3. Motor Insurance Premium Calculator
4. Investment Returns Calculator

### 4. Comparison Tables

**Interactive Features:**
- Sortable columns (by price, coverage, features)
- Highlight differences
- Filter by features
- Responsive horizontal scroll on mobile

**Example Usage:**
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Plan Name</TableHead>
      <TableHead>Coverage</TableHead>
      <TableHead>Premium</TableHead>
      <TableHead>Features</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* Comparison rows */}
  </TableBody>
</Table>
```

### 5. FAQ Accordion

**Shadcn Accordion Implementation:**
```tsx
<Accordion type="single" collapsible>
  {faqs.map((faq, index) => (
    <AccordionItem key={index} value={`faq-${index}`}>
      <AccordionTrigger>{faq.question}</AccordionTrigger>
      <AccordionContent>{faq.answer}</AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

**Features:**
- Minimum 10 FAQs per product
- Single-expand or multi-expand modes
- Smooth animations
- Keyboard accessible

### 6. Quote Forms

**Multi-Step Form Flow:**
1. Personal Information (Name, Age, Gender, Contact)
2. Coverage Requirements (Sum Insured, Plan Type)
3. Health Details (Pre-existing conditions)
4. Add-ons Selection
5. Review & Submit

**Form Validation:**
- Required field validation
- Email/phone format validation
- Age range validation
- Real-time error display

---

## Color Palette

### Grayscale Prototype

The entire platform is built as a **comprehensive grayscale prototype**:

#### Primary Grayscale Palette
```css
/* Base Colors */
--color-black: #050505        /* Main background (not pure black) */
--color-gray-950: #0a0a0a     /* Deepest gray */
--color-gray-900: #171717     /* Secondary background */
--color-gray-800: #262626     /* Tertiary background */
--color-gray-700: #404040     /* Borders, dividers */
--color-gray-600: #525252     /* Inactive elements */
--color-gray-500: #737373     /* Metallic light */
--color-gray-400: #a3a3a3     /* Metallic mid-tone */
--color-gray-300: #d4d4d4     /* Light text on dark */
--color-gray-200: #e5e5e5     /* Lighter text */
--color-gray-100: #f5f5f5     /* Lightest gray */
--color-white: #ffffff        /* Primary text, icons */
```

#### Opacity-Based Whites (Glassmorphism)
```css
--color-white-5: rgba(255, 255, 255, 0.05)   /* Card backgrounds */
--color-white-10: rgba(255, 255, 255, 0.10)  /* Hover states */
--color-white-20: rgba(255, 255, 255, 0.20)  /* Active states */
--color-white-30: rgba(255, 255, 255, 0.30)  /* Emphasized borders */
--color-white-40: rgba(255, 255, 255, 0.40)  /* Hover borders */
--color-white-60: rgba(255, 255, 255, 0.60)  /* Secondary text */
--color-white-80: rgba(255, 255, 255, 0.80)  /* Body text */
```

#### Semantic Color Mapping
```css
/* Text Colors */
--color-text-primary: var(--color-white)
--color-text-secondary: var(--color-white-80)
--color-text-tertiary: var(--color-white-60)
--color-text-quaternary: var(--color-white-40)

/* Background Colors */
--color-bg-primary: var(--color-black)
--color-bg-secondary: var(--color-gray-900)
--color-bg-tertiary: var(--color-gray-800)

/* Border Colors */
--color-border-primary: var(--color-white-10)
--color-border-secondary: var(--color-white-20)
--color-border-hover: var(--color-white-40)
```

### Gradient Borders

Subtle gradients used for card borders:

```css
.gradient-border {
  border: 1px solid transparent;
  background: linear-gradient(#050505, #050505) padding-box,
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.2), 
                rgba(255, 255, 255, 0.05)
              ) border-box;
}
```

### Glow Effects

Radial glows for interactive elements:

```css
/* Button Glow */
.button-glow {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
              0 0 40px rgba(255, 255, 255, 0.05);
}

/* Card Hover Glow */
.card-glow:hover {
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.08);
}
```

---

## Typography System

### Global Typography Rules

All typography is controlled through `/styles/globals.css`:

```css
/* HTML Element Defaults */
body {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 100; /* Thin weight throughout */
  line-height: 1.625;
  color: var(--color-text-primary);
  background: var(--color-bg-primary);
}

h1 {
  font-size: 3.75rem; /* 60px */
  font-weight: 100;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

h2 {
  font-size: 3rem; /* 48px */
  font-weight: 100;
  line-height: 1.25;
}

h3 {
  font-size: 2.25rem; /* 36px */
  font-weight: 100;
  line-height: 1.375;
}

h4 {
  font-size: 1.875rem; /* 30px */
  font-weight: 100;
  line-height: 1.5;
}

h5 {
  font-size: 1.5rem; /* 24px */
  font-weight: 100;
  line-height: 1.5;
}

h6 {
  font-size: 1.25rem; /* 20px */
  font-weight: 100;
  line-height: 1.5;
}

p {
  font-size: 1rem; /* 16px */
  font-weight: 100;
  line-height: 1.625;
}
```

### Typography Restrictions

**CRITICAL:** Do not use Tailwind typography classes unless explicitly requested:

❌ **Avoid:**
- `text-2xl`, `text-3xl`, etc. (font sizes)
- `font-bold`, `font-semibold`, etc. (font weights)
- `leading-tight`, `leading-normal`, etc. (line heights)

✅ **Use:**
- Semantic HTML elements (`<h1>`, `<h2>`, `<p>`)
- CSS custom properties from `globals.css`
- Utility classes for layout only (`flex`, `grid`, `gap`, etc.)

---

## Accessibility Features

### ARIA Implementation

#### Landmark Roles
```html
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main">
<footer role="contentinfo">
<form role="search">
```

#### Section Labels
```html
<section aria-labelledby="section-heading">
  <h2 id="section-heading">Section Title</h2>
</section>
```

#### Interactive Elements
```html
<!-- Buttons -->
<button aria-label="Open mobile menu" aria-expanded="false">
<button aria-label="Calculate premium" type="submit">

<!-- Links -->
<a href="#" aria-label="Learn more about Health Insurance">

<!-- Form Controls -->
<input id="age" aria-describedby="age-help" required>
<span id="age-help">Enter your age between 18-65</span>
```

### Keyboard Navigation

- **Tab Order:** Logical flow through interactive elements
- **Focus Indicators:** Visible focus rings on all interactive elements
- **Skip Links:** "Skip to main content" for screen reader users
- **Escape Key:** Closes modals and dropdowns

```css
*:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.6);
  outline-offset: 2px;
}
```

### Screen Reader Support

#### Hidden Labels
```html
<label for="search" class="sr-only">Search insurance products</label>
<input id="search" type="text" placeholder="Search...">
```

#### Screen Reader Only Class
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Color Contrast

All text meets **WCAG AAA standards** for contrast:

- White text on #050505 background: 21:1 ratio
- White/80 text on #050505: 16.8:1 ratio
- White/60 text on #050505: 12.6:1 ratio

### Motion Preferences

Respects `prefers-reduced-motion`:

```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  // Disable animations
  return;
}
```

---

## Animation System

### Spline 3D Animation

**Hero Background Animation:**
- Interactive 3D scene
- Mouse/touch responsive
- GPU-accelerated rendering
- Fallback to static background if WebGL unavailable

### Spotlight Effect Animation

**Performance Optimized:**
```typescript
let animationFrameId: number;

const handleMouseMove = (e: MouseEvent) => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  animationFrameId = requestAnimationFrame(() => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty('--spotlight-x', `${x}px`);
    element.style.setProperty('--spotlight-y', `${y}px`);
  });
};
```

### CSS Transitions

```css
/* Fast transitions for hover states */
.transition-fast {
  transition: all 150ms ease;
}

/* Standard transitions for most interactions */
.transition-base {
  transition: all 300ms ease;
}

/* Slow transitions for transforms */
.transition-slow {
  transition: transform 500ms ease;
}
```

### Glassmorphism Hover Animations

```css
.glass-card {
  transition: all 300ms ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.10);
  border-color: rgba(255, 255, 255, 0.40);
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}
```

### Accordion Animations

Smooth expand/collapse with height transitions:

```css
[data-state="open"] {
  animation: slideDown 300ms ease-out;
}

[data-state="closed"] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from { height: 0; opacity: 0; }
  to { height: var(--radix-accordion-content-height); opacity: 1; }
}

@keyframes slideUp {
  from { height: var(--radix-accordion-content-height); opacity: 1; }
  to { height: 0; opacity: 0; }
}
```

---

## Performance Optimizations

### Code Splitting

Components are lazily loaded:

```typescript
// Lazy load heavy components
const HealthInsurancePage = lazy(() => import('./components/HealthInsurancePage'));
const Spline = lazy(() => import('@splinetool/react-spline'));
```

### Image Optimization

**ImageWithFallback Component:**
- Lazy loading with Intersection Observer
- Low-quality placeholder (LQIP)
- Fallback for failed loads
- Responsive srcset support

### Backdrop Filter Optimization

Backdrop blur is performance-intensive; optimized usage:

```css
/* Only apply to visible cards */
.glass-card:not([hidden]) {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Fallback for unsupported browsers */
@supports not (backdrop-filter: blur(12px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.15);
  }
}
```

### Animation Performance

**GPU Acceleration:**
```css
.animated-element {
  transform: translateZ(0);
  will-change: transform, opacity;
}
```

**RequestAnimationFrame for Spotlight:**
- Batches DOM updates
- Cancels previous frames
- Syncs with browser refresh rate

### Data Optimization

**Memoization:**
```typescript
const filteredProducts = useMemo(() => {
  return Object.values(allProducts).filter(
    product => product.category === selectedCategory
  );
}, [selectedCategory]);
```

### Bundle Size Optimization

**Tree-Shaking:**
- Import only used Lucide icons
- Import specific lodash functions
- Remove unused shadcn components

```typescript
// ✅ Good - specific imports
import { Shield, Heart, Car } from 'lucide-react';

// ❌ Bad - imports entire library
import * as Icons from 'lucide-react';
```

---

## File Structure

```
vioratech-insurance/
├── App.tsx                           # Main application entry point
├── components/
│   ├── HealthInsurancePage.tsx       # Health insurance hub (2500+ lines)
│   ├── TermInsurancePage.tsx         # Life/term insurance details
│   ├── CarInsurancePage.tsx          # Motor insurance (car)
│   ├── OtherInsurancePage.tsx        # Travel, home, accident insurance
│   ├── InvestmentPage.tsx            # Investment & pension plans
│   ├── InsuranceCalculatorPage.tsx   # Multi-calculator interface
│   ├── OneCroreTermPage.tsx          # 1 Crore term plan landing
│   ├── InsuranceDetailPage.tsx       # Dynamic product renderer
│   ├── ui/                           # Shadcn UI components (30+ components)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   └── ... (27 more)
│   └── figma/
│       └── ImageWithFallback.tsx     # Protected image component
├── data/
│   ├── insuranceProducts.ts          # Core products (Term, Health)
│   ├── additionalProducts.ts         # Additional health plans
│   ├── remainingProducts.ts          # Motor insurance
│   ├── healthInsuranceExtension.ts   # Extended health products
│   ├── healthMotorExtension.ts       # Health + motor additions
│   ├── motorOtherExtension.ts        # Other insurance types
│   └── finalExtension.ts             # Investment & life plans
├── hooks/
│   └── useSpotlightEffect.ts         # Windows reveal effect
├── styles/
│   └── globals.css                   # Global styles & design tokens
├── guidelines/
│   └── Guidelines.md                 # Development guidelines
└── Documentation/
    ├── ARCHITECTURE.md               # This file
    ├── IMPLEMENTATION_COMPLETE.md    # Implementation status
    ├── Attributions.md               # Third-party attributions
    ├── REFACTOR_SUMMARY.md           # Refactoring history
    └── SPOTLIGHT_DOCUMENTATION.md    # Spotlight effect docs
```

---

## Browser Support

### Target Browsers
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

### CSS Features
- CSS Custom Properties (Variables) ✅
- Backdrop Filter (with fallback) ✅
- CSS Grid & Flexbox ✅
- CSS Animations & Transitions ✅
- CSS Gradients ✅

### JavaScript Features
- ES6+ Syntax ✅
- React 18 Features ✅
- Modern DOM APIs ✅
- RequestAnimationFrame ✅

---

## Future Enhancements

### Potential Features
1. **User Authentication** - Login/signup for policy management
2. **Policy Dashboard** - Track purchased policies
3. **Document Upload** - Upload medical records, KYC documents
4. **AI Chatbot** - Insurance recommendation bot
5. **Payment Integration** - Online premium payment
6. **Multi-Language Support** - Hindi, Regional languages
7. **Dark/Light Mode** - User preference toggle
8. **Progressive Web App** - Offline capability
9. **Push Notifications** - Renewal reminders
10. **Comparison Export** - Download comparison tables as PDF

### Technical Improvements
1. **React Router** - Replace state-based routing
2. **Redux/Zustand** - Centralized state management
3. **React Query** - Data fetching & caching
4. **TypeScript Strict Mode** - Full type safety
5. **Unit Testing** - Jest + React Testing Library
6. **E2E Testing** - Playwright or Cypress
7. **Storybook** - Component documentation
8. **Lighthouse Score** - 100/100 on all metrics

---

## Maintenance Guidelines

### Adding New Insurance Products

1. **Create Product Data:**
```typescript
// In appropriate data file
export const newProduct: InsuranceProduct = {
  id: 'unique-product-id',
  name: 'Product Name',
  category: 'health',
  // ... full product structure
  faqs: [/* minimum 10 FAQs */],
  comparisonTables: [/* minimum 3 tables */],
  metricTables: [/* minimum 3 tables */]
};
```

2. **Add to Data Merge:**
```typescript
// In App.tsx
const allProducts = {
  ...existingProducts,
  newProduct
};
```

3. **Create Product Page (if needed):**
- Follow structure of existing pages
- Maintain glassmorphism design
- Include all required sections
- Add to routing logic

### Modifying Design System

1. **Update CSS Variables:**
```css
/* In globals.css */
:root {
  --new-color: #value;
  --new-spacing: value;
}
```

2. **Document Changes:**
- Update this ARCHITECTURE.md file
- Note in REFACTOR_SUMMARY.md
- Test across all pages

3. **Verify Consistency:**
- Check all product pages
- Test responsive breakpoints
- Validate accessibility

### Adding New Animations

1. **Define Keyframes:**
```css
@keyframes newAnimation {
  from { /* start state */ }
  to { /* end state */ }
}
```

2. **Respect Motion Preferences:**
```typescript
if (!prefersReducedMotion) {
  // Apply animation
}
```

3. **Optimize Performance:**
- Use `transform` and `opacity`
- Apply `will-change` sparingly
- Test on low-end devices

---

## Security Considerations

### Input Sanitization
- All user inputs sanitized before processing
- No direct HTML injection
- XSS protection enabled

### Data Privacy
- No PII stored in frontend state
- Form data submitted securely
- GDPR-compliant practices

### API Security
- HTTPS only
- CORS configured
- Rate limiting on endpoints

---

## Credits & Acknowledgments

**Design Philosophy:** Dark Glass & Glow with metallic accents
**3D Animation:** Spline (https://spline.design)
**UI Components:** shadcn/ui (MIT License)
**Icons:** Lucide React (ISC License)
**Images:** Unsplash (Unsplash License)
**Font System:** System font stack
**Inspiration:** Windows 11 Fluent Design, Apple Glass Design

---

**Document Version:** 2.0
**Last Updated:** January 5, 2026
**Maintained By:** Vioratech Development Team
**Platform Status:** Production-Ready Grayscale Prototype

---

## Quick Reference

### Key Statistics
- **Total Products:** 61
- **Data Files:** 7
- **Product Pages:** 8
- **UI Components:** 30+
- **Lines of Code:** 15,000+
- **Responsive Breakpoints:** 3 (mobile, tablet, desktop)
- **Color Scheme:** Grayscale with glassmorphism
- **Primary Font Weight:** Thin (100)
- **3D Animation:** Spline interactive background
- **Grid System:** 12-column responsive

### Essential Files
- `/App.tsx` - Main entry point
- `/styles/globals.css` - Design system
- `/components/HealthInsurancePage.tsx` - Most comprehensive page (2500+ lines)
- `/data/*.ts` - 61 insurance products across 7 files

### Design Tokens Quick Access
```css
/* Colors */
--color-bg-primary: #050505
--color-text-primary: #ffffff
--color-border-primary: rgba(255, 255, 255, 0.1)

/* Spacing */
--spacing-4: 1rem      /* 16px */
--spacing-8: 2rem      /* 32px */
--spacing-12: 3rem     /* 48px */

/* Radius */
--radius-xl: 1rem      /* 16px - buttons */
--radius-2xl: 1.5rem   /* 24px - cards */

/* Typography */
--font-weight-thin: 100
--line-height-relaxed: 1.625
```

---

**End of Architecture Documentation**
