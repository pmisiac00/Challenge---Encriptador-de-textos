# :hibiscus: ENCRIPTADOR DE TEXTO - CHALLENGE BY ONE|ALURA :hibiscus:
Aplicación web para encriptar y desencriptar texto, desarrollada bajo el marco de la primer etapa del programa Oracle Next Education G7.

## :pushpin: Presentación general del proyecto:
Esta aplicación web permite a los usuarios encriptar y desencriptar mensajes de manera sencilla y eficiente. Con una interfaz intuitiva, los usuarios pueden ingresar texto y seleccionar un método de encriptación para proteger su información. Además, la herramienta ofrece la opción de desencriptar mensajes previamente encriptados, facilitando el acceso a la información de forma segura.

## :computer: Herramientas utilizadas:
* Figma: A partir de la plantilla otorgada por ALURA, se utilizo para maquetizar un diseño propio y único, facilitando la planificacion visual del sitio web;
* HTML: Utilizado para estructurar el contenido del sitio web. Permite crear la base de la interfaz de usuario;
* CSS: Responsable del diseño de la aplicación, creando y asegurando una interfaz atractiva para el usuario;
* JavaScript: Permite la implementacion de las funciones logicas de encriptado/desencriptado del texto, manipulando el texto introducido por el usuario;
* Visual Studio Code: Editor de codigo elegido para desarrollar el desafio, gracias a las caracteristicas como depuracion y control de versiones, y la integración con Git;
* GitHub: Plataforma de control de versiones que permite gestionar el código del proyecto, colaborar con otros desarrolladores y mantener un historial de cambios.

## :bulb: Funciones:
### Encriptación de Sustitución de Vocales
* La letra "e" se reemplaza por "enter".
* La letra "i" se reemplaza por "imes".
* La letra "a" se reemplaza por "ai".
* La letra "o" se reemplaza por "ober".
* La letra "u" se reemplaza por "ufat".
### Conversión de Caracteres Especiales a Espacios en Blanco
El texto ingresado se normaliza para descomponer los caracteres acentuados en sus partes básicas. Se eliminan los acentos, transformando caracteres como "é" en "e". Luego, se procesan los caracteres para eliminar todos los que no son letras (a-z, A-Z), números (0-9) o espacios. Esto incluye puntuación, símbolos matemáticos, símbolos monetarios y otros caracteres especiales.

#### --- Ejemplos de caracteres especiales:

* Puntuación: !, @, #, $, %, ^, &, *, (, ), _, +, -, =, {, }, [, ], |, :, ;, ", ', <, >, ,, ., ?, /
* Acentos y diacríticos: á, é, í, ó, ú, à, è, ì, ò, ù, â, ê, î, ô, û, ä, ë, ï, ö, ü, ã, ñ, õ, ç
* Símbolos matemáticos: +, -, =, *, /, %, √, ∞, ≈, ≠, ≤, ≥
* Símbolos monetarios: $, €, £, ¥, ¢, ₹
* Otros símbolos: ©, ®, ™, §, ¶

### Conversión de Mayúsculas a Minúsculas
Las letras en mayúsculas se convierten a minúsculas mediante estilos CSS en el campo de texto. Esto se logra utilizando la propiedad text-transform: lowercase; aplicada al ID text__area, que es el campo donde el usuario escribe el texto.

### Botones Funcionales
* Encriptar: Encripta el texto ingresado en el campo de entrada. Después de la encriptación, el texto se transfiere al campo de salida.
* Desencriptar: Desencripta el texto ingresado en el campo de entrada. Después de la desencriptación, el texto se transfiere al campo de salida.
* Copiar: Copia el contenido del campo de salida al portapapeles.

### Validaciones de Entrada
* Desactivación de Botones: Los botones de Encriptar y Desencriptar se desactivan si el campo de entrada está vacío o contiene solo espacios en blanco.
* Alerta de visualización: Se muestra una alerta al usuario al intentar activar los botones de Encriptar o Desencriptar sin proporcionar un texto válido.

## :camera: Visualización previa:
![Vista previa del proyecto](assets/encriptador_version_web.png)


## :arrow_right: Acceso a la aplicación:
[Visita nuestra página](https://pmisiac00.github.io/Challenge---Encriptador-de-textos/)







