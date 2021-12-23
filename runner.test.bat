@echo off

echo "Test..."
powershell -Command "docker-compose -f docker-compose.test.yml up --build"