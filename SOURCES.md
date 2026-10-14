# The Kutting Edge concept

User-approved redesign, 2026-10-14. GitHub source: NickRoyOfficial/The-Kutting-Edge. Intended Cloudflare Worker: the-kutting-edge.

## Content
- User lead supplies business name, phone (207) 890-5234, and Garret.
- BBB listing corroborates Oxford, Maine and owner Garret Sessions: https://www.bbb.org/us/me/oxford/profile/landscape-contractors/the-kutting-edge-lawn-care-landscaping-0021-477746
- Published 2024 business job description supports weekly mowing/trimming, shrub pruning, garden weeding/cutbacks and spring/fall cleanup: https://www.career.com/job/the-kutting-edge/lawn-care-worker/j202205101118415775363
- User-supplied photographed business card lists tractor work, bush hogging, bucket work, grading, rock raking and rototilling.
- User-supplied branded trailer reads Lawncare & Excavation, Oxford, Maine.
- Service availability is to be confirmed with the business. No ratings, testimonials, guarantee, pricing, or service-area expansion claims used.

## Images
Company images supplied by the user from the prospect's socials:
- prepared-site.webp: 484917841_1178879197365031_5570804180850738045_n.jpg
- branded-trailer.webp: 485303908_1176338937619057_6517824014096537024_n.jpg
- excavation.webp: 602344259_1402352291684386_8917458143301710762_n.jpg
- foundation-site.webp: 641366064_1452194773366804_8701247503112676038_n.jpg
- equipment-lineup.webp: 813623828_1627684265817853_628559558643028524_n.jpg
- equipment-flag.webp: 818384669_1629348925651387_6014539067090069790_n.jpg
Stock used only as illustrative service imagery, never in company work gallery:
- mowing.webp: Marc Pell, https://unsplash.com/photos/a-lawnmower-sits-on-a-grassy-lawn-ZmcOLTGdMbQ . Page indicates free Unsplash License.
- landscaping.webp: Curtis Adams, https://www.pexels.com/photo/lawn-and-trees-around-house-12700469/ . Page indicates free use.
- hero-lawn.webp: retained approved hero stock https://images.unsplash.com/photo-1558904541-efa843a96f01 . Illustrative stock identified in hero.

## Behavior and hosting
The form previews locally; nothing is transmitted or stored. Telephone and Facebook links are real contact paths. Gallery supports touch, arrow buttons, keyboard arrows, and dialog close via Escape. Reduced motion disables animation/smooth scrolling.

Build: npm run build. Deploy: npx wrangler deploy. Worker name: the-kutting-edge. Cloudflare configuration serves dist/ and runs the build first. Repository-to-Cloudflare connection must be verified in the connected Cloudflare project; no credentials are committed.
