# 📚 Test Maker - Generador de Cuestionarios

Una aplicación web para crear y realizar cuestionarios interactivos con múltiples tipos de preguntas.

## 🚀 Características

- ✅ **Múltiples tipos de pregunta**: Opción única, múltiples opciones, y respuesta escrita
- 🔄 **Preguntas aleatorias**: Las preguntas se mezclan automáticamente
- 📊 **Resultados detallados**: Muestra respuestas correctas e incorrectas
- 📁 **Múltiples archivos**: Soporte para diferentes sets de preguntas
- 🎯 **Navegación intuitiva**: Botones de anterior, enviar y siguiente
- 🎨 **Interfaz clara**: Visual mejorado para identificar respuestas correctas

## 🛠️ Instalación y Uso

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/MatiasGdo/page-test_maker.git
   cd page-test_maker
   ```

2. **Inicia un servidor web local**:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Python 2
   python -m SimpleHTTPServer 8000
   
   # Con Node.js (si tienes http-server instalado)
   npx http-server
   ```

3. **Abre en tu navegador**: `http://localhost:8000`

## 📝 Cómo Crear Archivos de Preguntas

### Estructura del Archivo

Crea archivos JavaScript en el directorio `questions/` con el siguiente formato:

```javascript
// Array de preguntas para el cuestionario
const questions_[NOMBRE] = [
    {
        question: "Tu pregunta aquí",
        type: "opcion", // o "varias" o "escribir"
        answers: ["A. Opción 1", "B. Opción 2", "C. Opción 3", "D. Opción 4"],
        correct: 0 // índice de la respuesta correcta (0 = primera opción)
    },
    // ... más preguntas
];
```

### Tipos de Pregunta

#### 1. **Opción Única** (`type: "opcion"`)
```javascript
{
    question: "¿Cuál es la capital de España?",
    type: "opcion",
    answers: ["A. Madrid", "B. Barcelona", "C. Valencia", "D. Sevilla"],
    correct: 0 // Madrid (índice 0)
}
```

#### 2. **Múltiples Opciones** (`type: "varias"`)
```javascript
{
    question: "¿Cuáles son lenguajes de programación? (selecciona todas las correctas)",
    type: "varias",
    answers: ["A. JavaScript", "B. HTML", "C. Python", "D. CSS", "E. Java"],
    correct: [0, 2, 4] // JavaScript, Python, Java
}
```

#### 3. **Respuesta Escrita** (`type: "escribir"`)
```javascript
{
    question: "¿Cuál es el comando Linux para listar archivos?",
    type: "escribir",
    correct: "ls" // respuesta exacta esperada
}
```

### Convenciones de Nomenclatura

- **Nombre del archivo**: `questions_[TEMA].js` (ej: `questions_javascript.js`)
- **Nombre de la variable**: `questions_[TEMA]` (debe coincidir con el nombre del archivo)
- **Ubicación**: Directorio `questions/`

### Ejemplos Completos

#### Archivo: `questions/questions_javascript.js`
```javascript
// Array de preguntas para el cuestionario
const questions_javascript = [
    {
        question: "¿Qué significa 'DOM' en JavaScript?",
        type: "opcion",
        answers: [
            "A. Document Object Model", 
            "B. Data Object Management", 
            "C. Dynamic Object Method", 
            "D. Document Operation Mode"
        ],
        correct: 0
    },
    {
        question: "¿Cuáles son tipos de datos primitivos en JavaScript?",
        type: "varias",
        answers: [
            "A. string", 
            "B. number", 
            "C. object", 
            "D. boolean", 
            "E. undefined"
        ],
        correct: [0, 1, 3, 4]
    },
    {
        question: "¿Qué palabra clave se usa para declarar una variable constante?",
        type: "escribir",
        correct: "const"
    }
];
```

## 🎯 Tutorial Paso a Paso

### Crear tu Primer Set de Preguntas

1. **Crea un nuevo archivo** en `questions/questions_mi_tema.js`

2. **Copia la estructura básica**:
   ```javascript
   // Array de preguntas para el cuestionario
   const questions_mi_tema = [
       // Tus preguntas van aquí
   ];
   ```

3. **Agrega tus preguntas** siguiendo los ejemplos de arriba

4. **Actualiza script.js** para incluir tu archivo:
   ```javascript
   const allFiles = [
       // ... otros archivos
       'questions/questions_mi_tema.js'
   ];
   ```

5. **Recarga la página** - tu nuevo set aparecerá en el selector

### Consejos Importantes

- ✅ **Usa comillas dobles** para las cadenas de texto
- ✅ **Escapa caracteres especiales** como `\"` para comillas dentro del texto
- ✅ **Verifica la sintaxis** - un error de JavaScript romperá todo el archivo
- ✅ **Usa índices correctos** - recuerda que los arrays empiezan en 0
- ✅ **Mantén consistencia** en la nomenclatura

### Solución de Problemas Comunes

#### Error: "No se pudo extraer el array"
- Verifica que el nombre de la variable coincida con el archivo
- Asegúrate de que la sintaxis JavaScript sea correcta
- Revisa que no haya caracteres especiales sin escapar

#### Error: "Archivo no encontrado"
- Confirma que el archivo esté en `questions/`
- Verifica que el nombre esté en la lista `allFiles` del script.js
- Asegúrate de que el servidor web esté ejecutándose

#### Las preguntas no se cargan
- Abre las herramientas de desarrollador (F12)
- Revisa la consola para errores específicos
- Verifica la estructura del array de preguntas

## 📁 Estructura del Proyecto

```
page-test_maker/
├── questions/              # 📂 Archivos de preguntas (ignorados por git)
│   ├── .gitkeep           # Mantiene el directorio en el repo
│   ├── questions_tema1.js # Tus archivos de preguntas
│   └── questions_tema2.js
├── index.html             # 🏠 Página principal
├── script.js              # ⚙️ Lógica de la aplicación
├── styles.css             # 🎨 Estilos CSS
├── .gitignore            # 🚫 Archivos ignorados por git
└── README.md             # 📖 Esta documentación
```

## 🤝 Contribuir

1. Fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/nueva-funcion`)
3. Commit tus cambios (`git commit -m 'Agregar nueva función'`)
4. Push a la rama (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:
1. Revisa la sección "Solución de Problemas Comunes" arriba
2. Abre un issue en GitHub
3. Verifica la consola del navegador para errores específicos

---

¡Disfruta creando tus cuestionarios! 🎉