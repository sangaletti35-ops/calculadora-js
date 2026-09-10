# 🧮 Calculadora Code Start

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Uma calculadora simples e funcional, construída com **HTML, CSS e JavaScript puro (vanilla)**, com visual inspirado no tema escuro do iOS. Este foi meu primeiro projeto de calculadora, desenvolvido como exercício prático de lógica de programação e manipulação do DOM.

## 📸 Demonstração

### Tela inicial da calculadora
![Tela inicial da calculadora](https://github.com/user-attachments/assets/d1303361-5c26-41d0-8026-b89e419aed80)

### Realizando uma soma
![Realizando uma soma](https://github.com/user-attachments/assets/88cd9c32-71ff-4544-bb1c-25280a7d6dfc)

### Operação com números decimais
![Operação com números decimais](https://github.com/user-attachments/assets/99608063-39a5-42ee-9c04-391f7f4fb956)

### Mensagem de erro ao inserir uma expressão inválida
![Mensagem de erro ao inserir uma expressão inválida](https://github.com/user-attachments/assets/64d547f1-4771-44af-a845-5c84996664f4)

## ⚙️ Funcionalidades

- Operações básicas: adição, subtração, multiplicação e divisão
- Suporte a números decimais (`.`)
- Operador de porcentagem/resto (`%`)
- Botão de limpar (`C`) que reseta o display
- Tratamento de erros: expressões inválidas exibem `"erro"` em vez de travar a aplicação
- Layout em grade, com botões circulares e tema escuro

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3 (Flexbox e Grid)
- JavaScript (Vanilla, sem frameworks ou bibliotecas)

## 📁 Estrutura do projeto

```
├── index.html
├── script.js
└── styless.css
```

## 🧠 Como funciona

A calculadora monta uma **string de expressão matemática** conforme os botões são clicados, e usa `eval()` para calculá-la:

- **`appendNumber(value)`** — adiciona um dígito à expressão atual e atualiza o display
- **`oppendOperator(operator)`** — adiciona um operador (`+`, `-`, `*`, `/`, `%`, `.`) à expressão, bloqueando operadores no início caso o display esteja vazio (exceto o ponto decimal)
- **`calculate()`** — avalia a expressão com `eval()`, arredonda o resultado para 2 casas decimais quando ele não é inteiro, e captura erros de sintaxe exibindo `"erro"`
- **`cleanDisplay()`** — reinicia a expressão e limpa o display

> **Nota:** como o `%` é avaliado pelo `eval()` do JavaScript, ele se comporta como **módulo** (resto da divisão), e não como um cálculo de porcentagem tradicional.

## 🚀 Como executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/sangaletti35-ops/nome-do-repositorio.git
   ```
2. Abra o arquivo `index.html` diretamente no navegador, ou use a extensão **Live Server** do VS Code para uma melhor experiência de desenvolvimento.

## 🔧 Possíveis melhorias futuras

- Substituir o `eval()` por um parser de expressões mais seguro
- Implementar o cálculo real de porcentagem
- Adicionar suporte ao teclado numérico
- Impedir a digitação de operadores consecutivos (ex: `5++2`)

## 👨‍💻 Autor

Desenvolvido por **Maurício** — [GitHub](https://github.com/sangaletti35-ops)
