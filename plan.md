# Codex-Inspired Developer Portfolio

## Summary

Create and privately deploy a polished, single-page software-developer portfolio inspired by the Codex page’s visual language: atmospheric blue gradients, oversized typography, rounded controls, generous spacing, and premium showcase panels. Use original branding and placeholder content for “Rama,” without copying OpenAI assets or text.

## Key Changes

- Initialize a responsive React/Next-style Sites project with accessible semantic structure and portfolio-specific metadata.
- Build a floating navigation with links to About, Projects, Experience, Skills, and Contact, plus a prominent résumé/contact action.
- Create these sections:
  - Full-viewport hero with Rama’s developer positioning, availability, and primary project/contact CTAs.
  - Technology strip featuring representative tools such as TypeScript, React, Node.js, and PostgreSQL.
  - About and capabilities overview.
  - Three realistic featured-project showcases with role, technical stack, outcome, and project/source links.
  - Experience timeline, skills grid, and closing contact panel.
  - Minimal footer with social and email links.
- Reproduce the reference’s atmosphere using CSS gradients, blur, texture, layered light, and rounded editorial panels; use original icons and styling rather than OpenAI branding.
- Add polished motion: restrained entrance reveals, ambient hero movement, hover transitions, active navigation, smooth anchor scrolling, and a responsive mobile menu.
- Respect reduced-motion preferences and provide strong keyboard focus, contrast, touch targets, and meaningful labels.
- Generate one bespoke social-sharing image matching the finished portfolio and connect it to Open Graph/X metadata.
- Keep placeholder copy and links centralized and clearly editable when real biography, résumé, projects, and profiles are available.

## Interfaces and Behavior

- No backend, authentication, database, or external API is required.
- Navigation uses section anchors and collapses into an accessible mobile menu.
- Placeholder external links are visibly marked or safely non-navigating until replaced; the email CTA uses a placeholder address.
- The layout supports mobile, tablet, laptop, and wide desktop screens without horizontal overflow.
- Publish the validated site as a private Sites deployment.

## Test Plan

- Verify the production build completes successfully.
- Check every section, navigation target, CTA, and mobile-menu state.
- Validate responsive layout at common mobile, tablet, and desktop widths.
- Test keyboard navigation, visible focus states, reduced-motion behavior, accessible labels, and color contrast.
- Confirm animations remain smooth and do not obscure content.
- Verify metadata and the social-preview image contain the correct portfolio identity and no invented text.

## Assumptions

- The portfolio represents a software developer named Rama.
- The first version uses polished placeholder biography, experience, projects, résumé, email, GitHub, and LinkedIn details.
- The visual direction stays close to the Codex page’s blue atmospheric aesthetic while remaining an original portfolio design.
- The first release is one page, English-language, dark/blue themed, and privately deployed.
