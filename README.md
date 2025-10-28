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
📍 LinkedIn
 [(https://www.linkedin.com/in/kaico-felipe-olivio-de-castro-882a8519b/)]

“Testar é garantir que a experiência do usuário seja tão boa quanto o esperado — e automatizar é o caminho para isso.”