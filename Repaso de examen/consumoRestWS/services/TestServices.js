export const getAllpostsService = () => {
  // Realiza una solicitud GET a la API de jsonplaceholder para obtener todos los posts
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json()) // Convierte la respuesta del servidor a formato JSON
    .then((json) => {
      // Este bloque se ejecuta cuando la respuesta se recibe correctamente
      console.log(json); // Aquí imprimes los datos obtenidos de la respuesta
      // El JSON que se recibe contiene una lista de todos los posts
    });
};

export const createPostDervice = (post, fnExito = () => {}) => {
  // Configuración de la solicitud POST
  const config = {
    method: "POST", // Método HTTP a utilizar en la solicitud (en este caso, POST)
    body: JSON.stringify({
      // El cuerpo de la solicitud contiene los datos que se enviarán al servidor.
      // Los datos deben ser una cadena JSON (por eso se usa JSON.stringify())
      title: "mensaje", // Título del post
      body: "suerte en su evaluación", // Cuerpo del post
      userId: 1, // ID del usuario que está creando el post
    }),
    headers: {
      // Especifica los encabezados de la solicitud
      "Content-Type": "application/json", // El contenido enviado es de tipo JSON
    },
  };

  // Realizamos la solicitud fetch para enviar el POST
  fetch("https://jsonplaceholder.typicode.com/posts", config)
    .then((response) => response.json()) // Convertimos la respuesta a formato JSON
    .then((json) => {
      // Este bloque se ejecuta cuando la respuesta se recibe correctamente
      console.log(json);
      fnExito(); // Aquí imprimes los datos obtenidos de la respuesta
      // El JSON que se recibe será el nuevo post creado en el servidor (simulado por jsonplaceholder)
    });
};
export const updatePostService = () => {
  const config = {
    method: "PUT",
    body: JSON.stringify({
      title: "Update",
      body: "update post",
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://jsonplaceholder.typicode.com/posts/1", config)
    .then((response) => response.json()) // Convertimos la respuesta a formato JSON
    .then((json) => {
      console.log(json);
    });
};
export const getByUserIdService = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then((response) => response.json()) // Convierte la respuesta del servidor a formato JSON
    .then((json) => {
      // Este bloque se ejecuta cuando la respuesta se recibe correctamente
      console.log(json); // Aquí imprimes los datos obtenidos de la respuesta
      // El JSON que se recibe contiene una lista de todos los posts
    });
};
export const getProducto = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
};
export const postProducto = () => {
  const config = {
    method: "POST",
    body: JSON.stringify({
      title: "Mensaje",
      body: "El amor es un negocio del gobierno",
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://fakestoreapi.com/products", config)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
};
export const putProducto = () => {
  const config = {
    method: "PUT",
    body: JSON.stringify({
      title: "Update",
      body: "Update producto",
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://fakestoreapi.com/products/1", config)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
};
export const getDocumentTypes = () => {
  fetch(
    "http://192.168.100.88:8080/inventarios-1.0.0/rest/TipoDocumentos/recuperar"
  )
    .then((response) => response.json()) // Convierte la respuesta a JSON si es exitosa
    .then((json) => console.log(json)) // Imprime la respuesta en consola
    .catch((error) =>
      console.error("Hubo un problema con la solicitud:", error)
    ); // Maneja el error
};
export const createTipoDocumento = (post, fnExito = () => {}) => {
  const config = {
    method: "POST",
    body: JSON.stringify({
      codigo: "DNI",
      descripccion: "Documento Nacional de Identidad",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(
    "http://192.168.100.88:8080/inventarios-1.0.0/rest/TipoDocumentos/insertarTipoDocumento",
    config
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      fnExito(json);
    });
};
