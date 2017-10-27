This is a thin wrapper for the pinboard-api with a view to making it CORS accessible.
https://pinboard.in/api/

# TODO
- return XML
- generate pinboard api url from the incoming params
- proxy to real pinboard api
-- https://pinboard.in/api/
-- https://github.com/nodejitsu/node-http-proxy

# serverless commands

serverless commands

serverless deploy -v

#to prod/other region
serverless deploy --stage prod --region us-east-1


serverless deploy function -f main

serverless invoke -f main -l

serverless logs -f main -t

# workflow - https://serverless.com/framework/docs/providers/aws/guide/workflow/

# based on this guide https://serverless.com/blog/serverless-api-gateway-domain/
