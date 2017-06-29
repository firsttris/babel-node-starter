## minimal babel-node-starter

- [**Flow**](https://flow.org/) static typechecker for JavaScript
- [**Babel**](https://babeljs.io/) next generation JavaScript (transpiler for module-system & flow)
- [**Jest**](https://facebook.github.io/jest/) for testing, mocking and coverage report
- [**Webpack**](https://webpack.js.org/) module bundler
- [**Docker**](https://www.docker.com/) create container

## script jobs
```bash
npm run / yarn
dev ------------ run dev server, with hot-reload
webpack-build -- creates bundled webpack build
babel-build ---- create transpiled babel build
check-types ---- checks types
test ----------- runs tests with coverage reports
test-watch ----- runs tests with coverage & watch
docker-build --- build docker image
docker-up ------ run docker container in dev mode
```
#### Sources
##### Flow in Webstorm:
https://blog.jetbrains.com/webstorm/2016/11/using-flow-in-webstorm/  
in webstorm add a jest test manually
##### Flow:
https://github.com/facebook/flow  
https://flow.org/en/docs/install/  
https://github.com/flowtype/flow-typed  
##### Jest:
https://facebook.github.io/jest/docs/en/getting-started.html#using-babel  
##### Babel:
https://babeljs.io/docs/setup/#installation
