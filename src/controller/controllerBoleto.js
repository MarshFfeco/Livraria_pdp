const path = require("path");
const Boleto = require("../models/Boleto");
const fs = require('fs')

const Book = require("../models/Adm");

exports.boleto = async function(req, res) {
    const { bradesco } = require('boleto-pdf')

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
            `${book.titulo}`,
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
            valueOf: `R$ ${book.preco}`,
            descountValue: '',
            otherDiscounts: '',
            feeValue: '',
            outherFees: '',
            chargeValue: '',
            payer: {
            name: `${req.session.user.nome}`,
            registerNumber: `${req.session.user.cpf}`,
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
        fs.writeFile(path.resolve(__dirname, "../../upload/boletos", "boleto.pdf"), data, err => {
          if(err) {
            console.log(err)
            req.flash('errors', `Erro ao tentar gerar Boleto`);
            return req.session.save(() => res.redirect(`back`));
          } 

          var options = {
            root: path.join(__dirname, "../../upload/boletos")
        };

          res.download("boleto.pdf", options);
          return req.flash('success', `Boleto baixado.`);
        }); 
      });
    } catch (error) {
        req.flash('errors', `Erro ao tentar gerar Boleto`);
        return req.session.save(() => res.redirect(`back`));
      }
}

exports.boletoAll = async function(req, res) {
  const { bradesco } = require('boleto-pdf')

  try {
    const boletoCall = new Boleto(null, req.session.user);
    await boletoCall.verifyUser;
  
    if(boletoCall.message.length > 0) {
      req.flash('errors', boletoCall.message);
      return req.session.save(() => res.redirect(`back`));
    }
  
    const bookName = [];
    var bookValue = 0;
    var quantidade = 0;
    const dateNow = new Date();
    var numberOfDaysToAdd = 6;
    var expirationDay = new Date();
    expirationDay.setDate(dateNow.getDate() + numberOfDaysToAdd);
  
    for(value of req.session.carrinho) {
      bookName.push(value.books.titulo);
      bookValue += value.books.preco * value.quantidade;
      quantidade += value.quantidade;
    }

    const boleto = {
      barcodeData: '23797726700000009997506091900000120800542910',
      digitableLine: '23797.50603 91900.000125 08005.429108 7 72670000000999',
      paymentPlace:
      'Pagável preferencialmente na rede Bradesco ou Bradesco Expresso.',
      beneficiary: 'Faculdade Adventista da Bahia - CNPJ: 07.114.699/0001-60',
      beneficiaryAddress:
      'Rodovia BR 101, km 197 - Capoeiruçu, Cachoeira - BA, 44300-000',
      instructions:
      `${bookName}`,
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
      formatedValue: `R$ ${bookValue}`,
      documentType: 'DS',
      accept: 'N',
      currencyType: 'Real (R$)',
      amount: `${quantidade}`,
      valueOf: `R$ ${bookValue}`,
      descountValue: '',
      otherDiscounts: '',
      feeValue: '',
      outherFees: '',
      chargeValue: '',
      payer: {
      name: `${req.session.user.nome}`,
      registerNumber: `${req.session.user.cpf}`,
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
    fs.writeFile(path.resolve(__dirname, "../../upload/boletos", "boleto.pdf"), data, err => {
      if(err) {
        req.flash('errors', `Erro ao tentar gerar Boleto`);
        return req.session.save(() => res.redirect(`back`));
      } 

      var options = {
        root: path.join(__dirname, "../../upload/boletos")
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

exports.relatorioSimpleRe = async function(req, res, next) {
  var pdf = require('html-pdf');
  var optionsPDF = { 
    format: 'A3',
  };

  const callBook = new Book(req.body);
  const books =  await callBook.buscarLivros(req.session.user._id);

  if(callBook.message.length > 0) {
    req.flash('errors', callBook.message);
    return req.session.save(() => res.redirect('/'));
  }

let idBook = req.params.id.replace(/}/, '');

if(idBook == req.session.user._id) idBook = null;

 res.render("relatorioSimple.ejs", { books: books }, function(err, html) {
    if (err) {
      req.flash('errors', "Erro ao tentar gerar relatório");
      return req.session.save(() => res.redirect('back'));
    }
    res.send(html)
    pdf.create(html, optionsPDF).toFile(path.resolve(__dirname, "../../upload/relatorios", "relatorioSimple.pdf"), function(err, res) {
      if (err) {
        req.flash('errors', `Erro ao tentar gerar Relatório`);
        return req.session.save(() => res.redirect(`back`));
      };
    });
  });
}

exports.relatorioSimpleReDo = function(req, res) {
  var options = {
    root: path.join(__dirname, "../../upload/relatorios")
  };

  res.sendFile("relatorioSimple.pdf", options);
  return req.flash('success', `Boleto baixado.`);
}