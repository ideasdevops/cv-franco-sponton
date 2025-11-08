#!/bin/bash

# Script de despliegue rápido para CV Online
# Uso: ./deploy.sh [opción]

set -e

echo "🚀 Despliegue CV Online - Franco Sponton"
echo "========================================"
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para mostrar ayuda
show_help() {
    echo "Opciones disponibles:"
    echo "  build     - Construir imagen Docker"
    echo "  run       - Ejecutar contenedor localmente"
    echo "  stop      - Detener contenedor"
    echo "  logs      - Ver logs del contenedor"
    echo "  clean     - Eliminar contenedor e imagen"
    echo "  full      - Build + Run completo"
    echo ""
}

# Función para construir
build() {
    echo -e "${BLUE}📦 Construyendo imagen Docker...${NC}"
    docker build -t cv-franco .
    echo -e "${GREEN}✅ Imagen construida exitosamente${NC}"
}

# Función para ejecutar
run() {
    echo -e "${BLUE}▶️  Iniciando contenedor...${NC}"
    docker stop cv-franco 2>/dev/null || true
    docker rm cv-franco 2>/dev/null || true
    docker run -d -p 8080:80 --name cv-franco cv-franco
    echo -e "${GREEN}✅ CV online en: http://localhost:8080${NC}"
}

# Función para detener
stop() {
    echo -e "${YELLOW}⏹️  Deteniendo contenedor...${NC}"
    docker stop cv-franco 2>/dev/null || true
    echo -e "${GREEN}✅ Contenedor detenido${NC}"
}

# Función para logs
logs() {
    echo -e "${BLUE}📋 Mostrando logs...${NC}"
    docker logs -f cv-franco
}

# Función para limpiar
clean() {
    echo -e "${YELLOW}🧹 Limpiando contenedor e imagen...${NC}"
    docker stop cv-franco 2>/dev/null || true
    docker rm cv-franco 2>/dev/null || true
    docker rmi cv-franco 2>/dev/null || true
    echo -e "${GREEN}✅ Limpieza completada${NC}"
}

# Función full
full() {
    build
    run
    echo ""
    echo -e "${GREEN}🎉 CV desplegado exitosamente!${NC}"
    echo -e "${BLUE}Accede en: http://localhost:8080${NC}"
}

# Procesar argumentos
case "${1:-help}" in
    build)
        build
        ;;
    run)
        run
        ;;
    stop)
        stop
        ;;
    logs)
        logs
        ;;
    clean)
        clean
        ;;
    full)
        full
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo -e "${YELLOW}Opción desconocida: $1${NC}"
        show_help
        exit 1
        ;;
esac

