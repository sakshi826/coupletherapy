# ───────────────────────────────────────────────────────────
# Stage 1 – Build (Node 22 required by @tanstack/react-start)
# ───────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN NITRO_PRESET=node-server npm run build

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

# nginx listens on 3000 (mapped from host)
EXPOSE 3000

CMD ["/docker-entrypoint.sh"]
