const Boleto = require("../models/Boleto");

exports.boleto = async function(req, res) {
   const fs = require('fs')
    const { bradesco } = require('boleto-pdf')
    const path = require('path');

    try {
        const boletoCall = new Boleto(req.params.id, req.session.user);
        const book = await boletoCall.buyOne();

        if(boletoCall.message.length > 0) {
            req.flash('errors', boletoCall.message);
            return req.session.save(() => res.redirect(`back`));
        }

        const dateNow = new Date();
        var numberOfDaysToAdd = 6;
        var expirationDay = new Date();
        expirationDay.setDate(dateNow.getDate() + numberOfDaysToAdd);

        const boleto = {
            barcodeData: '23797726700000009997506091900000120800542910',
            digitableLine: '23797.50603 91900.000125 08005.429108 7 72670000000999',
            paymentPlace:
            'Pagável preferencialmente na rede Bradesco ou Bradesco Expresso.',
            beneficiary: 'Faculdade Adventista da Bahia - CNPJ: 07.114.699/0001-60',
            beneficiaryAddress:
            'Rodovia BR 101, km 197 - Capoeiruçu, Cachoeira - BA, 44300-000',
            instructions:
            `Livro: ${book.titulo}`,
            agency: '1234',
            agencyDigit: '0',
            account: '56789',
            accountDigit: '1',
            expirationDay: expirationDay,
            documentDate: dateNow, 
            processingDate: dateNow, 
            card: '',
            documentNumber: '',
            formatedOurNumber: '',
            formatedValue: `R$ ${book.preco}`,
            documentType: 'DS',
            accept: 'N',
            currencyType: 'Real (R$)',
            amount: '1',
            valueOf: '',
            descountValue: '',
            otherDiscounts: '',
            feeValue: '',
            outherFees: '',
            chargeValue: '',
            payer: {
            name: `${req.session.user.nome}`,
            registerNumber: '221.412.772-05',
            street: `${req.session.user.endereco}`,
            number: '',
            complement: '',
            district: '',
            city: '',
            state: '',
            postalCode: ''
            },
            guarantor: {
            name: 'Faculdade Adventista da Bahia',
            registerNumber: '07.114.699/0001-60',
            street: 'Rodovia BR 101, km 197',
            number: '',
            district: '',
            complement: '',
            city: 'Capoeiruçu',
            state: 'BA',
            postalCode: 'Caixa Postal 18'
            }
      }
      
      bradesco(boleto).then( data => {
        fs.writeFile(path.resolve(__dirname, "boletos/boleto.pdf"), data, err => {
          if(err) {
            req.flash('errors', `Erro ao tentar gerar Boleto`);
            return req.session.save(() => res.redirect(`back`));
          } 

          var options = {
            root: path.join(__dirname, "boletos")
        };

          res.download("boleto.pdf", options);
          return req.flash('success', `Boleto baixado.`);
        }); 
      });
    } catch (error) {
      console.log(error)
        req.flash('errors', `Erro ao tentar gerar Boleto`);
        return req.session.save(() => res.redirect(`back`));
    }
}