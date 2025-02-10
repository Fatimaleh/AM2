document.addEventListener('DOMContentLoaded', function () {
    createComparisonTable();
  });
  
  const contents = {
    midias: `
      <section id="midias">
        <h2>Mídias e SVG</h2>
        <img src="https://picsum.photos/400/300" alt="Imagem Lorem Picsum" />
        <svg width="150" height="150">
          <rect x="10" y="10" width="100" height="50" fill="var(--cor-principal)" />
          <circle cx="60" cy="100" r="30" fill="var(--cor-secundaria)" />
        </svg>
        <audio controls>
          <source src="/assets/audio/Natal.m4a" type="audio/mpeg">
          Seu navegador não suporta a tag de áudio!
        </audio>
        <video width="320" height="240" controls>
          <source src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/refs/heads/master/sample.mp4" type="video/mp4">
          Seu navegador não suporta a tag de vídeo!
        </video>
      </section>
    `,
    galeria: `
      <section id="galeria">
        <h2>Galeria de Imagens</h2>
        <div class="galeria-imagens">
          <img src="https://picsum.photos/200/150?1" alt="Imagem 1" />
          <img src="https://picsum.photos/200/150?2" alt="Imagem 2" />
          <img src="https://picsum.photos/200/150?3" alt="Imagem 3" />
        </div>
      </section>
    `,
    contato: `
      <section id="contato">
        <h2>Formulário de Contato</h2>
        <form>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    `,
    textoDinamico: `
      <section id="texto-dinamico">
        <h2>Seção com Texto</h2>
        <p class="texto-destaque">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p><span>Proin pellentesque</span> nunc vel sapien vulputate, sed dictum enim molestie.</p>
      </section>
    `,
    noticias: `
      <section id="noticias">
        <h2>Notícias Recentes</h2>
        <article>
          <h3>Notícia 1</h3>
          <p>Esta é a primeira notícia. Aqui estão os detalhes da notícia...</p>
        </article>
        <article>
          <h3>Notícia 2</h3>
          <p>Esta é a segunda notícia. Aqui estão os detalhes da notícia...</p>
        </article>
        <article>
          <h3>Notícia 3</h3>
          <p>Esta é a terceira notícia. Aqui estão os detalhes da notícia...</p>
        </article>
      </section>
    `,
    armazenamento: `
      <section id="armazenamento">
        <h2>Armazenamento</h2>
        <div>
          <button onclick="storeLocal()">Armazenar no localStorage</button>
          <button onclick="storeSession()">Armazenar no sessionStorage</button>
          <button onclick="storeIndexedDB()">Armazenar no IndexedDB</button>
        </div>
      </section>
    `,
    tabelaComparativa: `
      <section id="tabela-comparativa">
        <h2>Tabela Comparativa</h2>
        <div id="tabela-container"></div>
      </section>
    `
  };
  
  function loadContent(section) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = contents[section];
  }
  
  function formatDate(date) {
    const options = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
  }
  
  function updateDateTime() {
    const currentTime = new Date();
    const formattedTime = formatDate(currentTime);
    document.getElementById('current-time').textContent = formattedTime;
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime();
  
  function storeLocal() {
    localStorage.setItem('username', 'Fatima');
    alert(`Stored in localStorage: ${localStorage.getItem('username')}`);
  }
  
  function storeSession() {
    sessionStorage.setItem('sessionKey', 'SessionData');
    alert(`Stored in sessionStorage: ${sessionStorage.getItem('sessionKey')}`);
  }
  
  function storeIndexedDB() {
    let db;
    const request = indexedDB.open('myDatabase', 1);
  
    request.onupgradeneeded = (event) => {
      db = event.target.result;
      const objectStore = db.createObjectStore('users', { keyPath: 'id' });
      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: true });
    };
  
    request.onsuccess = (event) => {
      db = event.target.result;
      const transaction = db.transaction(['users'], 'readwrite');
      const objectStore = transaction.objectStore('users');
      
      objectStore.add({ id: 1, name: 'Fatima', email: 'fatima@example.com' });
      objectStore.add({ id: 2, name: 'Leticia', email: 'leticia@example.com' });
  
      const getRequest = objectStore.get(1);
      getRequest.onsuccess = (event) => {
        alert(`Stored in IndexedDB: ${JSON.stringify(getRequest.result)}`);
      };
    };
  
    request.onerror = (event) => {
      alert('Database error:', event.target.errorCode);
    };
  }
  
  function createComparisonTable() {
    const container = document.getElementById('tabela-container');
    const table = document.createElement('table');
    table.border = "1";
  
    // Cabeçalho da tabela
    const headerRow = `
      <tr>
        <th>Característica</th>
        <th>localStorage</th>
        <th>sessionStorage</th>
        <th>IndexedDB</th>
      </tr>
    `;
  
    // Linhas da tabela
    const rows = `
      <tr>
        <td>Volume de Dados Suportado</td>
        <td>Aprox. 5MB por domínio</td>
        <td>Aprox. 5MB por domínio</td>
        <td>Grande volume de dados (dezenas de MB)
    `;
  };
  document.addEventListener('DOMContentLoaded', function () {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    createComparisonTable();
    createExampleContent();
  });
  
  function formatDate(date) {
    const options = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
  }
  
  function updateDateTime() {
    const currentTime = new Date();
    const formattedTime = formatDate(currentTime);
    document.getElementById('current-time').textContent = formattedTime;
  }
  
  function createComparisonTable() {
    const container = document.getElementById('tabela-container');
    const table = document.createElement('table');
    table.border = "1";
  
    // Cabeçalho da tabela
    const headerRow = `
      <tr>
        <th>Característica</th>
        <th>localStorage</th>
        <th>sessionStorage</th>
        <th>IndexedDB</th>
      </tr>
    `;
  
    // Linhas da tabela
    const rows = `
      <tr>
        <td>Volume de Dados Suportado</td>
        <td>Aprox. 5MB por domínio</td>
        <td>Aprox. 5MB por domínio</td>
        <td>Grande volume de dados (dezenas de MB ou mais)</td>
      </tr>
      <tr>
        <td>Forma de Armazenamento</td>
        <td>Pares chave/valor (strings)</td>
        <td>Pares chave/valor (strings)</td>
        <td>Banco de dados NoSQL, permite armazenar objetos complexos</td>
      </tr>
      <tr>
        <td>Persistência</td>
        <td>Persistente (até ser removido manualmente)</td>
        <td>Temporário (dados são removidos ao fechar o navegador)</td>
        <td>Persistente (até ser removido manualmente)</td>
      </tr>
      <tr>
        <td>Casos de Uso</td>
        <td>Preferências de usuário, estado de login</td>
        <td>Dados temporários, dados sensíveis</td>
        <td>Grandes volumes de dados, consultas complexas, dados estruturados</td>
      </tr>
    `;
  
    table.innerHTML = headerRow + rows;
    container.appendChild(table);
  }
  
  function createExampleContent() {
    const container = document.getElementById('exemplos-container');
    const examples = `
      <h3>Exemplo de Uso de localStorage</h3>
      <pre>
  function storeLocal() {
    localStorage.setItem('username', 'Fatima');
    alert(\`Stored in localStorage: \${localStorage.getItem('username')}\`);
  }
      </pre>
      
      <h3>Exemplo de Uso de sessionStorage</h3>
      <pre>
  function storeSession() {
    sessionStorage.setItem('sessionKey', 'SessionData');
    alert(\`Stored in sessionStorage: \${sessionStorage.getItem('sessionKey')}\`);
  }
      </pre>
      
      <h3>Exemplo de Uso de IndexedDB</h3>
      <pre>
  function storeIndexedDB() {
    let db;
    const request = indexedDB.open('myDatabase', 1);
  
    request.onupgradeneeded = (event) => {
      db = event.target.result;
      const objectStore = db.createObjectStore('users', { keyPath: 'id' });
      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: true });
    };
  
    request.onsuccess = (event) => {
      db = event.target.result;
      const transaction = db.transaction(['users'], 'readwrite');
      const objectStore = transaction.objectStore('users');
      
      objectStore.add({ id: 1, name: 'Fatima', email: 'fatima@example.com' });
      objectStore.add({ id: 2, name: 'Leticia', email: 'leticia@example.com' });
  
      const getRequest = objectStore.get(1);
      getRequest.onsuccess = (event) => {
        alert(\`Stored in IndexedDB: \${JSON.stringify(getRequest.result)}\`);
      };
    };
  
    request.onerror = (event) => {
      alert('Database error:', event.target.errorCode);
    };
  }
      </pre>
    `;
    container.innerHTML = examples;
  }
      