let seccion = [];
const seccion_name = [
  { text: "Home", valor: "home" },
  { text: "About us", valor: "about" },
  { text: "Contact us", valor: "contact" },
];
const redes = [
  { text: "facebook", icon: "fa-facebook-f" },
  { text: "instagram", icon: "fa-instagram" },
  { text: "youtube", icon: "fa-youtube" },
];
const contactoFields = [
  { text: "Name", name: "name" },
  { text: "Email", name: "email" },
  { text: "Phone", name: "phone" },
];
const team = [
  {
    name: "Emma Johnson",
    des: "Emma brings over a decade of experience in crafting bespoke travel experiences. Her passion for discovering hidden gems and local cultures ensures that every trip is a unique adventure.",
    p: "Lead Travel Consultant",
  },
  {
    name: "Carlos Ramirez",
    des: "Carlos, is an adrenaline junkie who has explored some of the most remote and exciting destinations around the globe. His expertise in adventure travel guarantees thrilling and safe experiences for our clients.",
    p: "Our Adventure Specialist",
  },
  {
    name: "Sophie Lee",
    des: "Sophie, combines her love for food and travel to create mouth-watering itineraries. From street food tours to gourmet dining experiences, Sophie ensures that every journey is a culinary delight.",
    p: "ulinary Travel Expert",
  },
];
const ulNavBar = document.getElementById("navbarmenu");
const ulRedes = document.getElementById("redes");

const contenido = document.getElementById("contenedor_contenido");

const clean = () => {
  const clean = document.getElementById("child");
  if (document.getElementById("child")) contenido.removeChild(clean);
};

generateMenu();
home();

ulNavBar.addEventListener("click", handleMenuClick);

function handleMenuClick(event) {
  const { target } = event;
  switch (target.id) {
    case "home":
      home();
      break;
    case "about":
      about();
      break;
    case "contact":
      contact();
      break;
    case "search":
      search(event);
      break;
    case "clear":
      clear();
      break;

    default:
      break;
  }
}

function home() {
  clean();
  if (document.getElementById("lisearch"))
    document.getElementById("lisearch").style.visibility = "visible";
  const child = document.createElement("div");
  child.id = "child";
  child.classList.add("home");

  const desc = document.createElement("div");
  const hometitle = document.createElement("h1");
  hometitle.textContent = "EXPLORE DREAM DESTINATION";

  hometitle.classList.add = "title";
  desc.appendChild(hometitle);

  const paragraf = document.createElement("p");
  paragraf.textContent =
    "Welcome to your ultimate travel guide! Whether you are seeking hidden gems, bustling cityscapes, or serene nature escapes, our curated recommendations will inspire your wanderlust. Dive into our expert tips, personalized itineraries, and insider secrets to make your next trip unforgettable. Start exploring now and let us help you create memories that will last a lifetime.";
  desc.appendChild(paragraf);

  const bookbtn = document.createElement("button");
  bookbtn.textContent = "BOOK NOW";
  desc.appendChild(bookbtn);

  child.appendChild(desc);

  const result = document.createElement("div");

  const rtitle = document.createElement("h2");
  rtitle.textContent = "Result";
  result.appendChild(rtitle);

  child.appendChild(result);

  contenido.appendChild(child);
}

function about() {
  clean();

  if (document.getElementById("lisearch"))
    document.getElementById("lisearch").style.visibility = "hidden";
  const child = document.createElement("div");
  child.id = "child";
  child.classList.add("about");

  const title = document.createElement("h1");
  title.textContent = "ABOUT US";

  title.classList.add = "title";
  child.appendChild(title);

  const paragraf = document.createElement("p");
  paragraf.textContent =
    "we believe that travel is more than just visiting new places, it is about creating unforgettable experiences and lifelong memories. Our dedicated team of travel enthusiasts is committed to providing you with personalized recommendations, insider tips, and unique itineraries that cater to your interests and passions. Join us on a journey to explore the world, one adventure at a time.";
  child.appendChild(paragraf);

  const childSecond = document.createElement("div");
  childSecond.id = "second-child";
  childSecond.classList.add("team");

  const stitle = document.createElement("h1");
  stitle.textContent = "OUR TEAM";
  childSecond.appendChild(stitle);

  const dl = document.createElement("dl");
  childSecond.appendChild(dl);
  for (const person of team) {
    const persona = document.createElement("dt");
    persona.textContent = person.name;
    const des = document.createElement("dd");
    des.textContent = person.des;
    dl.appendChild(persona);
    dl.appendChild(des);
  }

  child.appendChild(childSecond);
  contenido.appendChild(child);
}

function contact() {
  clean();
  if (document.getElementById("lisearch"))
    document.getElementById("lisearch").style.visibility = "hidden";
  const child = document.createElement("div");
  child.id = "child";
  child.classList.add("contacto");

  const title = document.createElement("h1");
  title.textContent = "CONTACT US";
  child.appendChild(title);

  const paragraf = document.createElement("p");
  paragraf.textContent = "Get in touch";
  child.appendChild(paragraf);

  const formulario = document.createElement("form");

  for (const field of contactoFields) {
    const label = document.createElement("label");
    label.textContent = field.text;
    formulario.appendChild(label);
    formulario.appendChild(document.createElement("br"));

    const input = document.createElement("input");
    input.id = field.name;
    formulario.appendChild(input);
    formulario.appendChild(document.createElement("br"));
  }

  const label = document.createElement("label");
  label.textContent = "Message";
  formulario.appendChild(label);
  formulario.appendChild(document.createElement("br"));

  formulario.appendChild(document.createElement("textarea"));
  formulario.appendChild(document.createElement("br"));

  const formbtn = document.createElement("button");
  formbtn.textContent = "SEND";
  formulario.appendChild(formbtn);

  child.appendChild(formulario);

  contenido.appendChild(child);
}

function generateMenu() {
  const logo = document.createElement("i");
  logo.classList.add("fa", "fa-leaf");
  logo.id = "logo";
  ulNavBar.appendChild(logo);

  ulNavBar.appendChild(document.createElement("br"));

  for (const section of seccion_name) {
    const li_section = document.createElement("li");
    li_section.textContent = section.text;
    li_section.id = section.valor;
    li_section.classList.add("menu");
    li_section.style.cursor = "pointer";
    ulNavBar.appendChild(li_section);
  }

  /* Search section */
  const li_search = document.createElement("li");
  const div = document.createElement("div");
  div.id = "lisearch";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "inputSearch";
  input.placeholder = "Enter a destination or keyword";
  input.value = "";

  div.appendChild(input);

  const formbtn = document.createElement("button");
  formbtn.textContent = "search";

  formbtn.id = "search";

  div.appendChild(formbtn);

  const formbtn2 = document.createElement("button");
  formbtn2.textContent = "clear";
  formbtn2.id = "clear";
  div.appendChild(formbtn2);

  li_search.appendChild(div);
  ulNavBar.appendChild(li_search);

  for (const red of redes) {
    const icon = document.createElement("i");
    icon.classList.add("fa", red.icon);
    ulRedes.appendChild(document.createElement("br"));
    ulRedes.appendChild(icon);
  }
}
function search(event) {
  const dato = document.getElementById("inputSearch")
    ? document.getElementById("inputSearch").value
    : null;

  console.log("get json", dato);

  const options = {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
      },
  };

  const apiUrl = "./travel_recommendation_api.json";
  fetch(apiUrl, options)
    .then((response) => {
      return response.json(); // pasrse the response
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("An error ocurred : ", error);
    });
}
function clear() {
  if (document.getElementById("inputSearch"))
    document.getElementById("inputSearch").value = "";
}
