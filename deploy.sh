#!/bin/bash
git pull
docker build . -t frontend
docker stop ticket
docker rm -f ticket
docker run --hostname ticket --name ticket --network frontendnet -d frontend
