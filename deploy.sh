#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

# Replace the placeholder with the actual STRAPI_URL
sed -i '' "s|{{ process.env.STRAPI_URL }}|$STRAPI_URL|g" index.html

echo "Environment variables injected into HTML"
