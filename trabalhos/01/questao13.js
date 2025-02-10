function showError(message) {
    const errorContainer = document.createElement('div');
    errorContainer.style.color = 'red';
    errorContainer.style.marginTop = '20px';
    errorContainer.textContent = message;
    document.body.appendChild(errorContainer);
}

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }

        const users = await response.json();

        const usersContainer = document.getElementById('users-container');
        usersContainer.innerHTML = '';

        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Telefone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
            `;
            usersContainer.appendChild(userDiv);
        });
    } catch (error) {
        console.error('Erro:', error);
        showError('Houve um problema ao carregar os dados. Tente novamente mais tarde.');
    }
}

window.onload = fetchUsers;
