# Mis Cajones
API en NodeJS y SQLite que permite visualizar y editar el contenido de nuestros Cajones.

Conoce siempre el contenido de tus cajones con esta web de facil uso.

##1º Paso
- Registrar tus cajones con el nombre, contraseña y nº de cajones.

##2º Paso
- Identificate con el nombre y la contraseña para acceder al listado de los cajones.

##3º Paso
- Añade o elimina el contenido de tus cajones desde el listado.

#Uso de la API
*Registrarse
	*   URL:3000/SignIN
	*	{"name":"`***Nombre***`","password":"`***hashedPassword***`","drawers":`***CantidadDeCajones***`}
	*	respuesta
		*	true el usuari se ha registrado
		*	false no se ha podido registrar el usuario
* Identificarte
    *   URL:3000/LogIn
	*	{"name":"`***Nombre***`","password":"`***hashedPassword***`"}
	*	respuesta
		*	true (el usuario y la contraseña son correctos)
		*	false (usuario o contraseña incorrectos)
*Listar contenido cajones
	*	URL:3000/List
	*	{"name":"`***Nombre***`","password":"`***hashedPassword***`"}
	*	respuesta:	
		*	[{"drawer":`***NºDeCajon***`,"product":"`***NombreDeProducto***`","quantity":`***CantidadDeProducto***`},....]
*Listar cajones
	*	URL:3000/ListDrawers
	*	{"name":"`***Nombre***`","password":"`***hashedPassword***`"}
	*	respuesta:	
		*	[{"drawer":`***NºDeCajon***`},{"drawer":`***NºDeCajon***`},....]
*Añadir a cajon
	*	URL:3000/newProduct
	*	{"name":"`***Nombre***`","password":"`***hashedPassword***`","drawer":`***NºDeCajon***`,"product":"`***NombreDeProducto***`","quantity":`***CantidadDeProduct***`}
	*	respuesta:	
		*	true si se ha añadido correctamente
		*	false si no ha sido posible añadir al cajón
*Eliminar elemento
	*	URL:3000/delete
	*	{"name":"`***Nombre***`","password":"`***hashedPassword***`","drawer":`***NºDeCajon***`,"product":"`***NombreDeProducto***`"}
	*	respuesta:	
		*	true si se ha elimnado correctamente
		*	false si no ha sido posible eliminar el elemento