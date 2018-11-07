#!/bin/bash

source bin/env.sh

dcprod build
echo "installing frontend deps"
./bin/npm_frontend.sh i -q --no-optional
echo "installing backend deps"
./bin/npm_backend.sh i -q --no-optional
dcprod up