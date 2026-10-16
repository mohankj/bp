# BPSC Path — preparation portal

A responsive, static website starter for BPSC CCE preparation. Built with plain HTML, CSS and JavaScript so it can be opened locally or deployed on GitHub Pages without a backend.

## Features

- Modern responsive dashboard
- Broad CCE Prelims syllabus checklist with local progress saving
- Previous-year paper library linking to the official BPSC question-booklet archive
- Timed practice and curated PYQ-excerpt quiz
- Countdown timer with automatic submission
- Question palette, answer selection, review flags and next/previous navigation
- Score summary, explanations and source references
- Save questions for revision
- Progress dashboard and JSON export
- Light/dark mode
- Mobile navigation

## Run locally

1. Download and extract the ZIP.
2. Open `index.html` in a modern browser. For a local web server, open a terminal in this folder and run `python -m http.server 8000`, then visit `http://localhost:8000`.

No build step or package installation is required. Progress is stored in browser `localStorage`, so it stays on that browser/device. It is not synced between devices.

## Deploy using GitHub Pages

1. Create a new GitHub repository, for example `bpsc-path`.
2. Upload `index.html`, `styles.css`, `app.js`, and this README to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. After GitHub Pages deploys, share the published URL shown on the Pages settings screen.

## Content and exam accuracy notes

- Official syllabus portal: https://bpsc.bihar.gov.in/syllabus/
- Official question-booklet archive: https://bpsc.bihar.gov.in/question-booklets/
- Official BPSC website: https://bpsc.bihar.gov.in/
- Curated PYQ excerpts link back to the source archive where the question statement was located. Their exact wording and final answer should be checked against the original booklet and the applicable official answer key.
- Other question-bank items are original practice questions and are labelled **Practice**; they are not represented as previous-year questions.
- This starter includes only a small demo bank. It is not a full 150-question mock. Before using it for serious exam simulation, expand the bank with verified questions, final answer keys and explanations from the relevant CCE cycle.
- The mock interface simulates the current 72nd CCE-style response pattern: +1 for a correct A–D answer, −1/3 for a wrong A–D answer or a completely blank question, and 0 for explicitly choosing E (Not attempted). Older paper excerpts may originally have used a different answer format. Confirm the latest official notification for the specific examination.
- This is an independent preparation tool and is not affiliated with BPSC.
