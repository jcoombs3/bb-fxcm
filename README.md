# bb-fxcm

Requirements
------------

### NodeJS
Server-side JavaScript. Required for build process. [Download]('http://nodejs.org/download/')

### Compass
SASS library/CSS pre-processor (requires [Ruby]('https://www.ruby-lang.org/en/downloads/')). Enter the following from the command line to install:
````
gem update --system
gem install compass
````


Project Setup
-------------

1. Go to the local project's root directory by running `cd fxcm-local-project`.
2. Inside the project's root directory, run `npm install`. The `npm install` command downloads and installs any additional node modules needed to run the tasks that are required for the build process - defined in **package.json**.
3. Launch the development server by running `npm start` from the project's root directory. This should start a browser session at [http://localhost:4200]('http://localhost:4200') and reload the page any time a change is saved to any html, js, css/sass, or image within **app**, **lib** or **theme** folder.


Development
-----------

### Styles
The main SASS file for the project is **themes/fxcm-theme/scss/main.scss** all other SASS files (partials) are imported to this file.

All partials should be prefixed with and _. ex: ( _partialName ). They can be imported into the **main.scss** file by using `@import partialName` rule. The underscore does not need to be included when importing.


Directory Setup
-----------

For development, we will be working within the **/app** and **/libs** directory. **/libs** includes our custom modules used to override pre-existing backbase components. **/app* is where our main app code is contained. 


CXP Integration
-----------

### Local Setup 
Follow this backbase documentation to setup a local CX6 instance. [Backbase documentation here]('https://community.backbase.com/documentation/forms/latest/prepare_local_dev_env')

### Import Experience
From the root directory of fxcm-local-project 
```
npm run package:apps
```
All production code is output to the **dist/** directory
```
bb-import dist/provisioning-packages/fxcm-app.zip --portal-host localhost --portal-port 8080 --portal-version 6
```
***.zip*** file will be imported into your CX6 instance. From there, you can see all your changes either in your portal or in the Enterprise catalog of CX6.
```
npm run package:apps && bb-import dist/provisioning-packages/fxcm-app.zip --portal-host localhost --portal-port 8080 --portal-version 6
```