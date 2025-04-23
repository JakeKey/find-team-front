upstream nextjs_upstream {
  server nextjs:3000;
}

server {
        listen 80;
        listen [::]:80;
        server_name find-team.xyz www.find-team.xyz;

        location / {
          proxy_pass http://nextjs_upstream;
        }

        location ~ /.well-known/acme-challenge {
          allow all;
          root /var/www/html;
        }
}
