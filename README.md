# FUNDAMENTOS DE JAVASCRIPT


## Comando para levantar un servidor local y simular un backend 

Install JSON Server 

```
npm install -g json-server
```

```
json-server --watch assets/db.json 
```

Repo
https://github.com/typicode/json-server/blob/master/README.md

## Servidor local para php

Para poder usar php de forma local y trabajar los ejercicios de AJAX. 

Se necesita un servidor Local que puede ser MAMP o XAMPP. 

Los archivos se tienen que guardar en la carpeta htdocs y correr el servidor, que tiene por determinado el puerto 8080. 


## FormSubmit para uso de formularios sin backend

https://formsubmit.co/


## Stripe 

Para usar Stripe se crea un archivo stripe-keys.js 
donde se colocan las llaves. 

```
export default {
  public: "Your Public Key", 
  secret: "Your Secret Key",
};

```