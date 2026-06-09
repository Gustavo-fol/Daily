// =========================
// STORAGE
// =========================
const CHAVE_DIARIO = "diario";

// =========================
// CARREGAR DADOS
// =========================
function carregarDados() {
  const dadosSalvos = localStorage.getItem(CHAVE_DIARIO);
  if (!dadosSalvos) return [];
  try {
    return JSON.parse(dadosSalvos);
  } catch (erro) {
    console.error("Erro ao carregar dados:", erro);
    return [];
  }
}

// =========================
// SALVAR DADOS
// =========================
function salvarLocalStorage(dados) {
  localStorage.setItem(CHAVE_DIARIO, JSON.stringify(dados));
}

// =========================
// ADICIONAR ENTRADA
// =========================
function adicionarEntrada(novaEntrada) {
  const dados = carregarDados();
  dados.unshift(novaEntrada);
  salvarLocalStorage(dados);
  return dados;
}

// =========================
// REMOVER ENTRADA
// =========================
function removerEntrada(index) {
  const dados = carregarDados();
  if (index < 0 || index >= dados.length) return dados;
  dados.splice(index, 1);
  salvarLocalStorage(dados);
  return dados;
}

// =========================
// EDITAR ENTRADA
// =========================
function editarEntrada(index, novoTexto, novaData) {
  const dados = carregarDados();
  if (index < 0 || index >= dados.length) return dados;
  dados[index].texto = novoTexto;
  dados[index].data = novaData;
  salvarLocalStorage(dados);
  return dados;
}

// =========================
// BUSCAR POR ID
// =========================
function buscarPorId(id) {
  const dados = carregarDados();
  return dados.find(item => item.id === id);
}

// =========================
// SUBSTITUIR TODOS OS DADOS
// =========================
function atualizarDados(novosDados) {
  salvarLocalStorage(novosDados);
  return novosDados;
}

// =========================
// APAGAR TUDO
// =========================
function limparDiario() {
  localStorage.removeItem(CHAVE_DIARIO);
}
