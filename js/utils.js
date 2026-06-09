// =========================
// TEMAS
// =========================
function obterTema() {
  return localStorage.getItem("tema") || "dark";
}

function aplicarTemaSalvo() {
  const tema = obterTema();
  document.body.classList.remove("dark", "light", "relax");
  document.body.classList.add(tema);
}

// =========================
// DATA
// =========================
function obterDataAtual() {
  return new Date().toISOString().split("T")[0];
}

function formatarData(data) {
  if (!data) return "";
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

// =========================
// TEXTO
// =========================
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escaparHTML(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function textoVazio(texto) {
  return !texto || texto.trim() === "";
}

// =========================
// ID
// =========================
function gerarId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// =========================
// NAVEGAÇÃO
// =========================
function iniciarNavbar() {
  const btnHome   = document.getElementById("btnHome");
  const btnDiario = document.getElementById("btnDiario");
  const btnConfig = document.getElementById("btnConfig");

  if (btnHome)   btnHome.addEventListener("click",   () => { window.location.href = "index.html"; });
  if (btnDiario) btnDiario.addEventListener("click", () => { window.location.href = "cards.html"; });
  if (btnConfig) btnConfig.addEventListener("click", () => { window.location.href = "configuracoes.html"; });
}
