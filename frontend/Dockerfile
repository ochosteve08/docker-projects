FROM nginx:1.27.0

# docker run -p 8000:80   nginx   -- run nginx server on localhost:8000 


# Remove the default Nginx site
RUN rm -rf /usr/share/nginx/html/

# Copy static files to Nginx web root
COPY static/ /usr/share/nginx/html/

# (Optional) Use custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf