#!/usr/bin/env bash
set -eE

# Default for development
dev_api="http://0.0.0.0:3000"

# Set to DATABASE_URL env var or default if not present
api_url="${DATABASE_URL:-$dev_api}"

# Create JSON data
json=$(cat <<-END
{
  "baseURL": "$api_url"
}
END
)

# Save it to config.js
echo "creating config.js"
echo "window.config = $json;" > config.js
