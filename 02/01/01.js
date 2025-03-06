const totalImages = 100;
        const imagesPerPage = 20;
        let currentPage = 1;
        
        function loadImages() {
            const container = document.getElementById("imageContainer");
            container.innerHTML = "";
            
            const start = (currentPage - 1) * imagesPerPage;
            const end = start + imagesPerPage;
            
            for (let i = start; i < end && i < totalImages; i++) {
                let img = document.createElement("img");
                img.src = `https://picsum.photos/100/100?random=${i}`;
                img.className = "thumbnail";
                img.onclick = () => openLightbox(img.src);
                container.appendChild(img);
            }
            
            document.getElementById("pageInfo").innerText = `Página ${currentPage}`;
            document.getElementById("prevBtn").disabled = currentPage === 1;
            document.getElementById("nextBtn").disabled = currentPage === Math.ceil(totalImages / imagesPerPage);
        }
        
        function nextPage() {
            if (currentPage < Math.ceil(totalImages / imagesPerPage)) {
                currentPage++;
                loadImages();
            }
        }
        
        function previousPage() {
            if (currentPage > 1) {
                currentPage--;
                loadImages();
            }
        }
        
        function openLightbox(src) {
            document.getElementById("lightbox-image").src = src;
            document.getElementById("lightbox").style.display = "flex";
        }
        
        function closeLightbox() {
            document.getElementById("lightbox").style.display = "none";
        }
        
        loadImages();