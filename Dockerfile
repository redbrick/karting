FROM node:latest as build

COPY src /app

WORKDIR /app

RUN npm install

RUN npx @11ty/eleventy --input=src --output=_site

FROM nginx:latest

COPY --from=build /app/_site /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]