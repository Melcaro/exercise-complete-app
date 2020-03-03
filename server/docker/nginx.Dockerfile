FROM nginx:1.17.6

WORKDIR /pictures

VOLUME /pictures

COPY ./nginx.conf /etc/nginx

    