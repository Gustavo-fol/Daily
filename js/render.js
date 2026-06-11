// =========================
// RENDERIZAÇÃO
// =========================
function renderizar(listaElemento, dados, editarCallback, removerCallback) {
  listaElemento.innerHTML = "";

  if (dados.length === 0) {
    listaElemento.innerHTML = `
      <div class="card card-vazio">
        <span class="card-vazio-icon">📭</span>
        <p>Nenhuma anotação encontrada.</p>
      </div>
    `;
    return;
  }

  dados.forEach((item, i) => {
    const card = criarCard(item, editarCallback, removerCallback);
    card.style.animationDelay = `${i * 60}ms`;
    listaElemento.appendChild(card);
  });
  atualizaçãocontador();
}

// =========================
// CRIAR CARD
// =========================
function criarCard(item, editarCallback, removerCallback) {
  const div = document.createElement("div");
  div.className = "card card-entrada";

  div.innerHTML = `
    <div class="card-header">
      <span class="card-data">📅 ${formatarData(item.data)}</span>
    </div>
    <p class="card-texto">${escaparHTML(item.texto)}</p>
    <div class="acoes">
      <button class="btn-editar">✏️ Editar</button>
      <button class="delete-btn">🗑️ Excluir</button>
    </div>
  `;

  div.querySelector(".btn-editar").addEventListener("click", () => editarCallback(item));
  div.querySelector(".delete-btn").addEventListener("click", () => removerCallback(item));

  return div;
}
