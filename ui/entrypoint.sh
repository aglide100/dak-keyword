#!/bin/bash
set -eu



function makeEnvFile() {
	envsubst < /etc/nginx/template/env/env.template > /usr/share/nginx/html/env.html
}

makeEnvFile

exec "$@"
