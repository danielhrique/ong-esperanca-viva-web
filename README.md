# ONG Esperança Viva - Plataforma Web

Projeto desenvolvido para a disciplina de Desenvolvimento Front-End, consolidando HTML5 semântico, CSS3 responsivo, JavaScript modular, acessibilidade e práticas de versionamento.

## Objetivo

A aplicação simula uma plataforma digital para uma organização do terceiro setor. O projeto apresenta a ONG, divulga iniciativas sociais, permite o cadastro de apoiadores e demonstra práticas profissionais de organização, documentação, controle de versão e preparação para publicação.

## Estrutura do Projeto

```text
versionamento_e_acessibilidade/
├── index.html
├── README.md
├── desafio.txt
├── objetivo.txt
├── html/
│   ├── inicio.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── styles.css
├── imagens/
│   └── voluntarios-acao-social.png
└── js/
    ├── main.js
    └── modules/
        ├── notifications.js
        ├── routes.js
        ├── storage.js
        ├── templates.js
        └── validation.js
```

## Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com variáveis, Grid, Flexbox e media queries
- JavaScript ES Modules
- History API para navegação SPA
- localStorage para persistência local
- Toastify JS para notificações visuais
- Git e GitFlow para controle de versão

## Organização Técnica

A raiz contém o arquivo `index.html`, responsável por direcionar o acesso inicial para a aplicação. A pasta `html/` concentra as páginas da interface, a pasta `css/` centraliza a folha de estilos, a pasta `imagens/` armazena os recursos visuais e a pasta `js/` reúne o arquivo principal e os módulos separados por responsabilidade.

A lógica JavaScript foi organizada em módulos independentes. O arquivo `main.js` inicializa a aplicação, `routes.js` controla a navegação SPA, `templates.js` gera os conteúdos dinâmicos, `validation.js` gerencia validações do formulário, `storage.js` encapsula o uso do localStorage e `notifications.js` centraliza os toasts.

## Versionamento

O projeto utiliza uma estratégia inspirada no GitFlow:

- `main`: versão estável do projeto.
- `develop`: branch de integração das funcionalidades.
- `feature/*`: branches criadas para implementação de recursos específicos.

Os commits devem seguir uma nomenclatura semântica, como:

```text
feat: adiciona estrutura inicial da aplicação
style: aplica layout responsivo com CSS Grid
fix: corrige validação visual do formulário
 docs: atualiza instruções do README
```

## Acessibilidade

O projeto foi revisado com foco nas diretrizes WCAG 2.1 nível AA. Entre os cuidados aplicados estão:

- uso de HTML semântico;
- textos alternativos em imagens relevantes;
- campos de formulário associados a `label`;
- contraste adequado entre texto e fundo;
- navegação por teclado;
- estados visíveis de foco;
- mensagens de feedback com atributos ARIA quando necessário;
- estrutura de títulos organizada de forma hierárquica.

### Checklist WCAG 2.1 AA

- Conteúdo textual com contraste adequado em fundos claros e escuros.
- Elementos interativos acessíveis por teclado.
- Indicadores visuais de foco em links, botões e campos de formulário.
- Formulários com rótulos explícitos e mensagens de validação compreensíveis.
- Imagens informativas com atributo `alt` descritivo.
- Navegação estruturada com elementos semânticos.

## Como Executar

A aplicação pode ser aberta diretamente durante a fase de desenvolvimento ou executada com Vite para simular um ambiente local com servidor.

```bash
npm install
npm run dev
```

Também é possível abrir o arquivo `html/inicio.html` diretamente no navegador para inspeções simples da interface estática.

## Build de Produção

A build de produção é gerada com Vite. O processo agrupa e minifica os módulos JavaScript, compacta a folha CSS, reescreve os caminhos dos assets e executa um pós-build para minificar os arquivos HTML gerados em `dist/`.

```bash
npm run build
```

Após a execução, os arquivos prontos para publicação ficam disponíveis na pasta `dist/`. Para conferir localmente a versão final, utilize:

```bash
npm run preview
```

## Preparação Para Produção

Antes do deploy, recomenda-se:

- revisar links internos e caminhos de imagens;
- validar o HTML no W3C Validator;
- verificar contraste e navegação por teclado;
- compactar imagens quando necessário;
- testar a aplicação em diferentes larguras de tela;
- confirmar o funcionamento do formulário e do localStorage.

## Otimização de Imagens

A imagem principal foi convertida de PNG para WebP usando Sharp, com redimensionamento para 960px de largura e qualidade 82. O processo é executado com:

```bash
npm run optimize:images
```

A otimização reduziu a imagem de aproximadamente 491 KB para 39,7 KB, preservando qualidade suficiente para a área hero e melhorando o carregamento em conexões móveis.

## Manutenção

Novas funcionalidades devem ser criadas em branches `feature/*`, revisadas antes da integração na branch `develop` e promovidas para `main` apenas quando estiverem estáveis. Essa organização reduz riscos, preserva o histórico e facilita a colaboração em equipe.
