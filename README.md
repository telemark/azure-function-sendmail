[![Build Status](https://travis-ci.com/telemark/azure-function-sendmail.svg?branch=master)](https://travis-ci.com/telemarks/azure-function-sendmail)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# azure-function-sendmail

HttpTrigger for sending mail with sendgrid

# Usage

POST json to function

```JavaScript
{
  "to": "<mail-to>",
  "from": "mail-from",
  "subject": "<subject>",
  "text": "<text>",
  "html": "<html>", //optional
  "cc": "<mail-cc>", //optional
  "bcc": "<mail-bcc>", //optional
  "replyTo": "<mail-replyTo>", //optional
  "attachments": [
    {
      "content": "Some base 64 encoded attachment content",
      "filename": "some-attachment.txt",
      "type": "plain/text",
      "disposition": "attachment",
      "content_id": "mytext"
    }
  ] //optional
}
```

## Deploy

### Azure

You'll need a valid subscription and to setup the following resources

- resource group
- app service plan
- storage account

#### Setup function

The easiest way to make this function run is to setup an app service, configure the app and get the function from GitHub.

- add function app
  - Runtime stack -> Node

Configuration for app (Application settings)
```
SENDGRID_SECRET=your-sendgrid-api-key
```

- add function
  - Plattform features -> deployment center
  - github
  - branch master

## Development

Install all tools needed for [local development](https://docs.microsoft.com/en-us/azure/azure-functions/functions-develop-local).

Clone the repo. Install dependencies.

Create a local.settings.json file

```JavaScript
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "your-storage-account-connection",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "SENDGRID_SECRET": "your-sendgrid-secret"
  }
}
```

Start server

```
$ func start
```

POST testdata

```
$ curl http://localhost:7071/api/SendMail -d @test/data/input.json -H 'Content-Type: application/json'
```

# License

[MIT](LICENSE)
