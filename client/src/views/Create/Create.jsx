import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllActivities, getAllCoutries } from "../../redux/actions";

const Create = () => {
  const [form, setForm] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  //creando función agregar paises
  //Selecciono el pais deseado y presiono en add
  //El pais se pushea a un array de paises que luego va a ser éste el array que se
  //va a enviar al submit

  //como hago para que el pais se agregue a la actividad si solo estoy trayendo el nombre???

  //rta: para eso debería hacer la relación con el :id de cada país.

  //entonces cuando yo selecciono un pais, se deberia de ejecutar una función de busqueda
  //que me traiga el id del pais para poder crear la actividad.


  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.activities);
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCoutries());
  }, [dispatch]);

  console.log(allActivities);
  console.log(allCountries);

  const chageHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    // validation({...form, [property]:value})

    setForm({ ...form, [property]: value });
  };

  const onSearch = (input) => {
    const searching = allCountries
      .map((c) => c.name.toUpperCase())
      .includes(input.toUpperCase());
    if (!searching.length) return allCountries;
    else return searching;
    //la función debe alvergar un input que
  };

  const addCountrie = (event) => {
    event.preventDefault();
    const property = document.getElementById("countries").name;
    const value = document.getElementById("countries").value;

    console.log(property);
    console.log(value);

    // setForm({...form, [value]})
  };

  return (
    <form>
      <h1>Create Activities</h1>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={chageHandler}
        />
      </div>

      <div>
        <label>Dificulty: </label>
        <input
          type="checkbox"
          value={form.dificulty}
          name="dificulty"
          onChange={chageHandler}
        />
      </div>

      <div>
        <label>Duration: </label>
        <input
          type="text"
          value={form.duration}
          name="duration"
          onChange={chageHandler}
        />
      </div>

      <div>
        <label>Season: </label>
        <input
          type="text"
          value={form.season}
          name="season"
          onChange={chageHandler}
        />
      </div>

      <div>
        <label>Countries: </label>
        <select id="countries" name="countries" value={form.countries}
>
          <option value={"default"} disabled>Select countries</option>
          {allCountries.map((c) => {
            return (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            );
          })}
        </select>
        <input
          type="button"
          onClick={addCountrie}
          name="addCountry"
          value="Add Countries"
        />
      </div>

      <div>
        <label>Countries Add: </label>
        <input type="text" value={form.countries} name="countries" />
        <select name="countries">
          {form.countries.map((c) => {
            return <div value={c.id}> {c.name} </div>;
          })}
        </select>
        <input type="button" onclick="deleteCountry()" value="Delete Country" />
      </div>

      {/* Posibilidad de seleccionar/agregar varios países en simultáneo. */}

      <div>
        <button type="Submit">Create activity!</button>
      </div>
    </form>
  );
};

export default Create;
