# RENT.IT

RENT.IT and everything you need!

## Monorepo architecture

This [monorepo](https://en.wikipedia.org/wiki/Monorepo) uses [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://github.com/lerna/lerna).

## Setup

### Requirements

-   [Node.js](https://nodejs.org/en/)
-   [Yarn Classic](https://classic.yarnpkg.com/lang/en/)

## Run the app

1.  Go to the root package of this app and type

```sh
# This will install all npm modules for every monorepo package
yarn install
```

2. Go to /packages/app/

```sh
cd packages/app
```

3. Run the App with the following command

```sh
expo start
```

## Editor

We recommend you use [Visual Studio Code](https://code.visualstudio.com/) in combination with our [VS Code workspace](https://stackoverflow.com/questions/44629890/what-is-a-workspace-in-visual-studio-code/57134632#57134632).

In VS Code, open the [mowit.code-workspace](./mowit.code-workspace) file.
The workspace configuration file will load settings, dictionaries, recommend extensions and add debugging configurations.
