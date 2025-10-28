<h1 align="center">🌩️ <strong>Cypress do Zero à Nuvem</strong></h1>

<p align="center">
  <b>Desenvolvido por <span style="color:#4ade80;">Kaico Felipe Olivio de Castro</span></b><br>
  Um guia prático para aprender <b>Cypress</b> na prática — do básico à execução em nuvem 🚀
</p>

---

### 🧠 Sobre o projeto
Este repositório foi criado para demonstrar na prática o uso de comandos personalizados do Cypress, aplicando boas práticas e uma configuração moderna de testes.  
💡 O foco é mostrar como automatizar testes **E2E (End-to-End)** utilizando o comando customizado `cy.dataTest`, garantindo mais estabilidade e legibilidade nos scripts.

---

### ⚙️ Pré-requisitos
Antes de começar, certifique-se de ter o seguinte instalado:
- 🟢 **Node.js** → `v18.15.0` ou superior  
- 🟣 **npm** → `9.5.0` ou superior  

Verifique as versões com:
```bash

node -v
npm -v

📦 Instalação
1️⃣ Clone o repositório:



git clone https://github.com/KaicoOlivioCastro/cypress-do-zero-a-nuvem.git
2️⃣ Acesse a pasta do projeto:


cd cypress-do-zero-a-nuvem
3️⃣ Instale as dependências:


npm install
# ou
npm i
🧪 Executando os testes
⚠️ Antes de rodar os testes, faça uma cópia do arquivo cypress.env.example.json e renomeie para cypress.env.json.
Esse arquivo guarda variáveis sensíveis (como credenciais, tokens) e já está incluso no .gitignore, garantindo que não seja versionado ✅

Executar em modo headless:


npm test
# ou
npm t
Executar em modo interativo:


npm run cy:open
🎯 Objetivo educacional
Este projeto faz parte do meu estudo de automação de testes com Cypress, com foco em evoluir do básico à execução em nuvem, abordando:

Estrutura e boas práticas de automação

Criação de comandos customizados (cy.dataTest)

Integração com pipelines CI/CD

🌟 Apoie este projeto
Se este projeto te ajudou, deixe uma estrela (⭐) — isso ajuda muito e motiva a continuar criando conteúdo aberto 💚

👨‍💻 Autor
<span style="color:#4ade80;">Kaico Felipe Olivio de Castro</span>
Quality Assurance | Entusiasta de Automação | Apaixonado por Tecnologia
📍 LinkedIn (adicione seu link real aqui)

🗣️ “Testar é garantir que a experiência do usuário seja tão boa quanto o esperado — e automatizar é o caminho para isso.”

🛠️ Tecnologias utilizadas
Ferramenta	Descrição
🧪 Cypress	Framework principal de testes automatizados
🟢 Node.js	Ambiente de execução JavaScript
📦 npm	Gerenciador de dependências
☁️ Execução em Nuvem	(planejada) para CI/CD e pipelines

<p align="center">Feito com 💚 por <b>Kaico Felipe Olivio de Castro</b></p> ```