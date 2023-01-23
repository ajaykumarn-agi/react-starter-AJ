# Getting Started with AG SPA App
    
This React SPA Boilerplate was bootstrapped with React, React-Router, TailwindCSS, RecoilJS, Jest and React Testing Library, and ArisGlobal Design System.

## UI Tools to get started

Make sure you have VSCode and NodeJS installed on your computer.
https://confluence-arisglobal.atlassian.net/wiki/spaces/ARCH/pages/110002282/UI+Development+Tools

## UI Best Practices

Checkout this Confluence page for things to keep in mind when writing better UIs.
https://confluence-arisglobal.atlassian.net/wiki/spaces/ARCH/pages/106595093

## GitHub repo

Git clone the repo: https://github.com/ArisGlobal/AG-SPA-STARTER.git

Instructions to git clone and remove tracking/inheritance from this git repo: 

### `rmdir .git`

confirm with A to remove the tracking.

When you type in command git status now, it should say 'fatal: not a git repository'

Add git tracking back:

### `git init`


Now you can Add, Commit and Push this repo from your local computer to your newly created repo on GitHub!

Follow the instructions on the the GitHub repo page on how to push local code to a new repo.

cd in to the project directory, and you can run:

### `npm install`

### `npm run start`

Runs the APP in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## NPM Install to Consume Published Packages

Please follow the following steps to install a published npm package from GitHub Packages.  Please note, steps 1 through 4 are all one time only, once those steps are completed, there is no need to repeat those steps going forward, all you need to do is to run the CI workflow in your repo to install the packages properly.

### Step 1: Create PAT and Configure SSO

You will need a PAT (Personal Access Token) to install npm package from GitHub Packages.  To do so, go to https://github.com/settings/tokens, press “Generate new token”, be sure to assign the token read and write packages scope, let’s name the token `NPM_TOKEN`, copy the token value for steps following.

Since we use SAML SSO for our github repos, we need to authorize this new PAT for use.  Be sure to click on “Configure SSO” for this new token, then to the right of the organization “ArisGlobal”, click on “Authorize”, that’s it! By authorizing, owners of ArisGlobal will be able to see this personal access token’s access scopes and when it was last used.

### Step 2: Add NPM_TOKEN to GitHub repository secret

This step is needed for the CI workflow for your repo.  It needs to be configured once only.  If this is the first time you are trying to get your CI workflow up and running, be sure to follow the instruction below.  If your CI workflow is operating smoothly, no further action is needed, skip to Step 3.

You need to add a new GitHub repository secret. To create a new repository secret in GitHub, ensure you have admin access to your repo, or work with someone who has admin access to your repo, navigate to Settings -> Secrets (left navigation) -> Actions -> New Repository Secrets, and create a new secret there, with name as `NPM_TOKEN` and value as the token value you just copied from step 1.

### Step 3: Create new environment variable for NPM_TOKEN

This step is needed for your local build for your app.  It needs to be configured once only.  If this is the first time you are trying to build your app locally, be sure to follow the instruction below.  If your local build runs smoothly, no further action is needed, skip to Step 4.

#### For Windows

Navigate to “Edit Environment Variables for your account”, add new user variable with name `NPM_TOKEN` and value as the PAT you just copied from the last step. Click OK to save it.

#### For Mac

There are multiple ways to create a new environment variable on Mac.  Here is one of the ways.

You can create a file named `.profile` by opening a terminal and issuing the command `touch .profile`, Close terminal.

Open `.profile` in a plain-text editor. You can also use `nano .profile` in a terminal window (current directory should be your home). Insert a line export `NPM_TOKEN=<TOKEN>`, replace `<TOKEN>` with the PAT you copied from step 1. Save, exit `nano` and quit a running terminal.

Open terminal and issue the command `env` to see all environment variables. Verify your token is indeed added. That’s it!


### Step 4: Create .npmrc file

If your project is cloned from AG-SPA-STARTER, you can skip this step.  If you don’t have a `.npmrc` file in the directory where your `package.json` resides, you need to add it.  Content of `.npmrc` is as follows:

```bash
@arisglobal:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

This tells npm to install any packages with a name space of `@arisglobal` from GitHub Packages.  And it has the right permission with the `NPM_TOKEN` extracted from environment variable.


### Step 5: Run CI workflow to install your package from GitHub Packages

Now you can trigger CI workflow in your repo by raising a PR. Click on "Actions" tab in your repo, check the status of your CI workflow, if green which means it has been executed successfully, your package has been installed successfully from GitHub Packages.


Happy Coding!

