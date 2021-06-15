# find-team-front

General idea of this project is to connect people that are looking to participate in development of a *real life* web applications and software.

Project is still in development, at the moment basic structure and few simple features has been created.

[Demo](https://find-team.com)

# docker

Build and run docker images (api + postgres):

docker-compose up --build -d

[on linux os admin privilages required]

Display all containers:

docker ps --all

Delete running container and it's volumes:

docker rm -vf [container/s]

# ssl nginx

To run nginx in docker with ssl certificates follow:

https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose

NOTE: nginx/default.conf has to be edited before.
