🌩️ Cypress do Zero à Nuvem

Projeto desenvolvido por Kaico Felipe Olivio de Castro
Um guia prático para aprender Cypress na prática — do básico à execução em nuvem 🚀

🧠 Sobre o projeto

Este repositório foi criado com o objetivo de demonstrar na prática o uso de comandos personalizados do Cypress, boas práticas em automação de testes e a configuração de um ambiente de testes moderno e funcional.

A ideia é mostrar como automatizar testes de ponta a ponta (E2E) com qualidade e clareza, aplicando o comando personalizado cy.dataTest, muito utilizado para localizar elementos de forma estável e confiável.

⚙️ Pré-requisitos

Antes de começar, é necessário ter instalado em sua máquina:

Node.js (versão recomendada: v18.15.0 ou superior)

npm (versão recomendada: 9.5.0 ou superior)

Para verificar as versões instaladas:

node -v
npm -v

📦 Instalação

Clone este repositório:

git clone https://github.com/KaicoOlivioCastro/cypress-do-zero-a-nuvem.git


Acesse a pasta do projeto:

cd cypress-do-zero-a-nuvem


Instale as dependências:

npm install


ou, se preferir a versão curta:

npm i

🧪 Executando os testes

⚠️ Antes de rodar os testes, faça uma cópia do arquivo cypress.env.example.json e renomeie para cypress.env.json.

Esse arquivo será usado para armazenar variáveis sensíveis (como credenciais, tokens etc.).
Por segurança, ele já está incluído no .gitignore, garantindo que suas informações não sejam versionadas.

▶️ Executar em modo headless
npm test


ou

npm t

🧭 Executar em modo interativo
npm run cy:open

💡 Objetivo educacional

Este projeto faz parte de um estudo completo sobre automação de testes com Cypress, com o intuito de evoluir do nível iniciante ao avançado, cobrindo desde a configuração local até a integração com pipelines e execução em nuvem.

🌟 Apoie este projeto

Se este projeto te ajudou ou inspirou de alguma forma,
deixe uma estrela ⭐ no repositório — isso faz toda a diferença!

💚 Autor

Kaico Felipe Olivio de Castro
Quality Assurance | Entusiasta de Automação | Apaixonado por Tecnologia