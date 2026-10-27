# RENDERING-NOTES.md

## Task 3: Results of the four routes

| Route | Source contains time? | Changes on refresh? | Works with JS off? |
|-------|-----------------------|---------------------|--------------------|
| /csr  | No. Source shows only "Loading…" and a script | Yes. 10:15:02 then 10:15:05 | No. Stays "Loading…" |

## Task 4: Streaming

- Time to first byte : 6 ms
- Total time: 1.52 s
- The heading and first paragraph appeared immediately. The second paragraph
  appeared about 1.5 seconds later.

When streaming helps: Streaming helps when part of the page needs slow data
(like a database or API), because the user sees the page shell at once
instead of waiting for everything to finish.


## Task 5: Choosing a strategy

### Blog post: SSG
- Freshness: a blog post rarely changes, so it is fine if it stays the same
  until the next build.
- Speed: it is a ready-made HTML file, so it loads very fast and search
  engines can read it.
- Cost: no server work per visit, so it is the cheapest option.

### Live stock-price dashboard: CSR
- Freshness: prices change every second, so static HTML would be wrong at
  once. The browser keeps fetching new data.
- Speed: the page shell loads quickly, then only small data updates are sent.
- Cost: the server sends data, not full pages. It is an app screen, so search
  engine ranking matters little.

### User's account page: SSR
- Freshness: it must show this user's current data on every visit.
- Speed: the user receives finished HTML, so content appears quickly.
- Cost: the server works on every visit, but this is needed because each page
  is personal and cannot be one shared static file.


  ## Task 11: React app is client-side rendered

After `npm run build` and `npm run preview`, I pressed Ctrl+U. The page source
only contains `<div id="root"></div>` and a script tag. The table, buttons and
status text are built by JavaScript in the browser. So this React app is
client-side rendered (CSR), the same as the /csr route in Part A: the server
sends an empty shell and the browser builds the page.

Lighthouse Accessibility score: 100 (screenshot saved).

# AI-USAGE.md

## Lab 6
- Generated: help fixing PowerShell and npm errors (execution policy, empty
  files, folder paths), and example code and note formats for the demo files
  and the React components (types.ts, Greeting, StatusMessage, SlotRow,
  SlotTable, App).
- Reviewed: I created and saved every file myself, ran build-static.mjs and
  server.mjs, tested the routes with View Source and Disable JavaScript, read
  each React component, ran npm run build, tested with the keyboard, and ran
  Lighthouse.
- Rejected: nothing. (Replace this with something real if you changed anything,
  for example: "I replaced the sample times in the notes with my own results.")