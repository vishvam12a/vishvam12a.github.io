# Personal Portfolio Website

A modern, responsive portfolio website built with Astro, React, and Tailwind CSS, featuring dark mode, animations, and a contact form.

## 🚀 Quick Start

1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── profile.jpg           # Add your profile photo
│   └── resume.pdf            # Add your resume
├── src/
│   ├── components/           # UI components
│   ├── layouts/              # Page layouts
│   ├── pages/               
│   │   └── index.astro      # Main page
│   └── assets/              # Static assets
└── package.json
```

## 🎨 Customization Guide

### 1. Personal Information

Update the following files with your information:

#### Profile Photo
- Add your profile photo as `profile.jpg` in the `public` directory
- Recommended size: 384x384px

#### Resume
- Add your resume as `resume.pdf` in the `public` directory

### 2. Content Sections

#### Hero Section (`src/components/Hero.astro`)
- Update name, title, and description
- Modify social media links
- Change profile image

#### About Section (`src/components/About.astro`)
- Update professional summary
- Modify education details
- Edit technical skills list

#### Experience Section (`src/components/Experience.astro`)
- Add your work experience:
```typescript
const experiences = [
  {
    title: "Your Position",
    company: "Company Name",
    period: "Start Date – End Date",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      // ...
    ]
  }
];
```

#### Projects Section (`src/components/Projects.astro`)
- Add your projects:
```typescript
const projects = [
  {
    title: "Project Name",
    url: "https://github.com/yourusername/project",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    image: "Project image URL"
  }
];
```

#### Certifications (`src/components/Courses.astro`)
- Add your certifications:
```typescript
const courses = [
  {
    title: "Certification Name",
    provider: "Issuing Organization",
    description: "Certification description",
    image: "Certification image URL",
    completionDate: "Month YYYY"
  }
];
```

#### Recent Events (`src/components/RecentEvents.astro`)
- Add your recent achievements:
```typescript
const events = [
  {
    title: "Event Name",
    date: "Month YYYY",
    image: "Event image URL",
    description: "Event description"
  }
];
```

### 3. Contact Form Setup

1. Sign up for [Resend](https://resend.com)
2. Create a `.env` file in the root directory:
```env
RESEND_API_KEY=your_api_key_here
```
3. Update recipient email in `src/pages/api/contact.ts`

### 4. Styling

- Colors: Edit `tailwind.config.mjs` to customize the color scheme
- Typography: Modify font settings in `src/layouts/Layout.astro`
- Dark Mode: Customize dark mode colors in `tailwind.config.mjs`

## 🛠️ Technologies Used

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [AOS](https://michalsnik.github.io/aos/)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!