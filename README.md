# The Flea La La — Next.js

Run `npm install`, then `npm run dev` and open http://localhost:3000.
For production, run `npm run build` followed by `npm start`.

The home page renders `content/body.html`; the document loads `content/head.html`.
Images are deduplicated in `public/assets/`. The partner logo is in `public/`.
The standalone HTML is also retained with relative asset paths for direct viewing.

Current features include the announcement popup, mobile dropdown, stall enquiries,
creator application, and audience memory game. Applications and ticket claims open
WhatsApp for the visitor to review and send. Game attempts are stored per browser.
