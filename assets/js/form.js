const formulario = document.getElementById("formulario");
const inputFormu = document.getElementById("inputFormu");

const buscador = (data) => {
  formulario.addEventListener("keyup", (e) => {
    e.preventDefault();
    const letraPresionada = inputFormu.value.toLowerCase();
    //console.log(letraPresionada);

    //Filtrado de paises
    const paisesFiltrados = data.filter((item) => {
      const letraApi = item.name.toLowerCase();
      const idx = letraApi.indexOf(letraPresionada);

      if (idx !== -1) {
        return item;
      }
    });
    //console.log(paisesFiltrados);
    countryData(paisesFiltrados);
  });
};
