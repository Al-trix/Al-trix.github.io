const datos = {
  form: document.getElementById("form"),
  inputDay: document.getElementById("inputDay"),
  inputMonth: document.getElementById("inputMonth"),
  inputYear: document.getElementById("inputYear"),
  year: document.getElementById("year"),
  month: document.getElementById("month"),
  day: document.getElementById("day"),
  mesageError: document.querySelectorAll(".nav__mesage"),
  botonSubmit: document.querySelector(".nav__submit"),
};

const errorMesage = {
  required: "This field is required",
  incorretDate: [
    "Mut be a valid year",
    "Mut be a valid month",
    "Mut be a valid day",
  ],
  invalidDate: "Must be a valid  date",
};
const date = new Date();

let dates = {
  year: date.getFullYear(),
  day: date.getDate(),
  month: date.getMonth() + 1,
};

const num = (dato, span) => {
  if (isNaN(dato.value)) {
    dato.classList.add("error");
    span.innerText = errorMesage.invalidDate;
  } else {
    dato.classList.remove("error");
    span.innerText = "";
  }
};

const fechaNormal = (date, input, span) => {
  let edad = date - input.value;
  if (edad < 0) {
    edad = edad * -1;
    dates.month--;
    span.innerText = edad;
    input.value = "";
  } else {
    dates.month--;
    span.innerText = edad;
    input.value = "";
  }
};

const fechaMenorMeses = (date, input, span) => {
  let edad = date + 12 - input.value;
  if (edad < 0) {
    edad = edad * -1;
    dates.year--;
    span.innerText = edad;
    input.value = "";
  }else {
    dates.year--;
    span.innerText = edad;
    input.value = "";
  }
};

const fechaMenorDias = (date, input, span) => {
  let edad = date + 29 - input.value;
  dates.month--;
  span.innerText = edad;
  input.value = "";
};

const boleano = () => {
  if (dates.day < datos.inputDay.value) {
    fechaMenorDias(dates.day, datos.inputDay, datos.day);
    fechaNormal(dates.month, datos.inputMonth, datos.month);
    fechaNormal(dates.year, datos.inputYear, datos.year);
  } else if (dates.month < datos.inputMonth.value) {
    fechaMenorMeses(dates.month, datos.inputMonth, datos.month);
    fechaNormal(dates.year, datos.inputYear, datos.year);
    fechaNormal(dates.day, datos.inputDay, datos.day);
  } else {
    fechaNormal(dates.day, datos.inputDay, datos.day);
    fechaNormal(dates.month, datos.inputMonth, datos.month);
    fechaNormal(dates.year, datos.inputYear, datos.year);
  }
};

const incorrectYear = (inputYear, year, span) => {
  if (inputYear.value > year || inputDay.value < 0) {
    inputYear.classList.add("error");
    span.innerText = errorMesage.incorretDate[0];
  } else {
    inputYear.classList.remove("error");
    span.innerText = "";
  }
};

const incorrectDay = (inputDay, span) => {
  if (inputDay.value > 31 || inputDay.value < 0) {
    inputDay.classList.add("error");
    span.innerText = errorMesage.incorretDate[2];
  } else {
    inputDay.classList.remove("error");
    span.innerText = "";
  }
};
const incorrectMonth = (inputMonth, span) => {
  if (inputMonth.value > 12 || inputMonth.value < 0) {
    inputMonth.classList.add("error");
    span.innerText = errorMesage.incorretDate[1];
  } else {
    inputMonth.classList.remove("error");
    span.innerText = "";
  }
};

datos.form.addEventListener("submit", (e) => {
  e.preventDefault();
  num(datos.inputDay, datos.mesageError[0]);
  num(datos.inputMonth, datos.mesageError[1]);
  num(datos.inputYear, datos.mesageError[2]);
  incorrectDay(datos.inputDay, datos.mesageError[0]);
  incorrectMonth(datos.inputMonth, datos.mesageError[1]);
  incorrectYear(datos.inputYear, dates.year, datos.mesageError[2]);
  if (
    datos.inputDay.classList.contains("error") ||
    datos.inputMonth.classList.contains("error") ||
    datos.inputYear.classList.contains("error")
  ) {
    num(datos.inputDay, datos.mesageError[0]);
    num(datos.inputMonth, datos.mesageError[1]);
    num(datos.inputYear, datos.mesageError[2]);
    incorrectDay(datos.inputDay, datos.mesageError[0]);
    incorrectMonth(datos.inputMonth, datos.mesageError[1]);
    incorrectYear(datos.inputYear, dates.year, datos.mesageError[2]);
  } else {
    boleano();
    dates.day = date.getDate();
    dates.month = date.getMonth();
    dates.year = date.getFullYear();
  }
});
