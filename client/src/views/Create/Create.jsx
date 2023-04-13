import style from "./Create.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  createActivities,
  getAllActivities,
  getAllCountries,
} from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";

const Create = () => {
  const [form, setForm] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: "",
  });

 let submitErrors=[]

  const [cardsCountries, setCardsCountries] = useState({
    countries: [],
  });

  const allCountries = useSelector((state) => state.countries);

  const dispatch = useDispatch();
  const history = useHistory();

  //creando función agregar paises
  //Selecciono el pais deseado y presiono en add
  //El pais se pushea a un array de paises que luego va a ser éste el array que se
  //va a enviar al submit

  //como hago para que el pais se agregue a la actividad si solo estoy trayendo el nombre???

  //rta: para eso debería hacer la relación con el :id de cada país.

  //entonces cuando yo selecciono un pais, se deberia de ejecutar una función de busqueda
  //que me traiga el id del pais para poder crear la actividad.

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  // const validate = (form) => {
  //   if (form.name === "" || form.name === null) {
  //     setErrors({ ...errors, name: "This field can not be blank" });
  //   } else {
  //     setErrors({ ...errors, name: "" });
  //   }

  //   if (form.dificulty === "") {
  //     setErrors({ ...errors, dificulty: "Need to add difficulty" });
  //   } else {
  //     setErrors({ ...errors, dificulty: "" });
  //   }

  //   if (!form.duration === "") {
  //     setErrors({ ...errors, duration: "It is necessary to add duration" });
  //   } else {
  //     setErrors({ ...errors, duration: "" });
  //   }

  //   if (form.season === "Select Season" || form.season === "") {
  //     setErrors({ ...errors, season: "Need to add season" });
  //   } else {
  //     setErrors({ ...errors, season: "" });
  //   }

  const validateName = (form) => {

    if (form.name === "") {
      setErrors({ ...errors, name: "This field can not be blank" }) && submitErrors.push(errors.name)}
     else {
      setErrors({ ...errors, name: "" })
    }
  };
    const validateDificulty = (form) => {
      if (form.dificulty === "") {
        setErrors({ ...errors, dificulty: "Need to add difficulty" && submitErrors.push(errors.dificulty)})
      } else {
        setErrors({ ...errors, dificulty: "" })
      }
    };
    const validateCountries = (form) => {
    if (form.countries === "Select Countries" || !form.countries[0]) {
      setErrors({ ...errors, countries: "You Need add countries"  && submitErrors.push(errors.countries)})
    } else {
      setErrors({ ...errors, countries: "" })
    }
  if (
    cardsCountries.length &&
    cardsCountries.forEach((e) => e.Activities.name.includes(form.name))
  ) {
    setErrors({
      ...errors,
      countries: "The country already has that activity created",
    });
  }
  else {
    setErrors({ ...errors, countries: "" })
  }
}

  const validateSeason = (form) => {
    if (form.season === "Select Season" || form.season === "") {
      setErrors({ ...errors, season: "Need to add season" });
    } else {
      setErrors({ ...errors, season: "" })
    }
  };

  const validateDuration = (form) => {
    if (form.duration === "") {
      setErrors({ ...errors, duration: "It is necessary to add duration" })
    } else {
      setErrors({ ...errors, duration: "" })
    }
  };

    // if (form.countries === "Select Countries" || !form.countries[0]) {
    //   setErrors({ ...errors, countries: "You Need add countries" });
    // } else {
    //   setErrors({ ...errors, countries: "" });
    // }

    // if (
    //   cardsCountries.length &&
    //   cardsCountries.forEach((e) => e.Activities.name.includes(form.name))
    // ) {
    //   setErrors({
    //     ...errors,
    //     countries: "The country already has that activity created",
    //   });
    // } else {
    //   setErrors({ ...errors, countries: "" });
    // }
  
  // console.log(allActivities);
  // console.log(allCountries);

  const changeHandlerName = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    validateName({ ...form, [property]: value });
  };
  const changeHandlerDificulty = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    validateDificulty({ ...form, [property]: value });
  };
  const changeHandlerDuration = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    validateDuration({ ...form, [property]: value });
  };
  const changeHandlerSeason = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    validateSeason({ ...form, [property]: value });
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
    console.log(cardsCountries);
  };

  function handleSubmit(event, res) {
    event.preventDefault();
    
    if (!form.name){submitErrors.push("Request Name")}
    if (!form.dificulty){submitErrors.push("Request Dificulty")}
    if (!form.season){submitErrors.push("Request Season")}
    if (!form.duration){submitErrors.push("Request Duration")}
    if (form.duration === "0"){submitErrors.push("Choose value greater than 0 hours")}
    if (!form.countries[0]){submitErrors.push("Request Country/Countries")}
     
    if(submitErrors.length){
      alert(`Missing data to create activity: ${submitErrors.join(", ")}`);
      submitErrors = [];
     }else{
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
  }
  return (
    <div className={style.background}>
      <div className={style.title}>
        <h1>Create Activity</h1>
      </div>
      <div className={style.createCountainer}>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className={style.create}
        >
          <div>
            <div className={style.component}>
              <label>Name: </label>

              <input
                type="text"
                value={form.name}
                name="name"
                onChange={changeHandlerName}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>

            <div className={style.component}>
              <label>Dificulty: </label>
              {errors.dificulty && <span>{errors.dificulty}</span>}
              <input
                id="dificultActivitie"
                type="range"
                value={form.dificulty}
                name="dificulty"
                min="1"
                max="5"
                onChange={changeHandlerDificulty}
              />
              <p id="dificulty">{form.dificulty}</p>
            </div>

            <div className={style.component}>
              <label>Duration: </label>
              {errors.duration && <span>{errors.duration}</span>}
              <br></br>
              <input
                type="range"
                value={form.duration}
                name="duration"
                min="0"
                max="24"
                onChange={changeHandlerDuration}
              />
              <p id="duration">{form.duration} hs</p>
            </div>

            <div className={style.component}>
              <label>Season: </label>
              <select
                type="checkbox"
                checked="checked"
                value={form.season}
                name="season"
                onChange={changeHandlerSeason}
              >
                <option>Select Season</option>
                <option>Winter</option>
                <option>Summer</option>
                <option>Fall</option>
                <option>Spring</option>
              </select>
              {errors.season && <span>{errors.season}</span>}
            </div>

            <div className={style.component}>
              <label>Countries: </label>
              <br></br>
              <select id="countries" name="countries">
                <option>Select Countries</option>
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
                Add
              </button>
            </div>
          </div>

          <div className={style.component}>
            <label>Countries Add: </label>
            <div id="countries">
              {cardsCountries.countries.map((c) => {
                return (
                  <div className={style.cardsAdds}>
                    <div
                      key={c.id}
                      id={c.id}
                      value={c.id}
                      className={style.cardConteiner}
                    >
                      <div className={style.info}>
                        <h1>{c.name}</h1>
                        <div className={style.conteinerImg}>
                          <img src={c.imageFlag} alt="flag" />
                        </div>
                        {errors.countries && <span>{errors.countries}</span>}
                        <div>
                          <button
                            name="adds"
                            value={c.id}
                            type="button"
                            onClick={onDelete}
                            className={style.x}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className={style.submit}>
                <button type="Submit">Create activity!</button>
              </div>
            </div>
          </div>

          {/* Posibilidad de seleccionar/agregar varios países en simultáneo. */}
        </form>
      </div>
      <Link to="/countries" >
        <button className={style.componentbutton}  value="Go to Countries" type="button">Go to Countries</button>
      </Link>
    </div>
  );
};

export default Create;
