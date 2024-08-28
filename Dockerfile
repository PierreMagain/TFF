FROM httpd:2.4.59-bookworm
EXPOSE 80
WORKDIR /usr/local/apache2/htdocs
COPY . .