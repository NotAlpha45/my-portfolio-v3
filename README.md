# My Portfolio v3

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS, featuring a cyberpunk noir aesthetic. Showcases professional experience, technical skills, projects, publications, and personal interests.

## 🌐 Live Demo

[View Portfolio](https://notalpha45.github.io/my-portfolio-v3/)

## ✨ Features

- **Cyberpunk Noir Theme**: Custom color palette with neon accents and glitch effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Fast Development**: Vite-powered build tool with hot module replacement
- **Sections Include**:
  - About Me: Personal introduction with profile photo
  - Skills: Technical skills with progress bars and technology tags
  - Highlighted Project: Featured Reg-AI project showcase
  - Publications: Research publications with metadata
  - Experience: Professional timeline at Kaz Software
  - Hobbies: Personal interests and fun facts

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS v4 with custom theme
- **Deployment**: GitHub Pages with GitHub Actions CI/CD
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NotAlpha45/my-portfolio-v3.git
   cd my-portfolio-v3
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deployment

The project is configured for automatic deployment to GitHub Pages via GitHub Actions. Push changes to the `master` branch to trigger deployment.

## 📁 Project Structure

```text
src/
├── components/          # React components
│   ├── AboutMe.tsx     # Personal introduction section
│   ├── Skills.tsx      # Technical skills showcase
│   ├── HighlightedProject.tsx  # Featured project
│   ├── Publications.tsx        # Research publications
│   ├── Experience.tsx          # Professional experience
│   └── Hobbies.tsx             # Personal interests
├── App.tsx             # Main application component
└── index.css           # Global styles and Tailwind config

public/
├── images/             # Static assets (profile photo, etc.)
└── ...

.github/
├── workflows/          # GitHub Actions deployment
└── copilot-instructions.md  # AI development guidelines
```

## 🎨 Customization

### Colors and Theme

The cyberpunk noir theme uses custom colors defined in `src/index.css`:

- Primary: `noir-black` (#0a0a0f), `cyber-cyan` (#00f0ff)
- Secondary: `cyber-pink` (#ff00ff), `cyber-purple` (#b040ff)
- Accents: `cyber-blue` (#4040ff), `cyber-yellow` (#ffff00)

### Adding Content

Update the data in each component file to customize:

- Personal information in `AboutMe.tsx`
- Skills and technologies in `Skills.tsx`
- Projects in `HighlightedProject.tsx`
- Publications in `Publications.tsx`
- Experience in `Experience.tsx`
- Hobbies in `Hobbies.tsx`

### Profile Photo

Place your profile photo at `public/images/profile.jpg` (recommended size: 400x400px).

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

### MAHEEN MASHRUR HOQUE

- Software Engineer & AI Researcher
- [LinkedIn](https://linkedin.com/in/maheenmashru)
- [GitHub](https://github.com/NotAlpha45)
- Email: [maheenmashru@gmail.com](mailto:maheenmashru@gmail.com)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
