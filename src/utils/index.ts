export const parseToBrl = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const somaCarrinho = (item: Cardapio[]) => {
  return item.reduce((acumulador, itemAtual) => {
    return (acumulador += itemAtual.preco)
  }, 0)
}

export const pegaIdItemCarrinho = (item: Cardapio[]) => {
  return item.length + 1
}
