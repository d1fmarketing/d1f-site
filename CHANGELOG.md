# Changelog

## 2025-12-03 - Initial Release

### Design System
- **Theme**: Dark tech aesthetic
  - Background: #000000 (pure black)
  - Accent: #F6C018 (gold)
- **Approach**: Mobile-first (390px viewport base)

### Sections Implemented
1. **Hero** - Brain image + headline + tags + CTA
2. **How We Scale** - 6 hex cards with icons
3. **Operational Blueprints** - 3 blueprint cards
4. **Continuous Optimization Cycle** - Process visualization
5. **AI Governance & Safety** - 4 governance items
6. **Infrastructure Stack** - 4 columns (Models, Orchestration, Growth, Knowledge)
7. **Terminal Footer** - Interactive terminal card with contact info

### UI/UX Improvements
- Terminal card with 3D dot effects and gold glow
- Hex icons with border-radius: 18px
- Uniform section gaps (64px desktop / 48px mobile)
- Hero text sizes optimized for mobile
- Gold accents on interactive elements

### Image Generation
- **Tool**: Google Gemini 3 Pro Image Preview API
- **Model**: `gemini-3-pro-image-preview`
- **Script**: `generate-stack-icons.js`
- Icons generated: OpenAI, Anthropic, Google, Make, Zapier, Webhooks, Meta, Analytics, Playbooks, Specs

### Deployment
- **GitHub**: https://github.com/d1fmarketing/d1f-site
- **Vercel**: https://d1f-site.vercel.app
- Auto-deploy on push to `main`
- SSO protection disabled for public access

### Contact
- Email: info@d1fmarketing.com
- Phone: +1 510 447 0929
