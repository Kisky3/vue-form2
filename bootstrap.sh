#!/bin/sh

BASE_DIR=$(cd $(dirname ${0}); pwd)
PACKAGE_JSON="${BASE_DIR}/package.json"

HOST_ADDR=${HOST_ADDR}

case "$1" in
    "dev")
        yarn 'serve:dev';;

    "local")
        yarn 'serve:local';;

    *)
        yarn ${1};;
esac
