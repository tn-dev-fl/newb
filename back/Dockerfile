# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the backend code to the working directory
COPY . .

# Expose the port your backend is listening on
EXPOSE 3000

# Start the backend server

CMD [ "node", "app.js" ]