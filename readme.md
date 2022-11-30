This app is live @ https://iamshubhamjangle.github.io/react-with-reduxtoolkit/

## Run the project

```
>> npm run dev
```

## Deploy

```js
add to vite.config.js:
export default defineConfig({
  base: "/<repo>/",
  ...
})

>> npm install gh-pages --save-dev

add to package.json
 "homepage": "https://<username>.github.io/<repo>/",
  ...
  "scripts": {
...
"build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
...

and then run command
>> npm run deploy
```
