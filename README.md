# REACT APP

La presente aplicación fue creada con el fin de superar una prueba técnica, en la cual se me solicita usar las siguientes bibliotecas: 
- Redux
- Saga
- Axios

```
  Para ello se te pide realizar como PRUEBA un componente simple que solicite información
  simple y use Sagas con Redux; En donde Redux se encargará del procesamiento de datos y
  Sagas se encargará de las funciones asíncronas y la llamada de la API. Se solicita que sea
  finalizado y enviado para su revisión preferentemente el día viernes 24 de Febrero del
  2023. 

  El proyecto necesitará:
  * Reducers 
  * Sagas Takes 

  Una vez finalizado se te solicita compartir el código via Github o Gitlab
```

### Instalación
* Clona el repositorio en tu computadora usando el siguiente comando:

```
git clone https://github.com/Alex0711/ReactComponent.git
```

* Accede al directorio del proyecto desde la terminal:

```
cd ReactComponent
```

* Instala las dependencias necesarias:

```
npm install
```

* Ejecuta la aplicación:

```
npm run start
```

* Abre tu navegador y ve a la siguiente dirección: http://localhost:3000.

### Características

Es una aplicación muy simple que solo hace una petición a una API y trae una lísta de productos, los cuales son renderizados en el home de la aplicación y le permiten al usuario añadir estos productos a un carrito de compras a fin de verificar el correcto funcionamiento del estado. 
La lista de productos añadidos se puede visualizar al darle click al carrito ubicado en la parte superior derecha y desde aquí se los pueden eliminar.

### Problemas conocidos

Por la falta de tiempo me vi en la necesidad de reutilizar componentes de mis primeros cursos en react. Por lo que no tienen transiciones, tampoco siguen estándares de accesibilidad.