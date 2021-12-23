@echo off

echo "Production..."
powershell -Command "docker-compose -f docker-compose.prod.yml up --build"