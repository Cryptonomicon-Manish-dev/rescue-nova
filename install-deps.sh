#!/bin/bash

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env file..."
  echo "# Groq API Key
VITE_GROQ_API_KEY=gsk_your_key_here

# Other environment variables
VITE_APP_NAME=Rescue Nova
VITE_APP_VERSION=1.0.0" > .env
fi

# Install dependencies
echo "Installing dependencies..."
npm install

echo "Setup complete! Make sure to:"
echo "1. Add your Groq API key to .env"
echo "2. Run 'npm run dev' to start the development server"