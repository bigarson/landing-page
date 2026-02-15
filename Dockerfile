# ============================================================
# Stage 1: Base image
# Node 18 Alpine (mevcut versiyonu koruyoruz)
# ============================================================
FROM node:18-alpine AS base

# ============================================================
# Stage 2: Dependencies
# Sadece lockfile degistiginde yeniden calisir
# ============================================================
FROM base AS deps

# Alpine native moduller icin gerekli olabilir
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Sadece package ve lock dosyalarini kopyala (cache optimizasyonu)
COPY package.json package-lock.json* ./

# Deterministic install
RUN npm ci

# ============================================================
# Stage 3: Builder
# Source kodu kopyala ve production build al
# ============================================================
FROM base AS builder

WORKDIR /app

# node_modules'i deps stage'den al
COPY --from=deps /app/node_modules ./node_modules

# Proje dosyalarini kopyala
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Standalone build (next.config.js -> output: "standalone")
RUN npm run build

# ============================================================
# Stage 4: Runner (Production)
# Minimal runtime image
# ============================================================
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Public klasörü standalone'a dahil degil
COPY --from=builder /app/public ./public

# next cache klasoru
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Standalone output (server.js + minimal node_modules)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Static dosyalar
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
