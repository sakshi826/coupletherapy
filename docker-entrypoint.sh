#!/bin/sh
# Start the Nitro SSR server on the internal port
PORT=3001 node /app/.output/server/index.mjs &

# Give Node a moment to bind
sleep 1

# Start nginx in the foreground (keeps container alive)
nginx -g "daemon off;"
