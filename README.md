# Feira

Este é um projeto desenvolvido durante o curso "React: gerenciamento de estados globais com ContextAPI" da Alura. (10 horas, Concluído)

Durante o curso, aprendi conceitos avançados de gerenciamento de estados em aplicações React, usando a ContextAPI. Os principais tópicos abordados foram:

- Criação e gerenciamento de estados globais com a ContextAPI.
- Desacoplar componentes, tornando-os responsáveis apenas pela renderização.
- Utilização das melhores práticas e recursos avançados que a ContextAPI pode oferecer.
- Criação de hooks customizados para uso conjunto com outros hooks do React e a ContextAPI.
- Melhoria da limpeza do código e performance por meio da adoção de boas práticas.
- Desenvolvimento de código baseado no princípio da responsabilidade única, facilitando a manutenção do projeto.

**[Acesse aqui o Alura-Feira pelo Vercel](https://alura-feira-tan.vercel.app/)**

## Como clonar o repositório

Siga as etapas abaixo para clonar este repositório e executar o projeto em sua máquina local:

1. Certifique-se de ter o Git instalado em sua máquina. Você pode fazer o download e instalar o Git a partir do [site oficial do Git](https://git-scm.com/).

2. Abra o terminal ou prompt de comando.

3. Navegue até o diretório onde deseja clonar o repositório.

4. Execute o seguinte comando para clonar o repositório:

``` bash
git clone https://github.com/makenrosa/alura-feira.git
```

5. Após o término do processo de clonagem, você terá uma cópia local do repositório em seu computador.

## Executando o projeto

Para executar o projeto React, siga as etapas abaixo:

1. Navegue até o diretório onde você clonou o repositório.

2. Abra o terminal ou prompt de comando.

3. Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download e instalar o Node.js a partir do [site oficial do Node.js](https://nodejs.org/).

4. Execute o seguinte comando para instalar as dependências do projeto:
    
``` bash
npm install
```

5. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

``` bash
npm start
```

6. O servidor de desenvolvimento será iniciado e você poderá acessar a aplicação no seu navegador através do endereço `http://localhost:3000`.

## Estrutura do projeto

A estrutura do projeto está da seguinte forma:

```Feira/
├── public/
│   ├── assets/
│   │   ├── broccoli.png
│   │   ├── cucumber.png
│   │   ├── potato.png
│   │   ├── tomato.png
│   │   └── pumpkin.png
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── common/
│   │   └── context/
│   │       ├── Cart.js
│   │       ├── Payment.js
│   │       └── User.js
│   ├── components/
│   │   └── Product/
│   │       ├── index.js
│   │       └── styles.js
│   ├── pages/
│   │   ├── Cart/
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── Login/
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── Market/
│   │       ├── Navbar/
│   │       │   ├── index.js
│   │       │   └── styles.js
│   │       ├── market.json
│   │       ├── index.js
│   │       └── styles.js
│   ├── routes.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── .eslintrc.json
├── jsconfig.json
├── package.json
└── package-lock.json
```


- `public/`: Contém a pasta `assets/` que hospeda as imagens utilizadas no projeto (`broccoli.png`, `cucumber.png`, `potato.png`, `tomato.png`, `pumpkin.png`) e o arquivo `index.html`.

- `src/`: Contém o código-fonte da aplicação.
  - `assets/`: Contém a logo do projeto (`logo.svg`).
  - `common/context/`: Contém os contextos do React (`Cart.js`, `Payment.js`, `User.js`) usados para gerenciar estados globais.
  - `components/`: Contém os componentes reutilizáveis da aplicação. Por exemplo, `Product/` que possui seu próprio arquivo JavaScript (`index.js`) e estilos CSS (`styles.js`).
   
- `src/pages/`: Contém as páginas principais da aplicação, como `Cart`, `Login`, e `Market`. Cada página possui seu próprio arquivo JavaScript e um arquivo de estilos correspondente. Além disso, `Market/` contém um componente adicional, `Navbar/`, um arquivo JSON com dados do mercado (`market.json`).
   
- `src/routes.js`: Gerencia as rotas da aplicação.
- `src/index.js`: É o ponto de entrada da aplicação React.
- `src/index.css`: Contém os estilos globais.
   
- `.gitignore`: Usado para especificar os arquivos e diretórios que o Git deve ignorar.
   
- `.eslintrc.json`: Usado para configurar o ESLint, uma ferramenta para identificar e relatar padrões encontrados no código JavaScript.
   
- `jsconfig.json`: Usado para configurar o ambiente de desenvolvimento JavaScript.
   
- `package.json`: É o arquivo de configuração do projeto Node.js, que contém as dependências e scripts do projeto.
   
- `package-lock.json`: É um arquivo gerado automaticamente pelo npm para travar as versões exatas das dependências instaladas.

Certifique-se de que todos esses arquivos e diretórios estejam presentes corretamente em seu projeto ao clonar o repositório.

## Contribuição

Este é um projeto desenvolvido como parte de um curso da Alura e, portanto, não é aberto para contribuições externas no momento. No entanto, sinta-se à vontade para fazer um fork deste repositório e personalizá-lo conforme suas necessidades.

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma [issue](https://github.com/makenrosa/alura-feira/issues) neste repositório.

Aproveite o projeto! Se tiver alguma dúvida, não hesite em entrar em contato.
