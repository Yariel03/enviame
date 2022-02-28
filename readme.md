# Prueba Tecnica Backend

Microservicios en contenedores para prueba tecnica

# Diagrama DB

![Alt text](/diagramas/db2.png)

# Diagrama de Microservicios

![Alt text](/diagramas/db2.png)

# Tecnologias ocupadas

- nodeJs 14
- framework: expres
- db: postgresql `al no existir restriccion en el manejo de base de datos, tome la libertad de usarla`
- dbms: pgAdmin

## Requisitos

- Tener instalado docker y docker-compose

## Instalación y ejecución

- Clonar el proyecto del siguiente repositorio `git clone https://github.com/Yariel03/enviame`.

Ejecute los siguientes comandos dentro de la carpeta **enviame** .

- Ejecute el comando: `docker-compose build`

- Ejecute el comando: `docker-compose up -d`

Ahora estara corriendo 4 contenedores

- Microservicio swEcommerse
- Microservisio swDelivery
- Base de datos postgresql
- Administrador de base de datos pgAdmin

De forma predeterminada, los microservicios se ejecutarán en los siguientes puertos:

- servicio de comercio electrónico: 3000
- servicio de entrega: 4000
