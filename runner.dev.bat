@echo off

echo "Development..."
powershell -Command "docker-compose -f docker-compose.dev.yml up --build"