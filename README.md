# 🌤️ Weather App  
Aplicación web que permite consultar el clima de cualquier ciudad usando la API de OpenWeatherMap.  
Incluye interfaz amigable, validación de datos, íconos dinámicos y manejo de errores.

---

## 📌 Características principales
- ✔ Buscar clima por nombre de ciudad  
- ✔ Interfaz responsiva con **Bootstrap 5**- ✔ Validación en tiempo real  
- ✔ Notificaciones modernas con **SweetAlert2**  
- ✔ Animaciones con **animate.css**  
- ✔ Simulación de datos locales en modo desarrollo (`example-response.json`)  

---

## 🧱 Estructura del proyecto


---

## 🚀 Cómo usar el proyecto

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/weather-app.git

### 2️⃣ Abrir el proyecto

Abre directamente el archivo:
index.html
o usa una extensión como Live Server.

3️⃣ Buscar una ciudad

Escribe una ciudad en el campo de búsqueda y presiona Enter o el botón Buscar.
🔧 Configurar la API (modo producción)

Para usar datos reales, edita en scripts.js la línea:
//makeRequest(city);
getLocalData();

Cámbiala por:
makeRequest(city);

Y coloca tu API key aquí:
const apiKey = "TU_API_KEY_AQUI";

🧠 Tecnologías utilizadas

HTML5

CSS3 + Bootstrap 5

JavaScript (jQuery)

SweetAlert2

animate.css

OpenWeatherMap API

🖼️ Vista previa

<https://codi3go.github.io/Weather/>


