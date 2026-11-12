# DDent — Appointment integration hand-off

Website: https://vladwebdeveloper.github.io/DDent/

## Current behavior (GitHub Pages / static)
The appointment section collects name and phone (required), service, preferred dentist, preferred date, time preference, and a short optional note. Required consent is checked in-browser.

**No backend currently exists.** Submitting the form prepares a WhatsApp message to the clinic's verified public WhatsApp number (+373 795 26 737) or an email draft to dumbravadent@gmail.com. **The patient must send the prepared message** in the chosen app. It does not create a confirmed appointment and no information is stored on the website.

## Form fields ready for CRM
- `fullName` — string, 2–80 characters, required
- `phone` — E.164-compatible phone string, required
- `service` — 0 general consultation or 1–8 dental specialties
- `doctor` — empty or `andrei`/`victor`
- `preferredDate` — ISO YYYY-MM-DD, optional
- `interval` — empty/`morning`/`midday`/`afternoon`
- `notes` — string, maximum 500 characters, optional, **not for medical data**
- `consent` — required true

## Future secure CRM implementation
1. Create a trusted HTTPS server-side endpoint. Do not put CRM API keys in GitHub Pages JavaScript.
2. Document lawful basis and privacy notice; validate fields again server-side, rate-limit, protect against spam and bots.
3. Restrict access to contact data, encrypt in transit and at rest, log access carefully, define retention periods, and handle deletion requests.
4. Replace WhatsApp/mailto handoff with a real POST and backend-confirmed response. Explicitly distinguish request submitted, accepted, and confirmed.
5. Add reliable notification delivery, deduplication, monitoring, and CRM sync/retry.
6. Do not transmit diagnostic or clinical files until medical data safeguards and consent/legal basis are separately implemented.
7. Update privacy and cookie notices after the actual infrastructure, processors, and retention become known.

The Google Maps embed and social links use the same contact details published on https://ddent.md/.
