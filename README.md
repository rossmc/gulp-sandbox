# Gulp Sandbox
A basic gulp dev environment which:
* Spins up a web server using gulp-connect.
* Watches, compiles and minifies(optional) SCSS to CSS with source-maps(optional).
* Watches, merges and minifies(optional) JavaScript.
* Reloads the browser automatically whenever a file is saved.

## Installation & Usage
1. Requires node.js & npm.

   https://nodejs.org/en/download

2. Open a terminal in your project directory and install the gulp packages:

    `npm install`

3. Add this host entry to your system (i.e. /etc/hosts):

   *127.0.0.1 gulp-sandbox.local*

4. Start running gulp in the terminal from your project directory.

   `sudo gulp`

   **optionally:**

   a. you can run in production mode which will minify & merge CSS & JS assets, and remove source maps:

   `sudo NODE_ENV=prod gulp`

   b. run with livereload enabled to automatically reload the browser whenever a JS or SCSS file is saved:

   `sudo NODE_RELOAD=true gulp`


5. Open http://gulp-sandbox.local, http://localhost or http://127.0.0.1 in your browser.


6. To stop the gulp processes running press **ctrl c**.
