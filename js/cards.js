// =========================
// ESTADO
// =========================
let dados = carregarDados();
let ordemAtual = "recente";


// =========================
// ELEMENTOS
// =========================
const lista      = document.getElementById("lista");
const inputBusca = document.getElementById("search");

// =========================
// EVENTOS
// =========================
inputBusca.addEventListener("input", pesquisar);

// =========================
// PESQUISA
// =========================
function pesquisar() {
  const termo = inputBusca.value;
  const resultado = buscarDados(dados, termo);

  resultado.sort((a, b) =>
    ordemAtual === "recente"
      ? b.data.localeCompare(a.data)
      : a.data.localeCompare(b.data)
  );

  renderizar(lista, resultado, editar, remover);
  atualizarContador();
}

// =========================
// EDITAR
// =========================
function editar(item) {
  abrirModal(item);
  atualizaçãocontador();
}

// =========================
// REMOVER
// =========================
function remover(item) {
  abrirConfirm(item);
  atualizaçãocontador();
}

// =========================
// MODAL DE EDIÇÃO
// =========================
function abrirModal(item) {
  const overlay = document.getElementById("modalOverlay");
  const inputTexto = document.getElementById("modalTexto");
  const inputData  = document.getElementById("modalData");

  inputTexto.value = item.texto;
  inputData.value  = item.data;

  overlay.classList.add("show");

  document.getElementById("modalSalvar").onclick = () => {
    const novoTexto = inputTexto.value.trim();
    const novaData  = inputData.value;

    if (!novoTexto || !novaData) {
      mostrarToast("⚠️ Preencha todos os campos.", "aviso");
      return;
    }

    const index = dados.findIndex(d => d.id === item.id);
    if (index === -1) return;

    dados = editarEntrada(index, novoTexto, novaData);
    overlay.classList.remove("show");
    renderizar(lista, dados, editar, remover);
    mostrarToast("✅ Anotação atualizada!");
  };

  document.getElementById("modalCancelar").onclick = () => {
    overlay.classList.remove("show");
  };
}

// =========================
// CONFIRM DE EXCLUSÃO
// =========================
function abrirConfirm(item) {
  const overlay = document.getElementById("confirmOverlay");
  overlay.classList.add("show");

  document.getElementById("confirmSim").onclick = () => {
    const index = dados.findIndex(d => d.id === item.id);
    if (index !== -1) {
      dados = removerEntrada(index);
      renderizar(lista, dados, editar, remover);
      mostrarToast("🗑️ Anotação excluída.");
    }
    overlay.classList.remove("show");
  };

  document.getElementById("confirmNao").onclick = () => {
    overlay.classList.remove("show");
  };
}

// =========================
// TOAST
// =========================
function mostrarToast(msg, tipo = "sucesso") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.className = "toast show " + tipo;
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// =========================
// INIT
// =========================
aplicarTemaSalvo();
iniciarNavbar();
renderizar(lista, dados, editar, remover);
atualizaçãocontador

// =========================
// CONTADOR
// =========================
function atualizaçãocontador(){{
  const el = document.getElementById("contador");
  if(!el)return;
  const total = dados.length;
  el.textContent = total === 0
  ? "Nenhuma anotação"
  : `${total} anotação${total > 1 ? "s" : ""}`;

}}