const questoes = [
  { questao: "Sobre o framework Spring, assinale a alternativa correta:", options: ["É um framework exclusivo para aplicações desktop", "Spring não suporta Inversão de Controle (IoC)", "Spring facilita o desenvolvimento com recursos como Injeção de Dependência", "O Spring substitui completamente o Java EE"], answer: 2 },
  { questao: "O que é Inversão de Controle (IoC)?", options: ["Quando o programador implementa diretamente todas as dependências", "Quando o fluxo de controle é delegado ao cliente da aplicação", "Quando o framework gerencia os objetos e suas dependências", "Quando o controle é passado para o banco de dados"], answer: 2 },
  { questao: "Em relação à Injeção de Dependência (DI), é correto afirmar:", options: ["DI exige que o programador crie todas as instâncias manualmente", "DI quebra o princípio de coesão", "DI reduz o acoplamento entre componentes", "DI só funciona em projetos com banco de dados"], answer: 2 },
  { questao: "Qual anotação Spring indica uma classe que será gerenciada como um componente?", options: ["@Service", "@ManagedBean", "@Inject", "@Component"], answer: 3 },
  { questao: "A camada Model no padrão MVC é responsável por:", options: ["Apresentar os dados na interface gráfica", "Definir a navegação entre páginas", "Representar os dados e a lógica de negócio", "Controlar a requisição e resposta HTTP"], answer: 2 },
  { questao: "No padrão Spring MVC, a camada de visão é comumente implementada com:", options: ["Servlets", "Thymeleaf ou JSP", "Repositórios JPA", "Controllers REST"], answer: 1 },
  { questao: "Em uma aplicação Spring MVC, o controlador (Controller) tem a função de:", options: ["Acessar diretamente o banco de dados", "Exibir dados diretamente na tela", "Receber requisições, processá-las e retornar a visão", "Criar o modelo de dados da aplicação"], answer: 2 },
  { questao: "Assinale a alternativa que define corretamente o papel do Thymeleaf em uma aplicação Spring:", options: ["É um framework de persistência de dados", "É uma ferramenta para testes de unidade", "É uma engine de templates para a camada de visão", "É usado apenas para estilização de páginas HTML"], answer: 2 },
  { questao: "Qual anotação do Spring define uma classe como um controlador?", options: ["@Service", "@Controller", "@Configuration", "@Entity"], answer: 1 },
  { questao: "O que caracteriza um sistema Web em comparação a um sistema Desktop?", options: ["Executa exclusivamente em servidores Linux", "Necessita obrigatoriamente de banco de dados", "É acessado via navegador e utiliza o protocolo HTTP/HTTPS", "É desenvolvido apenas com JavaScript"], answer: 2 },
  { questao: "Quando usamos o padrão MVC no Spring, o que normalmente ocorre após o Controller processar uma requisição?", options: ["O Controller renderiza a página HTML diretamente", "O Controller fecha a conexão com o banco de dados", "O Controller retorna o nome da View a ser exibida", "O Controller se comunica diretamente com o navegador"], answer: 2 },
  { questao: "Qual é a principal vantagem de usar IoC no desenvolvimento com Spring?", options: ["Evita o uso de classes", "Elimina a necessidade de testes", "Promove baixo acoplamento entre componentes", "Melhora o desempenho gráfico da aplicação"], answer: 2 },
  { questao: "O que a anotação @Autowired faz no Spring?", options: ["Cria uma nova instância de uma entidade", "Declara um componente visual", "Injeta uma dependência automaticamente", "Define uma classe como controller"], answer: 2 },
  { questao: "Em uma aplicação Spring MVC, a responsabilidade de renderizar a interface final ao usuário é da:", options: ["Camada de controle", "Camada de modelo", "Camada de banco de dados", "Camada de visão"], answer: 3 },
  { questao: "Qual alternativa apresenta corretamente as camadas de uma aplicação Spring MVC?", options: ["Serviço, Banco, Interface", "Front-end, Middleware, Back-end", "Controller, Model, View", "Cliente, Servidor, Proxy"], answer: 2 },

  { questao: "Em relação ao Spring Framework, qual é uma de suas principais características?", options: ["Só funciona com banco de dados Oracle", "Gera automaticamente interfaces gráficas", "Fornece uma infraestrutura robusta para aplicações Java com baixo acoplamento", "Elimina completamente a necessidade de configuração"], answer: 2 },
  { questao: "Qual vantagem da Injeção de Dependência (DI) no Spring?", options: ["Aumenta o acoplamento entre componentes", "Facilita a troca de implementações sem alterar outras classes", "Elimina o uso de interfaces", "Reduz a legibilidade do código"], answer: 1 },
  { questao: "Quando se usa o padrão MVC, qual o papel do Controller?", options: ["Processar regras de negócio", "Intermediar a comunicação entre a View e o Model", "Exibir dados diretamente ao usuário", "Persistir dados no banco"], answer: 1 },
  { questao: "O que é necessário para o Spring conseguir injetar dependências automaticamente?", options: ["Uma interface chamada Injectable", "Apenas o nome da classe no XML", "Uma anotação como @Autowired", "O uso de arquivos .properties"], answer: 2 },
  { questao: "O uso de interfaces no padrão DI é recomendado porque:", options: ["Força o uso de herança múltipla", "Permite a substituição de implementações com facilidade", "Garante desempenho mais rápido no banco", "Elimina a necessidade de controllers"], answer: 1 },
  { questao: "O que o Spring MVC faz quando encontra uma requisição para um caminho mapeado?", options: ["Envia diretamente ao banco de dados", "Redireciona para uma página JSP sem controle", "Encaminha para o método no controller correspondente", "Gera automaticamente um componente visual"], answer: 2 },
  { questao: "A engine Thymeleaf é utilizada principalmente para:", options: ["Gerenciar dependências de projeto", "Gerar relatórios em PDF", "Construir templates HTML dinâmicos", "Realizar injeção de dependências"], answer: 2 },
  { questao: "O que é o DispatcherServlet no Spring MVC?", options: ["Uma interface gráfica", "Um banco de dados local", "O ponto central de distribuição das requisições", "Um componente do Thymeleaf"], answer: 2 },
  { questao: "Qual anotação mapeia um método em um controller para uma URL específica?", options: ["@Component", "@Repository", "@RequestMapping", "@Entity"], answer: 2 },
  { questao: "Em um sistema web, qual camada é responsável por tratar a entrada de dados do usuário e redirecionar o fluxo da aplicação?", options: ["Modelo", "Visão", "Banco de Dados", "Controlador"], answer: 3 },
  { questao: "Para representar dados em uma página HTML com Thymeleaf, qual sintaxe é usada?", options: ["{{variavel}}", "<% variavel %>", "[[${variavel}]]", "#{variavel}"], answer: 2 },
  { questao: "No contexto do Spring, o que é um bean?", options: ["Um arquivo de configuração", "Um componente gerenciado pelo Spring container", "Um tipo de classe abstrata", "Um estilo de template HTML"], answer: 1 },
  { questao: "Qual o objetivo principal da anotação @Service no Spring?", options: ["Criar um banco de dados", "Marcar uma classe de lógica de negócio para ser gerenciada como bean", "Exibir dados na interface", "Marcar um método como principal da aplicação"], answer: 1 },
  { questao: "Em relação ao ciclo de vida dos beans no Spring, o container é responsável por:", options: ["Injetar as dependências, instanciar e destruir os objetos", "Apenas compilar o código", "Criar interfaces gráficas", "Armazenar dados temporários da aplicação"], answer: 0 },
  { questao: "A principal diferença entre @Component, @Service e @Repository é:", options: ["Apenas o nome, pois todas têm a mesma função", "O escopo de cada uma: visual, lógica e dados, respectivamente", "A forma como se comportam na camada de visão", "@Service é usada apenas em classes abstratas"], answer: 1 }
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