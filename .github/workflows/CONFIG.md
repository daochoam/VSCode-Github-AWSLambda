## main.yml

1. The `name:` describes the name assigned to the project, build and publish workflow.


'on:
  push:
    branches:
    - master

jobs:
  deploy_lambda:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '12'¨`
