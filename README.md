# Member list app

This is a quick typescript app with a form to create members and a list to show all the members created.
Authentication | Member list app
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/jeanmayorga/devskilladv/main/auth.png) | ![](https://raw.githubusercontent.com/jeanmayorga/devskilladv/main/dash.png)

## Tech stack

This project is built using the following technologies and dependencies:

- Vite - Next Generation Frontend Tooling
- React - a JavaScript library for building user interfaces. Visit http://react.dev to learn more.
- React-dom - exports components specific to the DOM as well as methods to mount components and register DOM events.
- React-hook-form - a performant, flexible and extensible library for building forms in React.
- Axios - a Promise-based HTTP client for the browser and Node.js.
- Zustand - a small, fast and scaleable state-management library for React.
- Zod - a TypeScript-first schema validation and serialization library.
- Lucide-react - a collection of open source icons designed by @chris. Visit https://www.lucide.dev/ to learn more.
- TailwindCSS - a utility-first CSS framework packed with classes for building complex designs easily.
- @tanstack/react-query - a library for managing and caching server state in React.
- @radix-ui/react-dialog - a primitive for building accessible, responsive, and flexible dialogs in React.
- react-hot-toast - a simple and lightweight toast library for React.

## Clone the Repo

```bash
git clone git@github.com:jeanmayorga/devskilladv.git
```

```bash
cd devskilladv
```

## Scripts backend (root directory)

Install all the dependecies

```bash
yarn
```

Run the server project in http://localhost:8081/

```bash
yarn serve
```

## Scripts frontend (frontend folder directory)

```bash
cd frontend
```

Install all the dependecies

```bash
yarn
```

Run the frontend project in http://localhost:5173/

```bash
yarn dev
```

# Entrevista laboral

## Requisitos

- Crear en una nueva carpeta el siguiente sitio web:
  ![alt text](https://github.com/newcombin/devskills/blob/main/design.png "Diseño web")
- Los datos del formulario deben ser enviados a la API, la tabla de la derecha debe recibir los datos de la misma al cargarse el sitio.
- Luego de cada inserción exitosa, se debe mostrar el nuevo miembro en la tabla, sin necesidad de volver a utilizar el endpoint GET.
- El boton reset debe limpiar los campos del formulario.
- El boton save debe enviar los datos a la API.
- El número de seguro social (ssn) es único y no puede repetirse en la lista.
- En caso de un intento de inserción erroneo, se debe informar dicho error.
- Al pasar 2 minutos de inactividad, se debe refrescar la tabla automáticamente.

## API

La página debe poder comunicarse con la API de este repositorio. La misma consta de 2 endpoints.

- GET http://localhost:8081/api/members - para obtener los miembros.

```json
[
  {
    "firstName": "Cosme",
    "lastName": "Fulanito",
    "address": "742 Evergreen Terrance",
    "ssn": "333-22-4444"
  },
  {
    "firstName": "Juan",
    "lastName": "Perez",
    "address": "Av. San Martín 242",
    "ssn": "321-44-1235"
  }
]
```

- POST http://localhost:8081/api/members - para añadir un nuevo miembro.

```json
{
  "firstName": "Cosme",
  "lastName": "Fulanito",
  "address": "742 Evergreen Terrance",
  "ssn": "333-22-4444"
}
```

- Para poder utilizarlos, el Authorization header debe formatearse como Bearer [token].

## AUTH

Para poder utilizar los 2 endpoint anteriores debe obtener un token y enviarlo en los llamados.

- POST http://localhost:8081/auth - para obtener el token.

```json
{
  "username": "sarah",
  "password": "connor"
}
```

## Start API server

- Clonar este repositorio: `git clone https://github.com/newcombin/devskillsadv.git`
- Ubicarse en el directorio: `cd devskillsadv`
- Instalar las dependencias: `npm install`
- Ejecutar el servidor: `npm run serve`

## Validaciones de la API

- **firstName, lastName y address:** más de 1 caracter, sin espacios a los costados (trim).
- **SSN:** debe tener el siguiente formato ###-##-#### (cada # es un número, los guiones son obligatorios).
- Si el front no cumple con las validaciones, se debe deshabilitar el botón de enviar.

## Condiciones y tips

- Los colores y formas son de caracter ilustrativo.
- No es necesario que sea mobile responsive.
- No es necesaria compatibilidad con IE o Edge.
- Se puede usar ES6 y HTML5 sin problemas.
- Se puede usar google :D.
- Se puede usar POSTMAN para verificar el funcionamento de la API.
- Crear un archivo README.md para indicar cómo se debe ejecutar la aplicación.
- Subir a un repositorio git con privilegios públicos de lectura y compartir el link como resultado.
