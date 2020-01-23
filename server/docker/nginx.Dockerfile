FROM nginx:1.17.6

WORKDIR $(pwd)

COPY ./nginx.conf /etc/nginx

