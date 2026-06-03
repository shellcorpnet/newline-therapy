# Newline Therapy — marketing site (v1)

A single-page, fully static placeholder site for an Oregon-based therapy practice. No build step. Hand-written HTML/CSS/JS. Designed for GitHub Pages.

---

## Local preview

Any static server works. From the project root:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a browser.

---

## Deploy to GitHub Pages

1. Push this repo to GitHub (suggested name: `newline-therapy`).
2. Repo → **Settings** → **Pages**.
3. **Source:** *Deploy from a branch*.
4. **Branch:** `main`, folder `/ (root)`. Save.
5. The live URL appears at the top of the Pages settings panel.

`.nojekyll` is already in the root, so GitHub will not run Jekyll on the site. Underscored paths and HTML5 features work as expected.

### Custom domain (optional)

If a domain is confirmed, add a `CNAME` file at the root containing the bare domain (e.g. `newlinetherapy.com`) and configure DNS per GitHub's instructions.

---

## File structure

```
/
├── index.html         single-page site, all sections anchored
├── styles.css         tokens + layout + per-section styles
├── script.js          sticky header, mobile menu, scroll reveals, FAQ progressive enhancement
├── assets/
│   ├── grain.svg              subtle noise overlay used in the hero
│   └── og-image-source.svg    design source — export to og-image.png (1200×630) before launch
├── .nojekyll
└── README.md
```

`og-image.png` is referenced by the OG meta tags but does not exist yet. **Before launch:** open `assets/og-image-source.svg`, export at 1200×630, save as `assets/og-image.png`.

---

## What's a placeholder vs. what's final

This is the v1 design pass. Most copy is lorem ipsum. Two exceptions are deliberately written as near-final transparency copy with bracketed slots for the client's specifics — the **callout in §How we work**, and the **paragraph + footer disclosure** under §Credentials. Those are trust statements, not marketing copy. Edit names and dates only.

### Grep tokens

Every placeholder uses one of these so the next pass is a checklist, not a hunt:

| Token | Meaning |
|---|---|
| `[PLACEHOLDER: ...]` | Copy the client needs to supply |
| `[PHOTO: ...]` | An image goes here |
| `<!-- TODO: ... -->` | Design or content decision needing client input |
| `lorem ipsum ...` | Disposable filler prose |

```sh
grep -rn "\[PLACEHOLDER" .
grep -rn "\[PHOTO" .
grep -rn "TODO:" .
grep -rni "lorem ipsum" .
```

---

## Site-wide placeholder index

Every spot where content needs to be filled, organized by section.

### Meta / head
- `<title>` — replace `[PLACEHOLDER: Tagline]`
- `<meta name="description">` — one-sentence brand description
- OG title / description / URL / image

### Hero
- Headline (h1, lorem)
- Lede paragraph (lorem)
- Hero meta line: `[PLACEHOLDER: CLINICIAN NAME]`, `[PLACEHOLDER: CITY]`

### Welcome
- "I see you" statement (h2)
- Welcome paragraph

### Approach
- Eyebrow + h2 + intro paragraph
- Three numbered value statements (h3 + body)

### Specialties
- Section h2
- Four cards: title + 2-sentence description + photo concept
- Common social-work specialties to choose from: anxiety, depression, life transitions, grief & loss, trauma, identity, relationships, women's mental health, young adults

### Meet [Clinician]
- `[CLINICIAN NAME]` in h2
- Two bio paragraphs (path into social work, prior years of practice, why Newline). Include 4.0 GPA + `[INSTITUTION]` quietly inside prose
- Pulled quote at end (~15 words)
- Portrait photo

### Process
- Section h2
- Three step labels (`[Reach out]`, `[Meet]`, `[Begin]`) + descriptions

### How we work (trust hinge)
- Eyebrow + h2 + intro paragraph
- Callout copy is **near-final** — fill `[SUPERVISOR NAME, LCSW]` and `[HOST GROUP NAME]`
- Three fact rows: format, insurance, supervision — fill bracketed slots

