#!/usr/bin/env node

'use strict';

const CPF = require('cpf'),
    option = (opt) => process.argv.indexOf(opt) !== -1,
    format = option('-f') || option('--formatar');

if (option('--versão') || option('--versao')) {
    console.log('v' + require('./package.json').version);

} else if (option('--ajuda')) {
    console.log([
        '',
        '  Uso: cpf [opções] <número>',
        '',
        '  Opções:',
        '',
        '    -f, --formatar  formata CPF',
        '        --versão    exibe a versão',
        '        --ajuda     exibe está informação',
        ''
    ].join('\n'));
} else {
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
}
