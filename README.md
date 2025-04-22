# PrimeBet Promotions Page

This is a test project for PrimeBet's promotions page using Pug templating engine, SCSS, and JavaScript.

## Project Structure

\`\`\`
/
├── public/
│   ├── css/
│   │   └── promotions.css (compiled from SCSS)
│   ├── js/
│   │   └── promotions.js
│   └── images/
│       └── promo-*.jpg (promotion images)
├── styles/
│   └── promotions.scss
├── templates/
│   ├── layout.pug
│   ├── promotions.pug
│   └── components/
│       └── promo-card.pug
├── package.json
├── server.js
└── README.md
\`\`\`

## Features

- Responsive design for desktop, tablet, and mobile
- Grid layout for promotion cards
- Dynamic rendering of promotions from data
- Filter for "All/Active/Expired promotions"
- BEM methodology for CSS
- Pug mixins and includes
- SCSS with variables and nesting

## How to Run

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Compile SCSS to CSS:
   \`\`\`
   npm run scss
   \`\`\`

3. Start the server:
   \`\`\`
   npm start
   \`\`\`

4. Open your browser and navigate to:
   \`\`\`
   http://localhost:3000
   \`\`\`

## Development

For development with auto-restart and SCSS watching:

1. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

2. In a separate terminal, watch SCSS changes:
   \`\`\`
   npm run scss
   \`\`\`

## Requirements Met

- ✅ Pug templates with mixins and includes
- ✅ BEM methodology for CSS
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Grid layout with SCSS
- ✅ Expired promotions with .expired class
- ✅ Dynamic rendering from data
- ✅ Filter functionality
