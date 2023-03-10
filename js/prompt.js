// alert("how are yoy");
const showAlert = () => {
  alert("Dosto taka dhar dite parbi , just 500?");
};

const lendMoney = () => {
  const result = confirm("Will you lend me 500 taka?");
  console.log(result);
  if (result === true) {
    alert("tui amar janer dosto");
  } else {
    console.log("DGM....");
  }
};

const getInfo = () => {
  const name = prompt("Tell me your name");
  console.log(name);
  if (name === null) {
    alert("Naam na dile kam nai!!! ja foot");
  } else {
    console.log(name, "welcome to this world");
  }
};
