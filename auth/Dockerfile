FROM node:latest AS builder
WORKDIR /app
COPY package*json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM node:alpine AS final
WORKDIR /app
COPY package*json ./
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist
COPY .env ./
EXPOSE 3000
CMD [ "npm", "start" ]

