const Mail = require('../services/Mail')

class PurchaseMail {
  // Retorna chave única para este Job
  get key () {
    return 'PurchaseMail'
  }

  // Envia o email
  async handle (job, done) {
    const { ad, user, content } = job.data
    await Mail.sendMail({
      from: '"Iann Isacksson" <iann@cmvt.com.br>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad: ad }
    })

    return done()
  }
}

module.exports = new PurchaseMail()
