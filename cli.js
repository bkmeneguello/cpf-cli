#!/usr/bin/env node

'use strict';

const CPF = require('cpf');

const help = `
  Uso: cpf [opções] <número>

  Opções:

    -f, --formatar  formata CPF
        --versão    exibe a versão
        --ajuda     exibe está informação
`;

const validOpts = [
    '--versão',
    '--ajuda',
    '-f', '--formatar'
];

var format = false;
var args = process.argv.slice(2);

for (var i in args) {
    if (/^--?/.test(args[i])) {
        if (validOpts.indexOf(args[i]) !== -1) {
            switch (args[i]) {
                case '--versão':
                    console.log(`v${require('./package.json').version}`);
                    process.exit(0);
                case '--ajuda':
                    console.log(help);
                    process.exit(0);
                case '-f':
                case '--formatar':
                    format = true;
                    break;
            }
        } else {
            console.error(`A opção "${args[i]}" não é válida.`);
            process.exit(1);
        }
    }
}

args = args.filter(i => {
    if (!/^(-f|--formatar)$/.test(i)) {
        return i;
    }
});

if (process.argv.length === 2) {
    console.log(CPF.generate());
} else if (!format || process.argv.length === 3) {
    const num = process.argv[2], val = CPF.validate(num);

    if (/^--?/.test(num)) {
        console.log(CPF.generate());
        process.exit(0);
    }

    console.log(val ? 'Válido' : 'Inválido');
} else {
    const arg1 = process.argv[2],
        arg2 = process.argv[3],
        arg = /^(-f|--formatar)$/.test(arg1) ? arg2 : arg1;

    if (/^--?/.test(arg)) {
        console.log(CPF.generate());
    } else {
        const formatted = CPF.format(arg);

        if (!formatted) {
            console.log('Inválido');
            process.exit(0);
        }

        console.log(formatted);
    }
}
