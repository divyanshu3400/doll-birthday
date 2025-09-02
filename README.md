Here’s a professional and practical README section specifically tailored for **manual deployment of a Create React App project to Netlify via the command line**:

---

# Deployment on Netlify (Manual via CLI)

This guide demonstrates how to manually deploy your **Create React App** project to Netlify using the command line.

## Prerequisites

* Node.js and npm installed
* A Netlify account ([Sign up here](https://www.netlify.com/))
* Netlify CLI installed globally:

```bash
npm install -g netlify-cli
```

* A project built and ready for production (`npm run build`)

---

## 1. Build the Project

Before deploying, you need to create an optimized production build:

```bash
npm run build
```

This will generate a `build` folder containing the minified production-ready app.

---

## 2. Login to Netlify CLI

Authenticate your CLI with Netlify:

```bash
netlify login
```

This will open a browser window for you to authorize access. Once logged in, return to the terminal.

---

## 3. Initialize a New Site (Optional)

If you haven’t connected your project to a Netlify site before, you can initialize a new site:

```bash
netlify init
```

You will be prompted to:

* Choose a team
* Name your site
* Link the current folder to the site

> If the project is already linked, skip this step.

---

## 4. Deploy the Site

To deploy the latest build folder to Netlify:

```bash
netlify deploy --dir=build
```

* `--dir=build` specifies the folder containing the production-ready app.

This will create a **draft deploy** URL. Once satisfied, you can publish it live:

```bash
netlify deploy --prod --dir=build
```

* `--prod` publishes the deployment to your live site.

---

## 5. Optional: Continuous Deployments

If you prefer, you can connect your Git repository to Netlify via the dashboard. This allows automatic deployment on every push to a branch, avoiding manual CLI deploys.

---

## 6. Verify Deployment

Once deployed, open the URL given by Netlify to verify your app is live. The standard URL format:

```
https://<your-site-name>.netlify.app
```

---

**Note:** Always ensure `npm run build` is run before deploying. Netlify serves the `build` folder, not the source code.

---