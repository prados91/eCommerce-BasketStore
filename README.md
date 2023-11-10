# React: e-Commerce Basket Store (Por Augusto Prados.)
## Página orientada a la venta de productos deportivos de la NBA

## OBJETIVO

Aplicar los conocimientos adquiridos en este curso para poder realizar un e-Commerce a elección.

## DESARROLLO DEL PROYECTO

Proyecto creado con: **[Create React Vite](https://vitejs.dev/)**. Instalación mediante comando NPM `npm create vite@latest`.

Generación de rutas de navegación mediante: **[React Router](https://reactrouter.com/en/main)**. Instalación mediante: `npm install react-router-dom`.

Formulario de compra con librería: **[Formik](https://formik.org/)**. Instalación mediante comando NPM: `npm install formik --save`.

Implementación de base de datos gratuita mediante: **[Firebase](https://firebase.google.com/)**. Instalación mediante comando NPM: `npm install firebase`.

Utilizacion de frameworks de trabajo como **[Chakra.ui] y [React-Boostrap]**

## Mapa del sitio

### Listado de componentes
- **NavBar.** -> Es el encabezado de todas las páginas, mediante el cual se pueden filtrar productos y navegar a través del sitio.
- **CartWidget.** -> Dentro del NavBar se encuentra el ícono para ingresar al carrito junto con la indicación del total de productos en el mismo.
- **ItemListContainer.** -> Contenedor del componente de listado de productos.
- **ItemList.** -> Componente encargado de mostrar los productos filtrados por categoria.
- **Item.** -> omponente encargado de mostrar los productos en una tarjeta con información básica.
- **ItemDetailContainer.** -> Contendeor del componente de detalle de producto.
- **ItemDetail.** -> Componente encargado de mostrar el detalle del producto elegido.
- **ItemCount.** -> Componente encargado de sumar o restar la cantidad del producto seleccionado.
- **CartContainer.** -> Contenedor del carrito de compras.
- **CartItem.** -> Cmponente encargado de listar los productos del carrito.
- **Form.** -> Componente de formulario de ingreso de datos. Interactua con la base de datos generando una orden de compra con un ID de seguimiento.
- **Loading.** -> Componente de carga. Se mostrará siempre que la aplicación esté esperando algún resultado.
- **Footer.** -> Pie de página.

## Ejemplo de funcionamiento.

[GIF](https://github.com/prados91/eCommerce-BasketStore/blob/main/public/Animation.gif)




