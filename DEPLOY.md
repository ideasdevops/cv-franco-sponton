# 🚀 Despliegue del CV Online - Franco Sponton

Guía completa para poner el CV online en diferentes plataformas.

## 📋 Opciones de Despliegue

### 🐳 Opción 1: EasyPanel (Recomendado - Ya lo usas)

#### Configuración en EasyPanel:

1. **Crear Nueva Aplicación**
   - Tipo: **SSH Git** o **Docker**
   - Repositorio: `git@github.com:ideasdevops/cv-franco.git` (o tu repo)
   - Branch: `main`
   - Dockerfile: `Dockerfile`
   - Puerto: `80`

2. **Variables de Entorno**
   - No se requieren variables de entorno para este sitio estático

3. **Volúmenes**
   - No se requieren volúmenes (sitio estático)

4. **Dominio**
   - Configurar dominio: `cv.ideasdevops.com` o `franco.ideasdevops.com`
   - O usar el dominio principal: `ideasdevops.com/cv`

#### Comandos Rápidos:

```bash
# Si tienes el código localmente
cd cv-franco
docker build -t cv-franco .
docker run -d -p 8080:80 --name cv-franco cv-franco

# Acceder en: http://localhost:8080
```

---

### 🌐 Opción 2: GitHub Pages (Gratis y Fácil)

1. **Crear repositorio en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "CV Online"
   git remote add origin git@github.com:ideasdevops/cv-franco.git
   git push -u origin main
   ```

2. **Activar GitHub Pages:**
   - Ve a Settings > Pages
   - Source: `main` branch
   - Folder: `/ (root)`
   - Guardar

3. **Acceder:**
   - URL: `https://ideasdevops.github.io/cv-franco/`
   - O configurar dominio personalizado: `cv.ideasdevops.com`

---

### ⚡ Opción 3: Netlify (Gratis, con SSL automático)

1. **Opción A: Desde GitHub**
   - Conectar repositorio en Netlify
   - Build command: (dejar vacío)
   - Publish directory: `/`
   - Deploy

2. **Opción B: Drag & Drop**
   - Ir a https://app.netlify.com/drop
   - Arrastrar la carpeta `cv-franco`
   - Listo!

3. **Configurar dominio:**
   - Settings > Domain management
   - Agregar dominio: `cv.ideasdevops.com`
   - Configurar DNS según instrucciones

---

### ▲ Opción 4: Vercel (Gratis, muy rápido)

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Desplegar:**
   ```bash
   cd cv-franco
   vercel
   ```

3. **O desde la web:**
   - Conectar repositorio en vercel.com
   - Deploy automático

---

### 🖥️ Opción 5: Servidor Propio con Nginx

1. **Copiar archivos:**
   ```bash
   sudo cp CV_Profesional_Franco_Sponton_2025.html /var/www/html/index.html
   ```

2. **Configurar Nginx:**
   ```nginx
   server {
       listen 80;
       server_name cv.ideasdevops.com;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **SSL con Let's Encrypt:**
   ```bash
   sudo certbot --nginx -d cv.ideasdevops.com
   ```

---

## 🚀 Despliegue Rápido con Docker

### Build y Run Local:

```bash
# Construir imagen
docker build -t cv-franco .

# Ejecutar contenedor
docker run -d -p 8080:80 --name cv-franco cv-franco

# Ver logs
docker logs cv-franco

# Detener
docker stop cv-franco
docker rm cv-franco
```

### Docker Compose:

Crear `docker-compose.yml`:

```yaml
version: '3.8'

services:
  cv:
    build: .
    container_name: cv-franco
    ports:
      - "80:80"
    restart: unless-stopped
```

Ejecutar:
```bash
docker-compose up -d
```

---

## 📝 Configuración de Dominio

### Para usar `cv.ideasdevops.com`:

1. **DNS Records:**
   ```
   Tipo: A
   Nombre: cv
   Valor: IP_DEL_SERVIDOR
   TTL: 3600
   ```

2. **O CNAME:**
   ```
   Tipo: CNAME
   Nombre: cv
   Valor: tu-servidor.netlify.app (o similar)
   TTL: 3600
   ```

---

## ✅ Checklist de Despliegue

- [ ] Código en repositorio Git
- [ ] Dockerfile creado y probado
- [ ] Dominio configurado (opcional)
- [ ] SSL/HTTPS configurado
- [ ] Pruebas de navegación
- [ ] Enlaces funcionando
- [ ] Responsive en móvil
- [ ] Performance optimizado

---

## 🔧 Optimizaciones Post-Despliegue

1. **Comprimir HTML:**
   ```bash
   # Instalar herramienta
   npm install -g html-minifier
   
   # Minificar
   html-minifier --collapse-whitespace --remove-comments \
     CV_Profesional_Franco_Sponton_2025.html > index.html
   ```

2. **Agregar Analytics:**
   - Google Analytics
   - Plausible Analytics (privado)

3. **SEO:**
   - Meta tags
   - Open Graph
   - Schema.org

---

## 📞 Soporte

Si tienes problemas con el despliegue:
1. Revisar logs del contenedor/servidor
2. Verificar configuración de DNS
3. Comprobar firewall/puertos
4. Revisar certificados SSL

---

**¡Tu CV estará online en minutos!** 🎉

