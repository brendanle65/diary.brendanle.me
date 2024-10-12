# diary.brendanle.me

The official blog of Brendan Le. Live at [diary.brendanle.me](https://diary.brendanle.me).

## Directory

- [Overview](#overview)
- [Branches](#branches)
- [Yarn Scripts](#yarn-scripts)
- [Design Rationale](#design-rationale)
- [Hosting](#hosting)

## Overview

diary.brendanle.me is a static site built using NextJS and deployed on Firebase Hosting.

## Branches

1. `production` The currently live version.
2. `dev` The version currently under development, including all new features or articles intended for the next site version.
3. `dev-<name>` Used for working on specific articles or features, which, when ready, will be merged into dev.

## Yarn Scripts

1. `dev` Starts a development server at localhost, enabling local work with hot reloading and detailed error messages. It compiles the project, watches for changes, and auto-refreshes the browser.
2. `start` Starts the production server, serving your built application. Unlike the dev script, the start script runs the optimized production build.
3. `build:` Compiles the application into an optimized production build, ready for deployment.
4. `lint` Runs a code linter to check for syntax and style issues, ensuring code quality and consistency.
5. `deploy:preview` Deploys the build (`/out`) to a specified preview channel, creating a temporary, shareable version of your site for testing and feedback before deploying to your live site. Example Usage: `yarn run deploy:preview article-draft`
6. `deploy:live` Pushes changes from a specified preview channel to the live site. Example Usage: `$env:PREVIEW = 'article-draft'; yarn deploy`
7. `deploy:delete` Deletes a specified preview channel. Example Usage: `yarn run deploy:delete article-draft`

## Design Decisions

1. We abandon the idea of perfect encapsulation by exposing DOM elements for selection via SCSS or TypeScript, prefixing their className or id with "public-". This approach grants full control over the component for animations, custom styling, and DOM manipulation without cluttering the props interface with countless combinations or unnecessary prop drilling.

2. Any folder with parentheses, such as (PostsByDate), is private. This means its exports are intended to be used only by a parent component that is publicly exported.

3. Given the complexity and variety of pages (styles, animations, layouts, etc.), a Headless CMS is not suitable. As a result, all articles are written directly as JSX components. The published and last edited dates of said articles must be updated manually, as we avoid using automated timestamping with GitHub Actions due to the magnitude of complexity and headaches that will bring.

## Hosting

Since this is being deployed on a subdomain (diary.brendanle.me instead of brendanle.me), the Firebase configuration requires a slight adjustment.

In `.firebaserc`:

```js
"targets": {
    "brendanle-me": {
      "hosting": {
        "diary": [
          "diary-brendanle-me"
        ]
      }
    }
  },
```

We need to specify that the `diary` target should point to the site with the ID `diary-brendanle-me`.

The target is defined in the `firebase.json` file like this:

```js
{
  "hosting": {
    "target": "diary",
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

For more details, see [Hosting Multiple Sites on Firebase](https://firebase.google.com/docs/hosting/multisites).
