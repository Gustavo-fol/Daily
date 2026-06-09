// =========================
// ELEMENTOS
// =========================
const botoesTema  = document.querySelectorAll(".tema-btn");
const selectFundo = document.getElementById("fundoPadrao");
const btnSalvar   = document.getElementById("btnSalvarConfig");
const btnVoltar   = document.getElementById("btnVoltar");

// =========================
// ESTADO
// =========================
let temaAtual = localStorage.getItem("tema") || "dark";

// =========================
// TEMAS
// =========================
botoesTema.forEach(botao => {
  botao.addEventListener("click", () => {
    temaAtual = botao.dataset.tema;
    aplicarTema(temaAtual);
    botoesTema.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");
  });
});

// =========================
// SALVAR
// =========================
btnSalvar.addEventListener("click", () => {
  localStorage.setItem("tema", temaAtual);
  localStorage.setItem("fundoPadrao", selectFundo.value);
  mostrarToast("✅ Configurações salvas!");
});

// =========================
// VOLTAR
// =========================
btnVoltar.addEventListener("click", () => {
  window.location.href = "index.html";
});

// =========================
// APLICAR TEMA
// =========================
function aplicarTema(tema) {
  document.body.classList.remove("dark", "light", "relax");
  document.body.classList.add(tema);
}

// =========================
// CARREGAR CONFIGURAÇÕES
// =========================
function carregarConfiguracoes() {
  const tema  = localStorage.getItem("tema")        || "dark";
  const fundo = localStorage.getItem("fundoPadrao") || "nenhum";

  temaAtual = tema;
  aplicarTema(tema);
  selectFundo.value = fundo;

  // Marca botão ativo
  botoesTema.forEach(b => {
    b.classList.toggle("ativo", b.dataset.tema === tema);
  });
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
carregarConfiguracoes();
