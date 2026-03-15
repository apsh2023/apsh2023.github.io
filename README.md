# 🚀 Apurva Sharma - Portfolio Website

A modern, responsive portfolio website for showcasing QA/Testing skills and projects. Built with vanilla HTML, CSS, and JavaScript for optimal performance and easy maintenance.

## ✨ Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Easy Project Management**: Add new projects by simply editing `projects.json`
- **Automatic Deployment**: GitHub Actions pipeline for seamless deployment
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Performance Optimized**: Fast loading with minimal dependencies

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Deployment**: GitHub Pages with GitHub Actions
- **Version Control**: Git & GitHub

## 📂 Project Structure

```
apsh2023.github.io/
├── index.html          # Main portfolio page
├── style.css           # All styling
├── script.js           # Interactive functionality
├── projects.json       # Project data (easy to edit!)
├── _config.yml         # Jekyll configuration
├── .github/
│   └── workflows/
│       └── deploy.yml  # Deployment automation
└── README.md          # This file
```

## 🎯 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/apsh2023/apsh2023.github.io.git
   cd apsh2023.github.io
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `master`
   - The site will be available at `https://apsh2023.github.io`

3. **Customize your content**
   - Edit personal information in `index.html`
   - Add your projects in `projects.json`
   - **Add your profile picture**: Upload `profile-image.jpeg` to the root directory
   - Customize colors/styling in `style.css`

## 📋 Adding New Projects

Adding projects is super easy! Just edit the `projects.json` file:

```json
{
  "title": "Your Project Title",
  "description": "Brief description of your project and its key features.",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "github": "https://github.com/username/repo",
  "demo": "https://your-demo-link.com",
  "image": null,
  "featured": true
}
```

### Project Fields Explained

- **title**: The name of your project
- **description**: A brief explanation of what the project does
- **technologies**: Array of technologies/tools used
- **github**: Link to GitHub repository (optional)
- **demo**: Link to live demo (optional)
- **image**: Project image URL (optional, shows icon if null)
- **featured**: Whether to highlight this project

## 🎨 Customization

### Personal Information
Edit the following sections in `index.html`:
- Hero section (name, title, description)
- About section (bio, highlights)
- Skills section (add/remove skills)
- Experience section (work history)
- Contact information

### Colors & Styling
Main colors are defined in `style.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --background-color: #ffffff;
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `style.css`
3. Update navigation menu if needed
4. Add smooth scrolling target in JavaScript

## 📸 Adding Your Profile Picture

1. **Prepare your image**: Square format (1:1 ratio), 500x500px or larger
2. **Name it**: `profile-image.jpeg`
3. **Upload**: Add to the root directory of your repository
4. **Done!**: The image will automatically appear in the hero section

For detailed instructions, see [PROFILE-IMAGE.md](PROFILE-IMAGE.md).

> **Tip**: If the image doesn't load, the original icon placeholder will show as a fallback.

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the main branch. The GitHub Actions workflow:

1. **Triggers on**: Push to main/master branch
2. **Builds**: Uses Jekyll to process the site
3. **Deploys**: Publishes to GitHub Pages
4. **Access**: Available at `https://apsh2023.github.io`

### Manual Deployment
If you need to deploy manually:
1. Go to Actions tab in your GitHub repository
2. Click "Deploy to GitHub Pages"
3. Click "Run workflow"

## 📱 Contact Form Setup

The contact form is currently set up with a placeholder action. To make it functional:

1. **Using Formspree** (Recommended):
   - Sign up at [Formspree.io](https://formspree.io)
   - Replace `YOUR_FORM_ID` in the form action with your Formspree ID
   - Update the action URL in `index.html`

2. **Using Netlify Forms**:
   - Deploy to Netlify
   - Add `netlify` attribute to the form
   - Netlify will handle form submissions automatically

## 🔧 Development

### Local Development
1. Open `index.html` in your browser, or
2. Use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Testing
- Test responsiveness using browser dev tools
- Check all links and navigation
- Validate HTML at [validator.w3.org](https://validator.w3.org)
- Test performance with Lighthouse

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Loading Time**: < 2 seconds on 3G
- **Image Optimization**: WebP format recommended
- **Caching**: Browser caching enabled via headers

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements that others might benefit from:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Icons**: [Font Awesome](https://fontawesome.com)
- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Inspiration**: Modern portfolio design trends

---

**Made with ❤️ by Apurva Sharma**

Need help or have questions? Feel free to [reach out](mailto:apurva.89.sharma@gmail.com)!