### Credentials & training
- Six-item list — fill `[PLACEHOLDER]` license number, `[INSTITUTION]`, `[YEAR]`, `[SUPERVISOR FULL NAME, LCSW]`, `[HOST GROUP NAME]`, `[YEARS]`, `[ADDITIONAL TRAINING]`
- Note paragraph is **near-final** — fill `[SUPERVISOR NAME, LCSW]` + `[YEARS]`

### Investment
- h2 + body paragraph (lorem)
- Three pill labels (insurance / self-pay rate / sliding scale)
- Fineprint paragraph — fill `[HOST GROUP NAME]` and `HOST_GROUP_LINK`

### FAQ
- Six question titles (already plain-language placeholders, edit as desired)
- Six 2-sentence answers (lorem)

### Contact
- Headline (h2, lorem)
- Email, phone, hours
- Primary CTA: replace `#` href with `HOST_GROUP_INTAKE_URL`, replace `[HOST GROUP NAME]` in label
- Bottom note — fill `[LOCATION]`

### Footer
- Tagline
- Disclosure paragraph is **near-final** — fill `[SUPERVISOR FULL NAME, LCSW]`, `[CLINICIAN NAME]`, `[HOST GROUP NAME]`
- Crisis resources are real and ready to ship as-is
- Legal links go to `#` for now — Privacy, Accessibility, Good Faith Estimate, and No Surprises Act pages must exist before launch

---

## Open questions for the client

### ✓ Already confirmed
- Credential: **CSWA** (Clinical Social Work Associate)
- Credentialing body: **Oregon Board of Licensed Social Workers**
- State of practice: **Oregon**
- Education: **MSW, 4.0 GPA**

### Highest priority — affects credentials, footer, investment, contact
1. License number
2. MSW institution + graduation year
3. Supervisor full name + credentials (LCSW), and explicit permission to be named publicly. Optional bio link.
4. Host group affiliation (Mindful Therapy Group, similar, or solo under supervisor)
5. Public intake URL (host-group)
6. Insurance plans accepted via host group; self-pay rate; sliding-scale availability
7. Years in social work practice prior to private practice

### Practice format
8. Telehealth-only / in-person / hybrid; platform; physical address(es)

### Brand & content
9. Specialty list (3–4 areas anchoring the Specialties grid)
10. Tagline for `<title>`, hero, OG image
11. Photography plan — headshot shoot date, environmental imagery
12. Clinician's full legal/professional name as it should appear publicly

### Technical
13. Custom domain
14. Required legal pages — Privacy, Accessibility Statement, Good Faith Estimate (federally required for self-pay clients under the No Surprises Act)

---

## Notes on the design

- Type: Fraunces (display) + DM Sans (body), via Google Fonts.
- Palette and gradients are locked in `:root` of `styles.css`. Do not substitute.
- Gold (`--gold` / `--gold-light`) is reserved for accents — rules, hover underlines, the logomark stroke. Never as a button fill, never on more than ~5% of any viewport.
- Motion: hero entrance + IntersectionObserver reveals only. `prefers-reduced-motion: reduce` is honored.
- A11y: skip-link, semantic landmarks, single h1, gold focus ring, 4.5:1 contrast on body text.
- No analytics, no third-party scripts, no forms. Total page weight is well under the 100KB budget excluding fonts.

---

## When ready to add real content

1. Fill bracketed slots top to bottom.
2. Replace `lorem ipsum` blocks with the real copy.
3. Drop photographs into `assets/` and replace each `<div class="card-media">` / `<div class="portrait-frame">` block with a proper `<img>` (keep the corner-rule decoration if desired).
4. Export `assets/og-image.png` from the source SVG.
5. Verify all `#` href legal links route to real pages.
6. Re-run a Lighthouse pass.
