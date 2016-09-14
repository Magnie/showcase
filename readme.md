Setup
========

1. Clone or copy the project to your desired hosting directory.
2. Go into the `python/` folder and run `python install.py` and follow the instructions.
3. Now run `python server.py` to host the API endpoints.
4. Set up your web server to serve the `angular/` directory and have it redirect `/api` requests to the API server. An nginx example is provided below.

Using nginx, add this to your .conf file (whether the nginx.conf or in the servers/ directory):

    server {
        # Change this to 80 if you don't want users to need to type in:
        # yourdomain.com:8001
        listen 8001;
        server_name localhost;
        
        # This allows users to view the front end site.
        location / {
            root /path/to/angular; # TODO: Update this to the proper path!
            index index.html;
        }
        
        # This allows the front end site and client to communicate with the
        # Python app hosted in the background. This can be customized to
        # be passed to any service (PHP, Ruby, etc.)
        location /api {
            proxy_pass http://localhost:8081;
            proxy_set_header Host      $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
