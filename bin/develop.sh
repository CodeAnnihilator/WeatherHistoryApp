#!/bin/bash

#start development server on :8000

source bin/env.sh

dcdev build
echo "installing frontend deps"
./bin/npm_frontend.sh i -q
dcdev up