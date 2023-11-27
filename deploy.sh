#!/bin/bash
git pull
# ==================== Docker Compose build ====================
docker-compose up --build -d
# ==================== DockerFile build ====================
# docker stop ticket
# docker rm -f ticket
# docker build . -t frontend
# docker run --hostname ticket --name ticket --network frontendnet -d frontend
