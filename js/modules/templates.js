const heroImageUrl = new URL('../../imagens/voluntarios-acao-social.webp', import.meta.url).href;

const contactItems = [
  'E-mail: contato@ongesperancaviva.org',
  'Telefone: (11) 99999-9999',
  'Endereço: Rua da Solidariedade, 100 - São Paulo, SP',
];

const projectCards = [
  {
    badge: 'Doações',
    badgeClass: 'badge-warning',
    title: 'Campanhas de doação',
    texts: [
      'As campanhas arrecadam alimentos, roupas, materiais de higiene e contribuições financeiras destinadas às comunidades atendidas.',
      'As doações financeiras ajudam na compra de itens essenciais, manutenção dos projetos sociais e ampliação das ações realizadas.',
    ],
  },
  {
    badge: 'Voluntariado',
    badgeClass: 'badge-success',
    title: 'Voluntariado',
    texts: [
      'O trabalho voluntário permite a participação direta nas ações sociais, auxiliando campanhas, distribuição de doações e apoio comunitário.',
      'Para participar, o interessado deve acessar a página de cadastro e preencher suas informações de contato.',
    ],
  },
];

const contactPreferenceOptions = [
  { value: 'email', label: 'E-mail' },
  { value: 'telefone', label: 'Telefone' },
  { value: 'whatsapp', label: 'WhatsApp' },
];

const supportTypeOptions = [
  { value: 'doacao', label: 'Doação financeira' },
  { value: 'voluntariado', label: 'Trabalho voluntário' },
  { value: 'ambos', label: 'Doação e voluntariado' },
];

const brazilianStates = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
  'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
  'SP', 'SE', 'TO',
];

function renderContactItems(items) {
  return items.map((item) => `<p>${item}</p>`).join('');
}

function renderProjectCards(cards) {
  return cards.map((card) => `
    <div class="card">
      <span class="badge ${card.badgeClass}">${card.badge}</span>
      <h2>${card.title}</h2>
      ${card.texts.map((text) => `<p>${text}</p>`).join('')}
    </div>
  `).join('');
}

function renderOptions(options) {
  return options.map((option) => `
    <option value="${option.value}">${option.label}</option>
  `).join('');
}

function renderStateOptions(states) {
  return states.map((state) => `
    <option value="${state}">${state}</option>
  `).join('');
}

