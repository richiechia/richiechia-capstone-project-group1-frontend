# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./
# Or if you use yarn, copy yarn.lock
# COPY package.json yarn.lock ./

# Install any dependencies
RUN npm install
# Or if you use yarn, run yarn install
# RUN yarn install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build your React app
RUN npm run build

# Use the official lightweight Nginx image as a second stage
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
