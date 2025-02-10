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