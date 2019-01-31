const mail = require('@sendgrid/mail')

module.exports = (context, data) => {
  return new Promise(async (resolve, reject) => {
    mail.setApiKey(process.env.SENDGRID_SECRET)
    let msg = {
      to: data.to,
      from: data.from,
      subject: data.subject,
      text: data.text
    }

    if (data.html) {
      msg.html = data.html
    }

    if (data.cc) {
      msg.cc = data.cc
    }

    if (data.bcc) {
      msg.bcc = data.bcc
    }

    if (data.replyTo) {
      msg.replyTo = data.replyTo
    }

    try {
      const response = await mail.send(msg)
      context.log(`send-mail - success`)
      return resolve(response)
    } catch (error) {
      context.log.error(`send-mail - ${error}`)
      return reject(error)
    }
  })
}
