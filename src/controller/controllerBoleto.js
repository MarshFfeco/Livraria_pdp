const path = require("path");
const Boleto = require("../models/Boleto");
const fs = require('fs')

const Book = require("../models/Adm");
const User = require("../models/LoginOrSignUp")

function geraBarCode() {
  let barcode = 0;

  for(let i = 0; i < 44; i++) { 
    barcode += Math.floor(Math.random() * 10).toString() 
  };

  return barcode
}

exports.boleto = async function(req, res) {
    const { bradesco } = require('boleto-pdf')

    try {
        const boletoCall = new Boleto(req.params.id, req.session.user);
        const book = await boletoCall.buyOne();

        if(boletoCall.message.length > 0) {
            req.flash('errors', boletoCall.message);
            return req.session.save(() => res.redirect(`back`));
        }

         function replaceAT(value, index, replacement) {
          return value.substring(0, index) + replacement + value.substring(index + replacement.length);
        }

        const dateNow = new Date();
        var numberOfDaysToAdd = 6;
        var expirationDay = new Date();
        expirationDay.setDate(dateNow.getDate() + numberOfDaysToAdd);
        var cpf = replaceAT(req.session.user.cpf, 2, "xxxxxx");

        //var barcode = 0;
        //for(let i = 0; i < 44; i++) { 
         // barcode += Math.floor(Math.random() * 10).toString() 
        //};
        barcode = geraBarCode();
        /*44 */

        const boleto = {
            barcodeData: `${barcode}`,
            digitableLine: '23797.50603 91900.000125 08005.429108 7 72670000000999',
            paymentPlace:
            'Pagável preferencialmente na rede Bradesco ou Bradesco Expresso.',
            beneficiary: 'Livraria Saber - CNPJ: 07.114.699/0001-60',
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
            registerNumber: `${cpf}`,
            street: `${req.session.user.endereco}`,
            number: '',
            complement: '',
            district: '',
            city: '',
            state: '',
            postalCode: ''
            },
            guarantor: {
            name: 'Livraria Saber',
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
          req.flash('success', `Boleto baixado.`);
        }); 
      });
    } catch (error) {
      console.log(error)
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


    for(value of req.session.carrinho) { 
      if(!(value.books.quantidade || value.books.quantidade == null || value.books.quantidade > 0)) {
        req.flash('errors', "No carrinho existem livro(s) indisponíveis!");
        return req.session.save(() => res.redirect(`back`));
      }
     }
  
    var bookName = [];
    var bookValue = 0;
    var quantidade = 0;
    const dateNow = new Date();
    var numberOfDaysToAdd = 6;
    var expirationDay = new Date();
    expirationDay.setDate(dateNow.getDate() + numberOfDaysToAdd);

    barcode = geraBarCode();
  
    for(value of req.session.carrinho) {
      bookName.push(value.books.titulo);
      bookValue += value.books.preco * value.quantidade;
      quantidade += value.quantidade;
    }

    if(bookName.length > 3) bookName = `${bookName[0]}, ${bookName[1]} e mais ${bookName.length - 2} livros.`;

    const boleto = {
      barcodeData: `${barcode}`,
      digitableLine: '23797.50603 91900.000125 08005.429108 7 72670000000999',
      paymentPlace:
      'Pagável preferencialmente na rede Bradesco ou Bradesco Expresso.',
      beneficiary: 'Livraria Saber - CNPJ: 07.114.699/0001-60',
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
      name: 'Livraria Saber',
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

  const callUsers = new User();
  const users =  await callUsers.users();

  if(callUsers.message.length > 0) {
    req.flash('errors', callUsers.message);
    return req.session.save(() => res.redirect('/'));
  }

  let idBook = req.params.id;
  if(idBook == req.session.user._id) idBook = null;

  res.render("relatorioSimple.ejs", { books: books, users, users }, function(err, html) {
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

exports.relatorioCompostRe = async function(req, res, next) {
  var pdf = require('html-pdf');
  var optionsPDF = { 
    format: 'A3',
  };

  const callBook = new Boleto();
  const books =  await callBook.buscarLivros();

  if(callBook.message.length > 0) {
    req.flash('errors', callBook.message);
    return req.session.save(() => res.redirect('/'));
  }

  const callUsers = new User();
  const users =  await callUsers.users();

  if(callUsers.message.length > 0) {
    req.flash('errors', callUsers.message);
    return req.session.save(() => res.redirect('/'));
  }

  let idBook = req.params.id;
  if(idBook == req.session.user._id) idBook = null;

  res.render("relatorioCompost.ejs", { books: books, users: users }, function(err, html) {
    if (err) {
      req.flash('errors', "Erro ao tentar gerar relatório");
      return req.session.save(() => res.redirect('back'));
    }
    res.send(html)
    pdf.create(html, optionsPDF).toFile(path.resolve(__dirname, "../../upload/relatorios", "relatorioCompost.pdf"), function(err, res) {
      if (err) {
        req.flash('errors', `Erro ao tentar gerar Relatório`);
        return req.session.save(() => res.redirect(`back`));
      };
    });
  });
}

exports.relatorioCompostReDo = function(req, res) {
  var options = {
    root: path.join(__dirname, "../../upload/relatorios")
  };

  res.sendFile("relatorioCompost.pdf", options);
  return req.flash('success', `Boleto baixado.`);
}