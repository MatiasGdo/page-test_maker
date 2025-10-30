<div align="center">

# 📚 Estudio de Exámenes Tipo Test

### Una aplicación web moderna e interactiva para estudiar exámenes

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.x-blue.svg)](https://www.python.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[Características](#-características) •
[Instalación](#-instalación-y-uso) •
[Crear Preguntas](#-crear-nuevas-preguntas) •
[Personalización](#-personalización) •
[Contribuir](#-contribuir)

</div>

---

## ✨ Características

<table>
<tr>
<td width="50%">

### 🎯 Tipos de Preguntas
- ✅ Opción única
- ✅ Opción múltiple  
- ✅ Respuestas escritas

### 🎨 Interfaz
- 🌓 Modo oscuro/claro
- 📱 Diseño responsive
- 💫 Animaciones suaves
- ⚡ Sin necesidad de backend

</td>
<td width="50%">

### 🎲 Funcionalidades
- 🔀 Aleatorización automática
- 📊 Panel de progreso en tiempo real
- ⌨️ Atajos de teclado
- 💾 Sin base de datos necesaria

### 🚀 Rendimiento
- ⚡ Carga instantánea
- 📦 Tamaño mínimo
- 🔄 Auto-detección de archivos
- 💨 Cache inteligente

</td>
</tr>
</table>

---

## 🚀 Instalación y Uso

### Requisitos Previos

> 💡 **Nota**: Solo necesitas Python 3.x (viene preinstalado en Linux y macOS)

### 📥 Paso 1: Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/page-test_maker.git
cd page-test_maker
```

<details>
<summary><b>🐧 Linux / macOS</b></summary>

#### 1️⃣ Verificar Python

```bash
python3 --version
```

Si no está instalado:

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install python3
```

**Fedora:**
```bash
sudo dnf install python3
```

**macOS (Homebrew):**
```bash
brew install python3
```

#### 2️⃣ Iniciar servidor

```bash
python3 -m http.server 8000
```

#### 3️⃣ Abrir navegador

Visita: **http://localhost:8000**

</details>

<details>
<summary><b>🪟 Windows</b></summary>

#### 1️⃣ Verificar Python

Abre **PowerShell** o **CMD**:

```bash
python --version
```

Si no está instalado, descárgalo desde [python.org](https://www.python.org/downloads/)

> ⚠️ **Importante**: Marca "Add Python to PATH" durante la instalación

#### 2️⃣ Iniciar servidor

```bash
python -m http.server 8000
```

o

```bash
python3 -m http.server 8000
```

#### 3️⃣ Abrir navegador

Visita: **http://localhost:8000**

</details>

### 🛑 Detener el servidor

Presiona `Ctrl + C` en la terminal

---

## 📁 Estructura del Proyecto

```
page-test_maker/
│
├── 📄 index.html              # Página principal
├── 📜 script.js              # Lógica de la aplicación
├── 📖 README.md              # Este archivo
│
├── 🎨 css/                   # Estilos modulares
│   ├── variables.css         # Variables y temas
│   ├── base.css             # Reset y estilos base
│   ├── layout.css           # Grids y layouts
│   ├── components.css       # Componentes UI
│   ├── quiz.css             # Estilos del quiz
│   └── responsive.css       # Media queries
│
└── ❓ questions/             # Archivos de preguntas
    ├── questions_aws_part1.js
    ├── questions_devops.js
    ├── questions_docker.js
    └── questions_lpic_306.js
```

---

## 📝 Crear Nuevas Preguntas

### Paso 1: Crear archivo

Crea un archivo en `questions/` con el formato: **`questions_nombre_tema.js`**

### Paso 2: Añadir preguntas

<details>
<summary><b>📌 Pregunta de opción única</b></summary>

```javascript
{
    question: "¿Cuál es la capital de España?",
    answers: [
        "a) Madrid",
        "b) Barcelona", 
        "c) Valencia",
        "d) Sevilla"
    ],
    type: "opcion",
    correct: 0  // Índice de la respuesta correcta
}
```

</details>

<details>
<summary><b>📌 Pregunta de opción múltiple</b></summary>

```javascript
{
    question: "¿Cuáles son lenguajes de programación?",
    answers: [
        "a) JavaScript",
        "b) HTML",
        "c) Python",
        "d) CSS"
    ],
    type: "varias",
    correct: [0, 2]  // Múltiples respuestas correctas
}
```

</details>

<details>
<summary><b>📌 Pregunta escrita</b></summary>

```javascript
{
    question: "¿Qué comando lista archivos en Linux?",
    type: "escribir",
    correct: "ls"  // Respuesta exacta (case-insensitive)
}
```

</details>

### Ejemplo completo

```javascript
const questions_mi_tema = [
    {
        question: "¿Cuál es la capital de España?",
        answers: ["a) Madrid", "b) Barcelona", "c) Valencia", "d) Sevilla"],
        type: "opcion",
        correct: 0
    },
    {
        question: "¿Cuáles son lenguajes de programación?",
        answers: ["a) JavaScript", "b) HTML", "c) Python", "d) CSS"],
        type: "varias",
        correct: [0, 2]
    },
    {
        question: "¿Qué comando lista archivos en Linux?",
        type: "escribir",
        correct: "ls"
    }
];
```

### 📋 Tipos de preguntas

| Tipo | Valor | Descripción | Ejemplo |
|------|-------|-------------|---------|
| 🔘 Única | `"opcion"` | Solo una respuesta correcta | `correct: 0` |
| ☑️ Múltiple | `"varias"` | Varias respuestas correctas | `correct: [0, 2]` |
| ✍️ Escrita | `"escribir"` | Respuesta de texto | `correct: "ls"` |

### 🔄 Detección automática

El archivo se detecta automáticamente. El nombre se formatea así:

| Archivo | Se muestra como |
|---------|----------------|
| `questions_aws_part1.js` | **Aws Part1** |
| `questions_devops.js` | **Devops** |
| `questions_docker_basics.js` | **Docker Basics** |

---

## ⌨️ Atajos de Teclado

| Tecla | Acción |
|:-----:|--------|
| `←` | 🔙 Pregunta anterior |
| `→` | ▶️ Siguiente pregunta |
| `Enter` | ✅ Enviar respuesta |

---

## 🎨 Personalización

### Cambiar el tema de colores

Edita `css/variables.css`:

```css
:root {
    --primary-color: #3b82f6;   /* 🔵 Color principal */
    --success-color: #10b981;   /* 🟢 Color de éxito */
    --error-color: #ef4444;     /* 🔴 Color de error */
    --warning-color: #f59e0b;   /* 🟡 Color de advertencia */
}
```

### Ajustar espaciados

```css
:root {
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
}
```

### Cambiar fuentes

```css
:root {
    --font-main: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 🐛 Solución de Problemas

<details>
<summary><b>❌ El servidor no inicia</b></summary>

**Error**: `python: command not found`

**Solución**: Instala Python siguiendo las [instrucciones de instalación](#-instalación-y-uso)

---

**Error**: `Address already in use`

**Solución**: El puerto 8000 está ocupado. Usa otro puerto:

```bash
python -m http.server 8080
```

</details>

<details>
<summary><b>❌ Las preguntas no se detectan</b></summary>

Verifica:
1. ✅ El archivo está en `questions/`
2. ✅ El nombre empieza con `questions_`
3. ✅ Termina con `.js`
4. ✅ La sintaxis del array es correcta

**Solución**: Recarga con `Ctrl + Shift + R` (hard refresh)

</details>

<details>
<summary><b>❌ La caché no se actualiza</b></summary>

**Opción 1**: Hard refresh
```
Ctrl + Shift + R  (Windows/Linux)
Cmd + Shift + R   (Mac)
```

**Opción 2**: Deshabilitar caché en DevTools
1. Abre DevTools (`F12`)
2. Ve a la pestaña **Network**
3. Marca **"Disable cache"**

</details>

<details>
<summary><b>❌ El modo oscuro no funciona</b></summary>

Verifica:
1. ✅ `localStorage` está habilitado
2. ✅ Limpia la caché del navegador
3. ✅ Prueba en modo incógnito

**Solución**: Borra `localStorage` desde la consola:
```javascript
localStorage.clear()
```

</details>

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 🎉

### Cómo contribuir

1. **Fork** el repositorio
2. **Crea** una rama: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** tus cambios: `git commit -am 'Añadir nueva funcionalidad'`
4. **Push** a la rama: `git push origin feature/nueva-funcionalidad`
5. **Abre** un Pull Request

### Ideas de contribución

- 🐛 Reportar bugs
- 💡 Sugerir nuevas funcionalidades
- 📝 Mejorar la documentación
- 🎨 Mejorar el diseño UI/UX
- ✨ Añadir nuevos tipos de preguntas
- 🌍 Traducir a otros idiomas

---

## 📊 Stack Tecnológico

<div align="center">

| Tecnología | Versión | Uso |
|------------|---------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | 5 | Estructura |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | 3 | Estilos |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ES6+ | Lógica |
| ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) | 3.x | Servidor local |

</div>

### Características técnicas

- ✅ **CSS Grid & Flexbox** - Layout moderno
- ✅ **CSS Variables** - Temas dinámicos
- ✅ **ES6+ Modules** - Código organizado
- ✅ **LocalStorage API** - Persistencia de preferencias
- ✅ **Fetch API** - Carga dinámica de archivos
- ✅ **Fisher-Yates Shuffle** - Aleatorización eficiente

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver [LICENSE](LICENSE) para más detalles.

```
MIT License - Copyright (c) 2025
```

---

## 📧 Contacto y Soporte

<div align="center">

¿Tienes preguntas o sugerencias?

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-red?style=for-the-badge&logo=github)](https://github.com/tu-usuario/page-test_maker/issues)
[![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-blue?style=for-the-badge&logo=github)](https://github.com/tu-usuario/page-test_maker/discussions)

</div>

---

<div align="center">

### ⭐ Si te gusta este proyecto, dale una estrella en GitHub

**Hecho con ❤️ y ☕**

**¡Disfruta estudiando! 📚✨**

[⬆️ Volver arriba](#-estudio-de-exámenes-tipo-test)

</div>