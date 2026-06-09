// =========================
// ESTADO
// =========================
let dados = carregarDados();

// =========================
// ELEMENTOS
// =========================
const campoData   = document.getElementById("data");
const campoTexto  = document.getElementById("texto");
const btnSalvar   = document.getElementById("btnSalvar");

// =========================
// EVENTOS
// =========================
btnSalvar.addEventListener("click", salvar);

// =========================
// INICIALIZAÇÃO
// =========================
aplicarTemaSalvo();
iniciarNavbar();
campoData.value = obterDataAtual();

// =========================
// SALVAR
// =========================
function salvar() {
  const texto = getTexto();
  const data  = getData();

  if (!validar(texto, data)) return;

  const novaEntrada = {
    id: gerarId(),
    data: data,
    texto: texto
  };

  dados = adicionarEntrada(novaEntrada);
  limparCampos();
  campoData.value = obterDataAtual();

  mostrarToast("✅ Anotação salva com sucesso!");
}

// =========================
// INPUTS
// =========================
function getTexto() { return campoTexto.value.trim(); }
function getData()  { return campoData.value; }

// =========================
// LIMPEZA
// =========================
function limparCampos() {
  campoTexto.value = "";
}

// =========================
// VALIDAÇÃO
// =========================
function validar(texto, data) {
  if (!data) {
    mostrarToast("⚠️ Selecione uma data.", "aviso");
    return false;
  }
  if (textoVazio(texto)) {
    mostrarToast("⚠️ Digite uma anotação.", "aviso");
    return false;
  }
  return true;
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
