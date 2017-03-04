
![](./src/assets/logo.png)

Porky - Joyous Pig Latin Generator
==================================

Porky is a [Pig Latin](https://en.wikipedia.org/wiki/Pig_Latin) generator made
to demonstrate a full Continuous Integration (CI) pipeline. 

It's done as part of the course [WASP Software Engineering](http://wasp-sweden.org/custom/uploads/2017/02/Assignment-2-Tool-Chain.pdf)

Build Status
------------
[CircleCI build status](https://circleci.com/gh/lindwaltz/course_se17_pig_latin/tree/master): [![Circle CI status](https://circleci.com/gh/lindwaltz/course_se17_pig_latin.png?circle-token=6091784b8c3f7d070ddeda41db3487e69dfb4089)](https://circleci.com/gh/lindwaltz/course_se17_pig_latin/tree/master)

Running
-------
Use our Continously Deployed website at https://lindwaltz.github.io/course_se17_pig_latin/

Developing
----------

### Prerequisites (command line)

If you want to run and develop directly on your machine, make sure to install node and yarn:

* [nodejs](https://nodejs.org/)
* (optional) [yarn](https://yarnpkg.com/lang/en/docs/cli/install/)

### Prerequisites (docker)

Alternatively, you can get up and running user [docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/)

```bash
docker-compose up
```

### Starting development

From the commandline:

```bash
# install dependencies
# note: use 'npm install' if you didn't install yarn
yarn

# serve with hot reload at localhost:8080
npm run dev

# continuously test (unit tests)
npm run unitlive
```

Other commands that might be useful:
```bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run linter
npm run lint
```

### Folder structure

The three most important files are:

- `./src/lib/pigspeak.js` -- pig latin module
- `./src/App.vue` -- user interface code
- `./unit/specs/pigspeak.spec.js` -- pig latin tests

The rest of the folders, in brief:

```bash
./build  # code for building and running
./src    # source code
./static # static resources (i.e, images, css)
./test   # test-related code
```

About
-----
Demonstration project part of the course [WASP Software Engineering](http://wasp-sweden.org/custom/uploads/2017/02/Assignment-2-Tool-Chain.pdf)

Done by
- Martin Svenson
- Apostolia Tsirikoglou
