# juventus-ab-ca

## Prerequisites

* Git
* Use the latest version of Node (we started with Node-10); consider [NVM](https://github.com/creationix/nvm)
* We use [`yarn`; go get it](https://yarnpkg.com/en/docs/install)

## Development Environment - Getting Started

### Clone Repo

```bash
$ git clone git@github.com:cybertooth-io/juventus-ab-ca.git
```

### Running 

```bash
$ yarn install
$ yarn run start
```

Two separate processes are required to run the website in development mode.  The first thread is watching
the SASS files for changes in order to compile to CSS>  The second thread is the webserver itself. 

[This blog post helped create this setup.](https://hackernoon.com/using-sass-with-create-react-app-without-ejecting-b5f4f827ed9e)

We're also using [`concurrently`](https://www.npmjs.com/package/concurrently) for the `start` script.

## Building For Production

```bash
$ yarn run build
```
