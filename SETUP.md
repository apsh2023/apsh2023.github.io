# 📋 Setup Instructions

Follow these steps to get your GitHub Pages portfolio up and running:

## Step 1: Enable GitHub Pages

1. **Go to your repository on GitHub**
   - Navigate to `https://github.com/apsh2023/apsh2023.github.io`

2. **Open Repository Settings**
   - Click on the "Settings" tab (usually at the top right of the repo)

3. **Find Pages Section**
   - Scroll down to "Pages" in the left sidebar
   - Or go directly to: `https://github.com/apsh2023/apsh2023.github.io/settings/pages`

4. **Configure GitHub Pages**
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Choose `main` (or `master` if that's your default branch)
   - **Folder**: Select `/ (root)`
   - Click **Save**

5. **Wait for Deployment**
   - GitHub will show a message: "Your site is ready to be published at https://apsh2023.github.io"
   - Initial deployment may take 5-10 minutes

## Step 2: Verify Your Site

1. **Visit Your Site**
   - Go to: `https://apsh2023.github.io`
   - You should see your portfolio website

2. **Check All Sections**
   - Navigation works
   - All sections load properly
   - Contact form displays correctly
   - Projects section shows example projects

## Step 3: Customize Your Content (Optional)

### Update Personal Information
Edit these files to personalize your portfolio:

1. **index.html** - Update:
   - Your name and title in the hero section
   - About section content
   - Contact information
   - Skills and experience

2. **projects.json** - Add your actual projects:
   ```json
   {
     "title": "Your Real Project",
     "description": "Description of what you built",
     "technologies": ["Tech1", "Tech2"],
     "github": "https://github.com/yourusername/yourproject",
     "demo": "https://yourproject.com",
     "featured": true
   }
   ```

### Update Contact Form
To make the contact form functional:

1. **Sign up for Formspree** (free):
   - Go to [formspree.io](https://formspree.io)
   - Create an account
   - Create a new form
   - Copy your form endpoint

2. **Update the form in index.html**:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID.

## Step 4: Adding New Projects

The easiest way to add projects is by editing `projects.json`:

1. **Open projects.json** in the GitHub web editor
2. **Add your project** to the array:
   ```json
   {
     "title": "New Awesome Project",
     "description": "What this project does and why it's cool",
     "technologies": ["React", "Node.js", "MongoDB"],
     "github": "https://github.com/apsh2023/awesome-project",
     "demo": "https://awesome-project.netlify.app",
     "image": null,
     "featured": true
   }
   ```
3. **Commit the changes** - the site will update automatically!

## Step 5: Custom Domain (Optional)

If you want to use your own domain (like `yourname.com`):

1. **Buy a domain** from any registrar
2. **Add CNAME file** to your repository:
   - Create a file named `CNAME` (no extension)
   - Content: `yourdomain.com` (just the domain, no http/https)
3. **Configure DNS** at your domain registrar:
   - Add a CNAME record pointing to `apsh2023.github.io`
4. **Update in GitHub Pages settings**:
   - Go back to Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## 🎉 That's It!

Your portfolio is now live and automatically updates when you push changes to GitHub!

## 🔧 Troubleshooting

### Site Not Loading?
- Wait 10-15 minutes for initial deployment
- Check if GitHub Pages is enabled in Settings
- Make sure the branch is set to `main`

### Changes Not Showing?
- GitHub Pages can take 5-10 minutes to update
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check the Actions tab for any deployment errors

### Contact Form Not Working?
- Make sure you've set up Formspree correctly
- Check the form action URL in index.html
- Test with a simple message first

## 📞 Need Help?

If you run into any issues, feel free to:
- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Open an issue in the repository
- Contact me at apurva.89.sharma@gmail.com

Good luck with your new portfolio! 🚀