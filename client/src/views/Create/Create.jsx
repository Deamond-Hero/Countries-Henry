import style from "./Create.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  createActivities,
  getAllActivities,
  getAllCountries,
} from "../../redux/actions";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [form, setForm] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [cardsCountries, setCardsCountries] = useState({
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
  const history = useHistory();

  const allActivities = useSelector((state) => state.activities);
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  // console.log(allActivities);
  // console.log(allCountries);

  const chageHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    // validation({...form, [property]:value})

    setForm({ ...form, [property]: value });
  };

  const addCountrie = (event) => {
    setCardsCountries({
      countries: cardsCountries.countries.concat(
        allCountries.filter((c) => {
          return c.id.includes(document.getElementById("countries").value);
        })
      ),
    });
    setForm({
      ...form,
      countries: [
        ...form.countries,
        document.getElementById("countries").value,
      ],
    });
  };

  console.log(cardsCountries);

  const onDelete = (event) => {
    if (cardsCountries.length) event.preventDefault();
    let del = cardsCountries.countries.filter((c) => {
      return c.id !== event.target.value;
    });
    setCardsCountries({ countries: del });
    setForm({ ...form, countries: del.map((c) => c.id) });
    console.log(event.target.value);

    // if(form.countries.length)
    // setForm(form.countries.filter((c) =>c.id !== event.target.value ))
    // console.log(event.target.value)

    console.log(cardsCountries);
  };

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(createActivities(form));

    setForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    history.push("./countries");
    alert("activity Created!");
  }

  return (
    <div className={style.createCountainer}>
      <form onSubmit={(event) => handleSubmit(event)} className={style.create}>
        <div>
        <h1>Create Activities</h1>

        <div className={style.component}>
          <label>Name: </label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={chageHandler}
          />
        </div>

        <div className={style.component}>
          <label>Dificulty: </label>
          <input
            id="dificultActivitie"
            type="range"
            value={form.dificulty}
            name="dificulty"
            min="1"
            max="5"
            onChange={chageHandler}
          />
          <span id="dificulty">{form.dificulty}</span>
        </div>

        <div className={style.component}>
          <label>Duration: </label>
          <input
            type="range"
            value={form.duration}
            name="duration"
            min="1"
            max="24"
            onChange={chageHandler}
          />
          <span id="duration">{form.duration} hs</span>
        </div>

        <div className={style.component}>
          <label>Season: </label>
          <select
            type="checkbox"
            checked="checked"
            value={form.season}
            name="season"
            onChange={chageHandler}
          >
            <option>winter</option>
            <option>summer</option>
            <option>fall</option>
            <option>spring</option>
          </select>
        </div>

        <div className={style.component}>
          <label>Countries: </label>
          <select id="countries" name="countries">
            {allCountries.map((c) => {
              return (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              );
            })}
          </select>
          <button
            type="button"
            onClick={addCountrie}
            name="addCountry"
            value="add"
          >
            add
          </button>
        </div>
        </div>
        <div className={style.component}>
          <label>Countries Add: </label>
          <div id="countries">
            {cardsCountries.countries.map((c) => {
              return (
                <div key={c.id} id={c.id} value={c.id} className={style.cardConteiner}>
                  <div className={style.info}>
                    <h1>{c.name}</h1>
                    <div className={style.conteinerImg}>
                      <img src={c.imageFlag} alt="flag" />
                    </div>
                    <div>
                      <button
                        name="adds"
                        value={c.id}
                        type="button"
                        onClick={onDelete}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Posibilidad de seleccionar/agregar varios países en simultáneo. */}

        <div className={style.submit}>
          <button type="Submit">Create activity!</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
