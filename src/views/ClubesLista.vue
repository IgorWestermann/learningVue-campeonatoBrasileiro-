<template>
  <v-container>
    <h2 class="text-h5 text-center mb-4 mt-2">Classificação</h2>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th colspan="2" class="text-left">Clube</th>
            <th class="text-right">Pontos</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="ml-3"
            v-for="(time, index) in clubesListaOrdenadas"
            :key="time.id"
          >
            <td>{{ index + 1 }}</td>
            <td>
              <v-avatar size="32" class="pl-2 pr-2">
                <img :src="time.escudo" :alt="`escudo ${time.nome}`" />
              </v-avatar>
              <span class="pl-2">{{ time.nome }}</span>
            </td>
            <td class="text-right">{{ time.pontos }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "ClubesLista",
  data: () => ({
    ranking: [],
  }),
  computed: {
    clubesListaOrdenadas() {
      const listaOrdenada = this.ranking
        .slice(0)
        .sort((a, b) => (a.pontos > b.pontos ? -1 : 1));
      return listaOrdenada;
    },
  },
  created() {
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then((res) => res.json())
      .then((json) => {
        this.ranking = json;
      });
  },
};
</script>

<style scoped>
</style>