
### ✅ Final folder structure

```
/frontend
├── Dockerfile
├── nginx.conf          ← (optional but recommended)
└── static
    ├── index.html
    ├── style.css
    └── script.js
```

---

### ✅ 1. Dockerfile

```dockerfile
FROM nginx:1.27.0

# Remove the default Nginx site
RUN rm -rf /usr/share/nginx/html/*

# Copy static files to Nginx web root
COPY static/ /usr/share/nginx/html/

# (Optional) Use custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
```

---

### ✅ 2. nginx.conf (recommended)

This will ensure that Nginx serves your static files properly.

Create a file named `nginx.conf` in the **frontend** directory:

```nginx
events {}

http {
    server {
        listen 80;
        server_name localhost;

        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
}
```

---

### ✅ 3. Build the Docker image

From inside  **/frontend** , run:

```bash
docker build -t mysite .
```

---

### ✅ 4. Run the container

Expose it on port 8080:

```bash
docker run -d -p 8080:80 mysite
```

---

### ✅ 5. Access your static website

In your browser, open:

```
http://localhost:8080
```

You should now see your static HTML/CSS website served by Nginx!

---

### ✅ Example README.md

```markdown
# mysite

This project serves a static website using Nginx and Docker.

## Folder Structure

```

/frontend
├── Dockerfile
├── nginx.conf
└── static
├── index.html
├── style.css
└── script.js

```

## Build Docker Image

```bash
docker build -t mysite .
```

## Run Docker Container

```bash
docker run -d -p 8080:80 mysite
```

## Access the Website

Open in your browser:

```
http://localhost:8080
```

## Notes

* Modify `static/index.html` and other files to update the website.
* You can customize `nginx.conf` for advanced Nginx configurations.
