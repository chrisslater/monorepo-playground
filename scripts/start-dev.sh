#!/bin/sh
docker-compose -f dc.dev.yml up --build "$@"