const templates = {
  inicio: () => `
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Terceiro setor com presença digital</p>
        <h1>ONG Esperança Viva</h1>
        <p>
          Apoiamos comunidades em situação de vulnerabilidade por meio de
          doações, campanhas solidárias e participação voluntária.
        </p>
        <a class="button" href="cadastro.html">Quero participar</a>
      </div>

      <img
        src="${heroImageUrl}"
        alt="Pessoa voluntária de costas usando camiseta com a palavra Volunteer durante uma ação social"
      >
    </section>

    <section class="feedback-panel" aria-label="Aviso de impacto social">
      <span class="badge badge-success">Transparência</span>
      <div class="toast-card" role="status">
        <strong>Campanha ativa</strong>
        <p>Novos voluntários podem se cadastrar para participar das ações deste mês.</p>
      </div>
    </section>

    <section class="content-section">
      <h2>Missão</h2>
      <p>
        Nossa missão é conectar pessoas dispostas a ajudar com iniciativas
        solidárias que promovem acolhimento, cidadania e transformação social.
      </p>
    </section>

    <section class="content-section highlight">
      <h2>Como ajudar</h2>
      <p>
        Os apoiadores podem contribuir por meio de doações, participação em
        campanhas sociais ou cadastro como voluntários nas ações realizadas
        pela ONG.
      </p>
    </section>

    <section class="content-section">
      <h2>Contato</h2>
      ${renderContactItems(contactItems)}
    </section>
  `,

  projetos: () => `
    <section class="page-intro">
      <p class="eyebrow">Projetos sociais</p>
      <h1>Projetos e Iniciativas Solidárias</h1>
      <p>
        Conheça as frentes de atuação da ONG e veja como contribuir para
        campanhas, doações e atividades voluntárias.
      </p>
    </section>

    <section class="alert alert-info" role="status">
      <strong>Informação importante:</strong>
      <p>As campanhas são atualizadas conforme a disponibilidade de recursos e voluntários.</p>
    </section>

    <section class="content-section">
      <h2>Frentes de atuação</h2>
      <p>
        A ONG Esperança Viva atua em diferentes projetos sociais voltados ao
        acolhimento de famílias, arrecadação de alimentos, apoio educacional e
        incentivo à participação voluntária.
      </p>
    </section>

    <section class="card-grid" aria-label="Blocos de projetos sociais">
      ${renderProjectCards(projectCards)}
    </section>

    <section class="content-section highlight">
      <h2>Como participar</h2>
      <p>
        O usuário pode contribuir realizando uma doação, divulgando as campanhas
        ou se cadastrando como voluntário para participar das iniciativas da ONG.
      </p>
      <a class="button" href="cadastro.html">Cadastrar como voluntário</a>
    </section>
  `,

  cadastro: () => `
    <section class="page-intro">
      <p class="eyebrow">Cadastro de apoiadores</p>
      <h1>Participe das nossas ações</h1>
      <p>
        Preencha o formulário abaixo para se cadastrar como apoiador da ONG
        Esperança Viva e receber informações sobre doações, campanhas e
        atividades voluntárias.
      </p>
    </section>

    <section class="alert alert-success" role="status">
      <strong>Cadastro seguro:</strong>
      <p>Os campos com validação ajudam a reduzir erros antes do envio das informações.</p>
    </section>

    <section class="modal-preview" aria-label="Exemplo de modal informativo">
      <details class="modal-card">
        <summary class="button">Ver orientações de cadastro</summary>
        <div class="modal-content" role="dialog" aria-labelledby="modal-title">
          <h2 id="modal-title">Orientações para apoiadores</h2>
          <p>Confira seus dados antes do envio e utilize os formatos solicitados para CPF, telefone e CEP.</p>
          <span class="badge badge-info">Feedback informativo</span>
        </div>
      </details>
    </section>

    <section class="form-section">
      <p class="form-feedback" role="status" aria-live="polite">Preencha os campos obrigatórios para concluir o cadastro.</p>
      <form action="#" method="post">
        <fieldset>
          <legend>Dados pessoais</legend>

          <label for="nome">Nome completo</label>
          <input type="text" id="nome" name="nome" minlength="3" required>

          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required>

          <label for="nascimento">Data de nascimento</label>
          <input type="date" id="nascimento" name="nascimento" required>

          <label for="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="000.000.000-00"
            maxlength="14"
            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
            title="Formato: 000.000.000-00"
            required
          >
        </fieldset>

        <fieldset>
          <legend>Contato</legend>

          <label for="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(00) 00000-0000"
            maxlength="15"
            pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
            title="Formato: (00) 00000-0000"
            required
          >

          <label for="preferencia-contato">Preferência de contato</label>
          <select id="preferencia-contato" name="preferencia-contato" required>
            <option value="">Selecione</option>
            ${renderOptions(contactPreferenceOptions)}
          </select>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <label for="cep">CEP</label>
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="00000-000"
            maxlength="9"
            pattern="[0-9]{5}-[0-9]{3}"
            title="Formato: 00000-000"
            required
          >

          <label for="endereco">Endereço</label>
          <input type="text" id="endereco" name="endereco" required>

          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" required>

          <label for="estado">Estado</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            ${renderStateOptions(brazilianStates)}
          </select>
        </fieldset>

        <fieldset>
          <legend>Forma de engajamento</legend>

          <label for="tipo-apoio">Como deseja contribuir?</label>
          <select id="tipo-apoio" name="tipo-apoio" required>
            <option value="">Selecione</option>
            ${renderOptions(supportTypeOptions)}
          </select>

          <label for="disponibilidade">Disponibilidade semanal</label>
          <input type="number" id="disponibilidade" name="disponibilidade" min="1" max="40" placeholder="Horas por semana">

          <label for="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="5" placeholder="Conte brevemente como deseja ajudar"></textarea>
        </fieldset>

        <button type="submit">Enviar cadastro</button>
      </form>
    </section>
  `,
};

export function renderTemplate(route = 'inicio') {
  const main = document.querySelector('main');
  const template = templates[route] || templates.inicio;

  if (!main) {
    return;
  }

  main.innerHTML = template();
}

export function updateFooterYear() {
  const footer = document.querySelector('.site-footer p');

  if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} ONG Esperança Viva. Todos os direitos reservados.`;
  }
}
