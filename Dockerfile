FROM nginx

RUN mkdir /app
WORKDIR /app
RUN mkdir ./build
ADD ./build ./build
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
RUN chmod -R 755 /app/build
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]