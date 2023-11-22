# Use an official Node runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the working environment into the container
COPY . .

# Compile TypeScript into JavaScript
RUN npm run build

# Make port 3000 available to the outside world
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]