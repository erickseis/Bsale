# Bsale

### Caracteristicas

- La Bsale Store Api te permitira buscar dentro de su base de datos el producto que solicites;
- Poseemos un stock de productos con el cual podras interactuar desde el cliente;
- Los enlaces te permitiran visualizar los productos sea por categoria, nombre, id ;
- Compatible con cualquier navegador;
- Podras consumirla con el lenguaje de tu eleccion;
- Puedes hacer ocupacion del buscador mediante un enlace;
- Soporte las 24 horas a traves del correo erickseis@gmail.com;

# BsaleStoreApi.md

![](https://i.postimg.cc/MTjzTwHs/Captura.png)

#Introduccion

La Bsale Store Api, tiene como principio el permitir la interaccion entre el cliente y nuestra base de datos para que se puedan realizar compras de nuestros productos a traves de nuestro buscador o uso de categorias.

##Uso de la Bsale Store Api

Para comenzar a ocupar la Bsale Store Api, puedes hacerlo segun tus necesidades:

Usando el metodo GET puedes consumirla en tu cliente para obtener diversos resultados ej;

Para las categorias.

[GET Category / : ID](https://bsale-erickseis.vercel.app/api/v1/categories 'GET Category')
Ocupando este enlace te mostrara un listado con las categorias presentes de todos los productos disponibles.

Para los productos

[GET All Products](https://bsale-erickseis.vercel.app/api/v1/products 'GET All Products')
Veras todos los productos que se encuentran en nuestra base de datos

[GET Products / : ID](https://bsale-erickseis.vercel.app/api/v1/products/ 'GET Products / : ID')
Te permitira filtrar los elementos segun su categoria.

[GET Products / : name](https://bsale-erickseis.vercel.app/api/v1/products/name/ 'GET Products / : name')
Obten los productos por su nombre, puedes ocupar un buscador para lograrlo.

Asi es como puedes ocupar nuestra Bsale Store Api, te dejo unos ejemplos para que veas como puedes visualizar los datos.

**GET Category**

![](https://i.postimg.cc/DybrZ0X3/categories.png)

**GET All Products **

![](https://i.postimg.cc/x1pgJh1W/all-products.png)

**GET Products / : ID**

![](https://i.postimg.cc/bp3rDpRK/products-id.png)

**GET Products / : name**

![](https://i.postimg.cc/XVKTq7f5/name.png)

De esta manera podemos sacar provecho de la Bsale Store Api.

###Funcionamiento

![](https://i.postimg.cc/DzsF9YPV/servicetonic-api-rest-integration-external-db.png)

###Fin
