const questoes = [
      { questao: "O que caracteriza a arquitetura cliente-servidor?", options: ["Todos os dispositivos são servidores", "O servidor solicita informações ao cliente", "O cliente envia requisições e o servidor responde", "Ambos cliente e servidor têm as mesmas funções"], answer: 2 },
      { questao: "Qual é a principal função do cliente?", options: ["Armazenar dados", "Processar requisições de outros clientes", "Enviar requisições ao servidor", "Controlar o banco de dados"], answer: 2 },
      { questao: "Qual destes é um exemplo de cliente?", options: ["Apache", "MySQL", "Navegador Web", "Tomcat"], answer: 2 },
      { questao: "Principal vantagem da arquitetura cliente-servidor?", options: ["Descentralização total dos serviços", "Facilidade na escalabilidade e manutenção", "Não requer internet", "Compartilhamento de dados sem segurança"], answer: 1 },
      { questao: "O que é um servidor web?", options: ["Um tipo de navegador", "Uma aplicação gráfica", "Um software que processa requisições HTTP", "Um arquivo HTML"], answer: 2 },
      { questao: "Servidor pode atender múltiplos clientes?", options: ["Não", "Sim, se o cliente permitir", "Sim, com multitarefa ou threads", "Apenas um por vez"], answer: 2 },
      { questao: "Protocolo mais usado em sistemas web?", options: ["FTP", "SMTP", "HTTP", "TCP"], answer: 2 },
      { questao: "Sequência de funcionamento correta?", options: ["Cliente → Servidor → Cliente → Banco", "Servidor → Banco → Cliente", "Cliente → Requisição → Servidor → Resposta", "Cliente → Banco → Servidor"], answer: 2 },
      { questao: "Camada que lida com a interface do usuário?", options: ["Dados", "Middleware", "Apresentação", "Negócios"], answer: 2 },
      { questao: "Camada responsável pela lógica da aplicação?", options: ["Apresentação", "Negócios", "Dados", "Interface"], answer: 1 },
      { questao: "Banco de dados geralmente está em?", options: ["Cliente", "Sistema embarcado", "Servidor", "Navegador"], answer: 2 },
      { questao: "Cliente acessa servidor web com?", options: ["Servidor instalado", "Interpretador SQL", "Navegador e rede", "Firewall ativo"], answer: 2 },
      { questao: "Quem gerencia requisições ao banco?", options: ["HTML", "Backend", "Frontend", "CSS"], answer: 1 },
      { questao: "O backend representa?", options: ["Navegador", "Interface", "Lógica e acesso a dados", "CSS"], answer: 2 },
      { questao: "O que é HTTP?", options: ["Linguagem de programação", "Banco de dados", "Protocolo de hipertexto", "Tipo de navegador"], answer: 2 },
      { questao: "Função principal do servidor?", options: ["Visualizar interfaces", "Receber dados via formulário", "Responder às requisições do cliente", "Criar arquivos HTML"], answer: 2 },
      { questao: "O cliente geralmente é?", options: ["Servidor de arquivos", "Navegador ou app", "Terminal SSH", "Banco de dados"], answer: 1 },
      { questao: "Servidor pode ser um software?", options: ["Não, apenas hardware", "Sim", "Depende do sistema", "Apenas se for local"], answer: 1 },
      { questao: "Middleware é?", options: ["Interface gráfica", "Serviço de armazenamento", "Camada intermediária entre cliente e servidor", "Editor de código"], answer: 2 },
      { questao: "Dados sensíveis devem ser?", options: ["Publicados", "Armazenados no frontend", "Transmitidos sem criptografia", "Protegidos e criptografados"], answer: 3 },

      { questao: "O que é um framework web?", options: ["Sistema operacional", "Banco de dados", "Conjunto de ferramentas para desenvolvimento", "Editor de código"], answer: 2 },
      { questao: "Framework frontend?", options: ["Django", "Express.js", "Angular", "PostgreSQL"], answer: 2 },
      { questao: "Framework backend?", options: ["React", "Vue.js", "Laravel", "HTML"], answer: 2 },
      { questao: "React é?", options: ["Banco relacional", "Framework backend", "Biblioteca para UI", "Protocolo de rede"], answer: 2 },
      { questao: "Node.js serve para?", options: ["Estilo CSS", "Gerenciar bancos", "Executar JS no servidor", "Criar HTML"], answer: 2 },
      { questao: "Benefício de frameworks?", options: ["Aumentar complexidade", "Eliminar HTML", "Reduzir tempo de desenvolvimento", "Substituir servidores"], answer: 2 },
      { questao: "O que é MVC?", options: ["Modelo em HTML", "Separação de dados, lógica e visual", "Tipo de banco", "Linguagem de programação"], answer: 1 },
      { questao: "No MVC, o Model é?", options: ["Interface gráfica", "Gerencia dados e regras", "Mostra UI", "Estilo CSS"], answer: 1 },
      { questao: "No MVC, a View é?", options: ["Negócios", "Banco", "Interface", "Roteamento"], answer: 2 },
      { questao: "Framework baseado em MVC?", options: ["React", "Flask", "Django", "Bootstrap"], answer: 2 },

      { questao: "Express.js é para?", options: ["Java", "Python", "JavaScript (Node.js)", "PHP"], answer: 2 },
      { questao: "Framework PHP?", options: ["Angular", "Laravel", "Vue.js", "Spring"], answer: 1 },
      { questao: "Framework para Java corporativo?", options: ["Laravel", "Spring", "Vue.js", "Flask"], answer: 1 },
      { questao: "Django é escrito em?", options: ["Java", "Python", "PHP", "JS"], answer: 1 },
      { questao: "Frontend e backend se comunicam via?", options: ["Requisições HTTP", "Banco compartilhado", "CSV", "Cookies"], answer: 0 },
      { questao: "O que é SPA?", options: ["Servidor privado", "Página única que carrega dados dinamicamente", "Sistema de permissão avançado", "Script para acesso remoto"], answer: 1 },
      { questao: "Framework CSS?", options: ["React", "Tailwind", "Node", "Laravel"], answer: 1 },
      { questao: "API REST usa?", options: ["Sockets", "Protocolo SSH", "HTTP para manipular recursos", "DNS"], answer: 2 },
      { questao: "SSR significa?", options: ["Server-side rendering", "Simple server request", "Single site response", "Static system router"], answer: 0 },
      { questao: "React e Vue são?", options: ["Frameworks backend", "Linguagens", "Bibliotecas/frameworks frontend", "Bancos de dados"], answer: 2 }
    ];

