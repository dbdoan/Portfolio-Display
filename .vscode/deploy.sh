#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

# Replace the placeholder with the actual STRAPI_URL
sed -i "s|{{ process.env.STRAPI_URL }}|$STRAPI_URL|g" public/index.html

echo "Environment variables injected into HTML"

# Deploy your application
# Example: rsync -avz --exclude '.env' . user@yourserver:/path/to/your/web/root
# You can also use SCP or any other method to deploy your files

# Example using rsync
rsync -avz --exclude '.env' public/ user@yourserver:/path/to/your/web/root
