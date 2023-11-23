#!/bin/bash
git pull
docker stop ticket
docker rm -f ticket
docker build . -t fronten
docker run --hostname ticket --name ticket --network frontendnet -d frontend
