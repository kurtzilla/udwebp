# UpStarMusic
Starter Repo for a Webpack course on Udemy

You can download this repository by using the green `Clone or Download` button on the right hand side of this page.  This will present you with the option to either clone the repository using Git, or to download it as a zip file.

If you want to download it using git, copy paste the link that is presented to you, then run the following at your terminal:

```
git clone https://github.com/StephenGrider/WebpackProject.git
cd WebpackProject
npm install
```

## Scss/Bootstrap/Material
1. include import to style/scss/_application.scss in index,js
2. import the appropriate file within _applications.scss
3. If using material, include the material icons import in index.html
4. jquery import is also commented out in index.html


# Deployment notes 
// git subtree push --prefix dist origin gh-pages
"deploy-git": "npm run build && git subtree push --prefix dist origin gh-pages",

## Heroku 

### Procfile
contains instructions for heroku deployment - specifically the command to run to start our server
web: node server.js

### Steps to compile and deploy
1. npm run build
2. git add .
3. gcmsg '...'
4. git push heroku [branch]
  
  
## AWS Elastic Beanstalk
### Steps
1. eb init (get keys from console)  
2. eb create (long wait)  
3. eb open  
4. find instance in console>elastic beanstalk instances > logs

5. eb setenv NODE_ENV=production



