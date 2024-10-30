<template>
  <div class="container">
    <h1 class="title">Tienda 32 bits</h1>
    <table class="table-juegos">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Color</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>{{ juego.color }}</td>
          <td>
            <button @click="incrementarStock(juego.codigo)">+</button>
            <button @click="disminuirStock(juego.codigo)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["juegos"]),
  },
  methods: {
    ...mapActions(["incrementarStock", "disminuirStock"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.table-juegos {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table-juegos th,
.table-juegos td {
  padding: 10px; /* Espacio entre el contenido de la celda y el borde */
  border: 1px solid #ccc; /* Borde de la tabla */
}

.table-juegos th {
  background-color: #f0f0f0; /* Color de fondo para los encabezados */
  font-weight: bold; /* Texto en negrita para los encabezados */
}

.table-juegos tbody tr:nth-child(even) {
  background-color: #f8f8f8; /* Color de fondo alternativo para las filas pares */
}

.title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
