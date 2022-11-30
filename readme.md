This app is live @ https://iamshubhamjangle.github.io/react-with-reduxtoolkit/

## Run the project

```
>> npm run dev
```

## Deploy

```js
// Step 1: add to vite.config.js:
export default defineConfig({
  base: "/<repo>/",
  ...
})


// Step 2: Add required package
>> npm install gh-pages --save-dev


// Step 3: Add to package.json
 "homepage": "https://<username>.github.io/<repo>/",
  ...
  "scripts": {
...
"build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
...


// Step 4: Run deploy command
>> npm run deploy


// Step 5: Go to github pages setting: Switch to gh-pages branch if present
```
