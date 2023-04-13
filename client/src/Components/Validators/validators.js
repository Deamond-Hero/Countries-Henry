import {
  form ,
  setForm ,
  errors,
  setErrors,
  cardsCountries,
} from "../../views/Create/Create";

export const validate = ( form) => {
  if (form.name === "") {
    setErrors({ ...errors, name: "This field can not be blank" });
  } else {
    setErrors({ ...errors, name: "" });
  }

  if (!form.dificulty === "") {
    setErrors({ ...errors, dificulty: "Need to add difficulty" });
  } else {
    setErrors({ ...errors, dificulty: "" });
  }

  if (form.duration === "") {
    setErrors({ ...errors, duration: "It is necessary to add duration" });
  } else {
    setErrors({ ...errors, duration: "" });
  }

  if (form.season === "Select Season" || form.season === "") {
    setErrors({ ...errors, season: "Need to add season" });
  } else {
    setErrors({ ...errors, season: "" });
  }

  if (form.countries === "Select Countries" || !form.countries[0]) {
    setErrors({ ...errors, countries: "You Need add countries" });
  } else {
    setErrors({ ...errors, countries: "" });
  }

  if (
    cardsCountries.length &&
    cardsCountries.forEach((e) => e.Activities.name.includes(form.name))
  ) {
    setErrors({
      ...errors,
      countries: "The country already has that activity created",
    });
  } else {
    setErrors({ ...errors, countries: "" });
  }
};

// const validateName = (form) => {
//     if (form.name === "") {
//       setErrors({ ...errors, name: "This field can not be blank" })
//     } else {
//       setErrors({ ...errors, name: "" })
//     }
//   };
//     const validateDificulty = (form) => {
//       if (!form.dificulty === "") {
//         setErrors({ ...errors, dificulty: "Need to add difficulty" })
//       } else {
//         setErrors({ ...errors, dificulty: "" })
//       }
//     };
//     const validateCountries = (form) => {
//     if (form.countries === "Select Countries" || !form.countries[0]) {
//       setErrors({ ...errors, countries: "You Need add countries" })
//     } else {
//       setErrors({ ...errors, countries: "" })
//     }
//   if (
//     cardsCountries.length &&
//     cardsCountries.forEach((e) => e.Activities.name.includes(form.name))
//   ) {
//     setErrors({
//       ...errors,
//       countries: "The country already has that activity created",
//     });
//   }
//   else {
//     setErrors({ ...errors, countries: "" })
//   }
// }

//   const validateSeason = (form) => {
//     if (form.season === "Select Season" || form.season === "") {
//       setErrors({ ...errors, season: "Need to add season" });
//     } else {
//       setErrors({ ...errors, season: "" })
//     }
//   };

//   const validateDuration = (form) => {
//     if (!form.duration === "") {
//       setErrors({ ...errors, duration: "It is necessary to add duration" })
//     } else {
//       setErrors({ ...errors, duration: "" })
//     }
//   };
