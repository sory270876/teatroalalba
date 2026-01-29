#!/bin/bash
set -e

echo "🎭 Desplegando Teatro Al Alba..."

# Crear red de Docker si no existe
docker network inspect web >/dev/null 2>&1 || docker network create web

# Crear archivo acme.json para certificados SSL
if [ ! -f traefik/acme.json ]; then
    touch traefik/acme.json
    chmod 600 traefik/acme.json
    echo "✅ Archivo acme.json creado"
fi

# Construir y levantar contenedores
echo "🔨 Construyendo imagen..."
docker compose build --no-cache

echo "🚀 Levantando servicios..."
docker compose up -d

echo ""
echo "✅ Despliegue completado!"
echo ""
echo "📍 Sitio disponible en: https://teatroalalba.monghit.com"
echo ""
echo "📋 Comandos útiles:"
echo "   docker compose logs -f          # Ver logs"
echo "   docker compose down             # Detener servicios"
echo "   docker compose up -d --build    # Reconstruir y desplegar"
