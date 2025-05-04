function buscar() {
    let nome = document.getElementById('nome').value;
    if (!nome) {
      alert('Digite um nome.');
      return;
    }
  
    fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${nome}`)
      .then(r => r.json())
      .then(d => {
        document.getElementById('resultado').innerHTML = `
          <h2>${d.title}</h2>
          <p>${d.extract}</p>
          ${d.thumbnail ? `<img src="${d.thumbnail.source}" width="150">` : ''}
          <p><a href="${d.content_urls.desktop.page}" target="_blank">Wikipedia</a></p>
        `;
      })
      .catch(() => {
        document.getElementById('resultado').innerHTML = 'Não encontrado.';
      });
  }
  