#!/usr/bin/env node
"use strict";

// cpf-cli | matheus alves
// https://github.com/theuves/cpf-cli

var CPF = require("cpf");

var format = false;

process.argv.slice(2).forEach(function (arg) {
  if (/^--?/.test(arg)) {
    if ([
      "-f", "--formatar",
      "-v", "--versão",
      "-?", "--ajuda"
    ].includes(arg)) {
      if (/^(-v|--versão)$/.test(arg)) {
        console.log("v" + require("./package.json").version);
        process.exit(0);
      } else if (/^(-\?|--ajuda)$/.test(arg)) {
        console.log([
          "",
          "  Uso: cpf [opções] <número>",
          "",
          "  Opção:          Descrição:",
          "  -f, --formatar  Formatar número.",
          "  -v, --versão    Exibir a versão atual.",
          "  -?, --ajuda     Exibir esta mensagem.",
          "",
        ].join("\n"));
        process.exit(0);
      } else if (/^(-f|--formatar)$/.test(arg)) {
        format = true;
      }
    } else {
      console.error("Opção Inválida.");
      process.exit(1);
    }
  }
});

if (process.argv.length === 2) {
  console.log(CPF.generate());
} else if (!format || process.argv.length === 3) {
  if (/^--?/.test(process.argv[2])) {
    console.log(CPF.generate());
  } else {
    console.log(CPF.validate(process.argv[2])
      ? "Válido."
      : "Inválido.");
  }
} else {
  var arg = /^(-f|--formatar)$/.test(process.argv[2])
    ? process.argv[3]
    : process.argv[2];

  if (/^--?/.test(arg)) {
    console.log(CPF.generate());
  } else {
    var formatted = CPF.format(arg);

    console.log(formatted
      ? formatted
      : "Inválido.");
  }
}
