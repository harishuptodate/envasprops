# ---------- BUILD ----------
  FROM node:20-alpine AS builder
  WORKDIR /app
  
  # Install deps first for better cache
  COPY package.json package-lock.json* ./
  RUN npm ci
  
  # Copy source
  COPY . .
  
  # Build Next.js
  RUN npm run build
  
  # ---------- RUN ----------
  FROM node:20-alpine AS runner
  WORKDIR /app
  ENV NODE_ENV=production
  # Default port
  EXPOSE 3000
  
  # Copy only what we need
  COPY --from=builder /app/.next ./.next
  COPY --from=builder /app/package.json ./package.json
  COPY --from=builder /app/node_modules ./node_modules
  COPY --from=builder /app/public ./public
  COPY --from=builder /app/config ./config
  
  
  CMD ["npm", "run", "start"]
  