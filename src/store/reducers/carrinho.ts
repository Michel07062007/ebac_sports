import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Produto } from "../../App";

type CarrinhoState = {
  itens: Produto[];
};

const initialState: CarrinhoState = {
  itens: [],
};

const CarrinhoSlice = createSlice({
  name: "carrinho",
  initialState
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload;
      
      if      
    }
  },
});

function adicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      setCarrinho([...carrinho, produto])
    }
  }