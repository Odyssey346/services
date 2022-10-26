FROM node:18-slim
ENV PORT 3000
ENV NODE_ENV production

# Install pnpm
RUN npm install -g pnpm

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN pnpm install --force

# Copying source files
COPY . /usr/src/app

# Building app
RUN pnpm build
EXPOSE 3000

# Running the app
CMD [ "pnpm", "start" ]
