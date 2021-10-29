const countries = document.querySelector("#countries");

document.addEventListener("DOMContentLoaded", function (e) {
  obtenerData();
});

const obtenerData = async () => {
  try {
    const res = await fetch(
      "http://api.countrylayer.com/v2/all?access_key=4d4c974c9aa2b66238985eb0e882e997"
    );
    const data = await res.json();
    //console.log(data);
    countryData(data);
    buscador(data);
  } catch (error) {
    console.log(error);
  }
};

const countryData = (data) => {
  let elem = "";

  for (let [index, item] of data.entries()) {
    //console.log(item);

    elem += `
            <div class="card">
                
                    <h3>${item.name}</h3>
                    <p>
                        <span>Capital: </span>
                        ${item.capital}
                    </p>
                    <p>
                        <span>Region: </span>
                        ${item.region}
                    </p>
                    
                    <p>
                        <span>Código alpha2code </span>
                       ${item.alpha2Code}
                    </p>
                    <p>
                        <span>Código alpha3code </span>
                        ${item.alpha3Code}
                    </p>
                    <p>
                        <span>Código telefónico </span>
                        ${item.callingCodes[0]}
                    </p>
                    
               
            </div>
            `;
  }

  countries.innerHTML = elem;
};