const quizDiv = document.getElementById("quiz");
const DivPaginacao = document.getElementById("paginacao");
const questoesPorPagina = 10;
let currentPage = 0;

function renderPage(page) {
    quizDiv.innerHTML = "";
    const start = page * questoesPorPagina;
    const end = Math.min(start + questoesPorPagina, questoes.length);
    for (let i = start; i < end; i++) {
        const q = questoes[i];
        const qDiv = document.createElement("div");
        qDiv.className = "questao";
        const title = document.createElement("h3");
        title.textContent = `${i + 1}. ${q.questao}`;
        qDiv.appendChild(title);

        const ul = document.createElement("ul");
        ul.className = "options";

        q.options.forEach((opt, idx) => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            btn.textContent = opt;
            btn.onclick = () => {
                if (idx === q.answer) {
                    btn.className = "correct";
                    result.textContent = "✅ Correto!";
                    result.className = "result correct";
                } else {
                    btn.className = "incorrect";
                    result.textContent = `❌ Incorreto. Resposta correta: ${q.options[q.answer]}`;
                    result.className = "result incorrect";
                }
                ul.querySelectorAll("button").forEach(b => b.disabled = true);
            };
            li.appendChild(btn);
            ul.appendChild(li);
        });
        const result = document.createElement("div");
        result.className = "result";
        qDiv.appendChild(ul);
        qDiv.appendChild(result);
        quizDiv.appendChild(qDiv);
    }
}

function renderpaginacao() {
    DivPaginacao.innerHTML = "";

    const totalPages = Math.ceil(questoes.length / questoesPorPagina);

    // Botão Anterior
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "◀ Anterior";
    prevBtn.disabled = currentPage === 0;
    prevBtn.onclick = () => {
        if (currentPage > 0) {
            currentPage--;
            renderPage(currentPage);
            renderpaginacao();
        }
    };
    DivPaginacao.appendChild(prevBtn);

    // Botões numéricos
    for (let i = 0; i < totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.disabled = i === currentPage;
        btn.onclick = () => {
            currentPage = i;
            renderPage(currentPage);
            renderpaginacao();
        };
        DivPaginacao.appendChild(btn);
    }

    // Botão Próximo
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Próximo ▶";
    nextBtn.disabled = currentPage >= totalPages - 1;
    nextBtn.onclick = () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            renderPage(currentPage);
            renderpaginacao();
        }
    };
    DivPaginacao.appendChild(nextBtn);
}


renderPage(currentPage);
renderpaginacao();