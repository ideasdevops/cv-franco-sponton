# Dockerfile para CV Profesional - Franco Sponton
# Sitio estático HTML con Nginx

FROM nginx:alpine

# Metadatos
LABEL maintainer="ideas DevOps"
LABEL version="1.0.0"
LABEL description="CV Profesional Online - Franco Sponton"

# Copiar el archivo HTML al directorio de nginx
COPY CV_Profesional_Franco_Sponton_2025.html /usr/share/nginx/html/index.html

# Configuración de nginx para SPA (opcional, para rutas con hash)
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Nginx se inicia automáticamente
CMD ["nginx", "-g", "daemon off;"]

