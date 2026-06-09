// =========================
// BUSCA
// =========================
function buscarDados(dados, termo) {
  if (!termo) return dados;

  termo = normalizarTexto(termo);

  return dados.filter(item => {
    const texto = normalizarTexto(item.texto);
    const data  = formatarData(item.data);
    const dataNormalizada = normalizarTexto(data);
    return texto.includes(termo) || dataNormalizada.includes(termo);
  });
}
