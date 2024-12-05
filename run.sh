#!/usr/bin/env bash

import="data:text/javascript,\
import { register } from 'node:module';\
import { pathToFileURL } from 'node:url';\
register('babel-register-esm', pathToFileURL('./'));\
"

if [[ -z "$1" ]]; then
	node --import "$import"
else
	node --import "$import" src/$1.js
fi
