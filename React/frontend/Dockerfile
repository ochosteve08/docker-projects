# Stage 1: Build the React app
FROM node:20-alpine AS builder


# define working directory in container
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output to NGINX's web directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom NGINX config for React SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
