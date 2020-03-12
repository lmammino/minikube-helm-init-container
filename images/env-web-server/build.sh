#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

eval $(minikube docker-env)
docker build -t test-env-web-server ${DIR}
