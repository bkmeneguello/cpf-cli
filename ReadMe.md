# cpf-cli

Formatar, gerar ou validar um CPF via linha de comando.

## Instalação

```
$ npm install --global cpf-cli
```

## Uso

**Opções:**

```
Uso: cpf [opções] [número]

Opções:

  -f, --formatar  Formatar um CPF.
      --versão    Exibir a versão.
      --ajuda     Exibir está ajuda.
```

**Exemplos:**

```
$ cpf
111.444.777-35
```

```
$ cpf 111.444.777-35
Válido
```

```
$ cpf --formatar 11144477735
111.444.777-35
```

## Licença

MIT
