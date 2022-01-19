# clibs.org ![Registry](https://github.com/clibs/website/workflows/Registry/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/c3894dcb-064a-4dcd-a475-92af818ac657/deploy-status)](https://app.netlify.com/sites/clibs/deploys)

> The source code for [clibs.org](https://www.clibs.org/).

## Development

### Getting started

To work on the site locally, first install [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/).

Next install the project's dependencies with:

```
yarn
```

Finally, start [Webpack's development server](https://webpack.js.org/configuration/dev-server/) with:

```
yarn dev
```

### Updating the registry

The registry is [automatically updated](https://github.com/clibs/website/blob/master/.github/workflows/registry.yml) every 6 hours.

To manually rebuild the registry:

1. [Get a GitHub token](https://github.com/settings/tokens/new)
1. Run `yarn registry --token=YOUR_TOKEN`

## Deployment

Netlify deploys all commits that land in the `master` branch by running the `scripts/netlifyBuild.sh` program. This will perform a "regular" build and optionally "pre-render" all pages as static HTML.

## License

MIT
