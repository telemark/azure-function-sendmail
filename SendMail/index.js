const sendMail = require('../lib/send-mail')

module.exports = async function (context, request) {
  if (request.body) {
    let body = request.body
    const result = await sendMail(context, body)
    body.azureFunctionSendmailResponse = result
    context.response = {
      body: body
    }
  } else {
    context.response = {
      status: 400,
      body: 'Please see https://github.com/telemark/azure-function-sendmail for usage'
    }
  }
  return context
}
