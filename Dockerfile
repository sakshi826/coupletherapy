# ───────────────────────────────────────────────────────────
# Stage 1 – Build (Node 22 required by @tanstack/react-start)
# ───────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN NITRO_PRESET=node-server npm run build

# Rewrite all "/assets/ references to "/coupletherapy/assets/ in both
# the SSR server bundle (so injected HTML has correct paths) and the
# client bundles (so dynamic chunk imports use correct paths).
RUN find .output -type f \( -name "*.mjs" -o -name "*.js" \) \
      -exec sed -i 's|"/assets/|"/coupletherapy/assets/|g' {} + && \
    find .output -type f -name "*.css" \
      -exec sed -i 's|url(/assets/|url(/coupletherapy/assets/|g' {} +

# ───────────────────────────────────────────────────────────
# Stage 2 – Production runtime
#   nginx  → serves static assets with correct MIME types (port 3000)
#   node   → Nitro SSR server (port 3001, internal only)
#
# This fixes: "Refused to apply style … MIME type 'text/plain'"
# ───────────────────────────────────────────────────────────
FROM node:22-alpine AS runner

# Install nginx
RUN apk add --no-cache nginx

WORKDIR /app

# App output
COPY --from=builder /app/.output ./.output

# nginx config & startup script
COPY nginx.conf /etc/nginx/nginx.conf
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENV NODE_ENV=production

# nginx listens on port 80
EXPOSE 80

CMD ["/docker-entrypoint.sh"]
