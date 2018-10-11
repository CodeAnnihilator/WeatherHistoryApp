#!/bin/bash

#start development server on :8000

source bin/env.sh

dcdev build
echo "installing frontend deps"
./bin/npm_frontend.sh i -q
echo "installing backend deps"
./bin/npm_backend.sh i -q
dcdev up