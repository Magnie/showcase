Setup
========

Using nginx:

    server {
        listen 8001;
        server_name localhost;
        
        location / {
            root /path/to/angular;
            index index.html;
        }
    }
