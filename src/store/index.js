import { createStore } from 'vuex';

const store = createStore({
  state: {
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 43,
        precio: 30000,
        color: "red"
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 55,
        precio: 25000,
        color: "blue"
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 12,
        precio: 15000,
        color: "green"
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 56,
        precio: 35000,
        color: "black"
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 12,
        precio: 10000,
        color: "blue"
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 4,
        precio: 20000,
        color: "red"
      }
    ]
  },
  mutations: {
    modificarStock(state, { codigo, cantidad }) {
        const juego = state.juegos.find((juego) => juego.codigo === codigo);
        if (juego && juego.stock + cantidad >= 0) {
            juego.stock += cantidad;
        }
    },
},
actions: {
    incrementarStock({ commit }, codigo) {
        commit("modificarStock", { codigo, cantidad: 1 });
    },
    disminuirStock({ commit }, codigo) {
        commit("modificarStock", { codigo, cantidad: -1 });
    },
},
});

export default store;