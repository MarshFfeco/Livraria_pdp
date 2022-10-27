exports.boleto = async function(req, res) {
    console.log(req.url)
   const fs = require('fs')
    const {bradesco} = require('boleto-pdf')
    const https = require('https');
    const path = require('path');

    const boleto = {
        barcodeData: '23797726700000009997506091900000120800542910',
        digitableLine: '23797.50603 91900.000125 08005.429108 7 72670000000999',
        paymentPlace:
        'Pagável preferencialmente na rede Bradesco ou Bradesco Expresso.',
        beneficiary: 'UNICRED FLORIANÓPOLIS - CNPJ: 074.064.502/0001-12',
        beneficiaryAddress:
        'Rua Tenete Silveira, 315 - Centro - Florianópolis - SC  - CEP 88010-301',
        instructions:
        'Após o vencimento cobrar multa de 2,00% , mais juros ao mes de 1,00%.',
        agency: '7506',
        agencyDigit: '0',
        account: '54291',
        accountDigit: '1',
        expirationDay: new Date(2017, 7, 30), // 30/08/2017
        documentDate: new Date(2017, 7, 18), // 18/08/2017
        processingDate: new Date(2017, 7, 18), // 18/08/2017
        card: '09',
        documentNumber: '42493',
        formatedOurNumber: '09/19000001208-0',
        formatedValue: 'R$ 9,90',
        documentType: 'DS',
        accept: 'N',
        currencyType: 'Real (R$)',
        amount: ' ',
        valueOf: ' ',
        descountValue: ' ',
        otherDiscounts: ' ',
        feeValue: ' ',
        outherFees: ' ',
        chargeValue: ' ',
        payer: {
        name: 'Anita Albuquerque',
        registerNumber: '221.412.772-05',
        street: 'Rua Maria Gertrudes Coelho',
        number: '827',
        complement: ' ',
        district: 'Estrada Nova',
        city: 'Divinópolis',
        state: 'MG',
        postalCode: '35500-700'
        },
        guarantor: {
        name: 'ACME Telecomunicações Ltda',
        registerNumber: '074.064.502/0001-12',
        street: 'Servidão',
        number: '439',
        district: 'Estrada Nova',
        complement: ' ',
        city: 'Jaraguá do Sul',
        state: 'SC',
        postalCode: '89254-375'
        }
  }
   
  bradesco(boleto).then( data => {
    const file = fs.writeFile('boleto.pdf',data,'binary', err =>{
      if(err){
        console.log(err)
        return
      }
      
    })
  }).catch(err =>{
    console.log(err)
  })

  req.flash('success', `Dowload do boleto feito com sucesso`);
  return req.session.save(() => res.redirect(`back`));
}