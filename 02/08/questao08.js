function addImageWithAuthor(imageUrl, authorName) {
  const imageGrid = document.getElementById('image-grid');
  if (!imageGrid) {
      console.error('Elemento #image-grid não encontrado.');
      return;
  }

  const imageItem = document.createElement('div');
  imageItem.classList.add('image-item');

  imageItem.setAttribute('data-author', authorName);

  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = `${authorName} artwork`;

  const author = document.createElement('p');
  author.textContent = authorName;

  imageItem.appendChild(image);
  imageItem.appendChild(author);
  imageGrid.appendChild(imageItem);
}

async function getCachedImageInfo(id) {
  const cached = localStorage.getItem(`imgInfo_${id}`);
  if (cached) {
      return JSON.parse(cached);
  }
  try {
      const info = await fetchImageInfo(id);
      localStorage.setItem(`imgInfo_${id}`, JSON.stringify(info));
      return info;
  } catch (error) {
      console.error("Erro ao obter ou cachear info da imagem:", error);
      return null;
  }
}

async function fetchImageInfo(id) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve({ id, author: `Autor ${id}`, description: `Descrição da imagem ${id}` });
      }, 1000);
  });
}

document.getElementById('search-input').addEventListener