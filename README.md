# bb-fxcm

Requirements
------------

###NodeJS
Server-side JavaScript. Required for build process. [Download]('http://nodejs.org/download/')

###Compass
SASS library/CSS pre-processor (requires [Ruby]('https://www.ruby-lang.org/en/downloads/')). Enter the following from the command line to install:
````
gem update --system
gem install compass
````

Project Setup
-------------
1. Go to the local project's root directory by running `cd fxcm-local-project`.
2. Inside the project's root directory, run `npm install`. The `npm install` command downloads and installs any additional node modules needed to run the tasks that are required for the build process - defined in **package.json**.
3. Launch the development server by running `npm start` from the project's root directory. This should open a browser window at [http://localhost:4200]('http://localhost:4200') and reload the page any time a change is saved to any html, js, css/sass, or image within **app**, **lib** or **theme** folder.








## Commands 
npm run package:apps && bb-import dist/provisioning-packages/fxcm-app.zip --portal-host localhost --portal-port 8080 --portal-version 6