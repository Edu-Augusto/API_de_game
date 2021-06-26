# API_de_game
<div class="Header">
        <h2>API de games com consulta, cadastro, edição e deleção de itens</h2>
        <p>Esta é uma API de uma loja game, bem simples e utilizada para aprimoração dos conhecimentos em API rest.Sendo minha primeira API REST criada, é um sistema bem simples, mas em projetos futuros aguardem por API's mais robustas e chegando no nivel RESTful.
        Atenciosamente Eduardo Augusto Oliveira 
        </p>
        <h3>Ferramentas utilizadas e necessárias do projeto</h3>
        <p>A seguir estão os scripts necessários para a execução do API.Para executalo com os resultados esperados, abra seu CMD na pasta do projeto e digite os seguintes scripts:</p>
        <ol>
            <li>Express => npm install express --save</li>
            <li>Body-parser => npm install body-parser --save</li>
            <li>Mysql2 => npm install mysql2 --save</li>
            <li>Sequelize => npm install sequelize --save</li>
        </ol>
        <h3>Postman</h3>
        <p>Este projeto foi testado e executado utiliando a ferramenta Postman, recomendo que utilize e teste todas as rotas e funcionalitades, segue o link para download no desktop:</p>
        <ul>
            <li><a href="https://www.postman.com/downloads/">Postman</a></li>
        </ul>
    </div>
    <div class="Body">
        <h3>Observações para a inicialização</h3>
        <p>Para iniciar o projeto, modifique o script da pasta .database/database.js e coloque seu usuário e senha do myslq para que a conexão ao banco aconteça, a seguir o local:</p>
        <pre>
            <code>const connection=new Sequelize('api', '>>Usuário aqui<<', '>>Senha aqui<<',{
                host:'localhost',</code>
        </pre>
        <p>Após todos os passos anteriores, digite no seu CMD <strong>"node index.js"</strong> e inicie suas atividades com a API.</p>
        <h3>Contato</h3>
        <p>Para qualquer dúvida em relação ao projeto ou outros assuntos, entre em contato nas redes sociais a seguir:</p>
        <ul>
            <li><a href="https://www.instagram.com/eduu_augusto/">Instagran</a></li>
            <li><a href="https://www.instagram.com/eduu_augusto/">Linkedin</a></li>
            <li>Email: duduaugustooliveira@gmail.com</li>
        </ul>
    </div>
