## Synopsis

Carousel Application Dev Project Set up.

## Installation

1. Before installing nvm, make sure you uninstall the node and remove the installed node folders.
    Steps:
    1. Uninstall from Programs & Features with the uninstaller.
    2. Look for these folders and remove them
        C:\Program Files (x86)\Nodejs
        C:\Program Files\Nodejs
        C:\Users\{User}\AppData\Roaming\npm (or %appdata%\npm)
        C:\Users\{User}\AppData\Roaming\npm-cache (or %appdata%\npm-cache)

2. Install the nvm, and make sure the nvm points to the latest LTS version of node. Follow this link in order to set up nvm in windows: https://github.com/coreybutler/nvm-windows.
3. Install node using nvm install @15.1.0, the application need the node version >=15.0.0.
4. Install yarn using npm https://classic.yarnpkg.com/en/docs/install/#windows-stable
5. Run `yarn`
6. Run yarn json-server to start the server at  http://localhost:9000/, to get the products data.
7. Run `yarn dev` to start application pointing to Dev Environment.
8. http://localhost:9090/ to access the application.


## Unit Testing

1. Install the [Jest Test Explorer](https://marketplace.visualstudio.com/items?itemName=rtbenfield.vscode-jest-test-adapter) for Visual Studio Code Extension for a better experience of the Test cases.

2. Run `yarn test` for running test cases in watch mode

## Project Structure

* src
    * interfaces
        * interface-name-interface.ts
    * components
        * custom-elements
            * element-name
                * element-name.html
                * element-name.ts
                * element-name.scss
                * element-name.test.ts
    * pages
        * page-name
            * page-name.html
            * page-name.ts
            * page-name.scss
            * page-name.test.ts
    * services
        * service-name-service.ts
        * service-name-service.test.ts
    * scss
        * global styles.scss 


## How to fix the process still running

https://stackoverflow.com/questions/39632667/how-to-kill-the-process-currently-using-a-port-on-localhost-in-windows
