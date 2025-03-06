let images = [];
        let currentIndex = 0;

        // Função assíncrona para buscar as imagens da API
        async function fetchImages() {
            try {
                const response = await fetch('https://picsum.photos/v2/list?page=1&limit=100');
                if (!response.ok) {
                    throw new Error('Erro ao buscar imagens');
                }
                images = await response.json();
                images = images.map((image, index) => ({ ...image, newIndex: index + 1 })).sort(() => Math.random() - 0.5);
                loadImages();
            } catch (error) {
                console.error('Erro ao carregar imagens:', error);
                alert('Erro ao carregar as imagens. Tente novamente mais tarde.');
            }
        }

        // Função para carregar as imagens no carrossel
        function loadImages() {
            const carousel = document.getElementById("carousel");
            carousel.innerHTML = "";
            images.forEach((image, i) => {
                let img = document.createElement("img");
                img.src = `https://picsum.photos/id/${image.id}/600/400`;
                img.dataset.author = image.author;
                img.dataset.id = image.id;
                img.dataset.index = i + 1;
                img.dataset.width = 600;
                img.dataset.height = 400;
                img.addEventListener("mouseover", showTooltip);
                img.addEventListener("mouseout", hideTooltip);
                carousel.appendChild(img);
            });
        }

        // Função para mostrar a dica de ferramenta
        function showTooltip(event) {
            const tooltip = document.getElementById("tooltip");
            tooltip.innerText = `Imagem ${event.target.dataset.index} - Autor: ${event.target.dataset.author} - Dimensões: ${event.target.dataset.width}x${event.target.dataset.height}`;
            tooltip.style.visibility = "visible";
            tooltip.style.top = `${event.clientY + 10}px`;
            tooltip.style.left = `${event.clientX + 10}px`;
        }

        // Função para esconder a dica de ferramenta
        function hideTooltip() {
            document.getElementById("tooltip").style.visibility = "hidden";
        }

        // Função para mover o carrossel
        function moveCarousel(direction) {
            const carousel = document.getElementById("carousel");
            currentIndex = (currentIndex + direction + images.length) % images.length;
            carousel.style.transform = `translateX(-${currentIndex * 600}px)`;
        }

        // Função para salvar a avaliação
        function saveRating() {
            try {
                const ratings = JSON.parse(localStorage.getItem("ratings")) || {};
                const currentImageIndex = images[currentIndex].newIndex;
                const ratingValue = document.getElementById("rating").value;

                if (ratingValue < 1 || ratingValue > 10) {
                    alert("Por favor, insira uma avaliação válida entre 1 e 10.");
                    return;
                }

                ratings[currentImageIndex] = ratingValue;
                localStorage.setItem("ratings", JSON.stringify(ratings));
                alert(`Avaliação para a imagem ${currentImageIndex} salva!`);
            } catch (error) {
                console.error('Erro ao salvar a avaliação:', error);
                alert('Erro ao salvar a avaliação. Tente novamente.');
            }
        }

        // Chama a função para buscar as imagens assim que a página for carregada
        fetchImages();