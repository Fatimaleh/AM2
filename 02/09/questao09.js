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

    imageItem.addEventListener('click', function() {
        showImageDetails(authorName);  // Passar o nome do autor como ID
    });
}

document.getElementById('search-input').addEventListener('input', function(event) {
    const searchValue = event.target.value.toLowerCase();
    const images = document.querySelectorAll('.image-item');

    images.forEach(image => {
        const author = image.getAttribute('data-author').toLowerCase();

        if (author.includes(searchValue)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
});

async function fetchImageInfo(id) {
    // Simulando uma chamada à API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                author: id,
                width: '800',
                height: '600',
                url: 'https://example.com/image.jpg'
            });
        }, 1000);
    });
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

async function showImageDetails(id) {
    try {
        const info = await getCachedImageInfo(id);
        if (info) {
            document.getElementById("modal-author").innerText = `Autor: ${info.author}`;
            document.getElementById("modal-dimensions").innerText = `Dimensões: ${info.width} x ${info.height}`;
            document.getElementById("modal-url").innerText = `URL: ${info.url}`;
            document.getElementById("details-modal").style.display = "block";
        }
    } catch (error) {
        console.error("Erro ao mostrar detalhes da imagem:", error);
    }
}

function closeModal() {
    document.getElementById("details-modal").style.display = "none";
}
