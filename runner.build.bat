@echo off

echo "Build..."
powershell -Command "docker-compose -f docker-compose.build.yml up --build"