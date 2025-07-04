function crearLluvia() {
  const teAmo = document.createElement("div");
  teAmo.classList.add("te-amo");
  teAmo.innerText = "🫂";
  teAmo.style.left = Math.random() * 100 + "vw";
  teAmo.style.fontSize = (12 + Math.random() * 18) + "px";
  document.body.appendChild(teAmo);
  setTimeout(() => {
    teAmo.remove();
  }, 5000);
}
setInterval(crearLluvia, 300);

document.addEventListener("click", (e) => {
  const frases = [
    // Lo que me gusta de ti
    "Tu sonrisa",
    "Tus ojos",
    "Tus labios",
    "Tus lunares",
    "Tu voz",
    "Tu esencia",
    "Tu humor",
    "Cómo te ríes sin darte cuenta",
    "La forma en que ves las cosas",
    "Tu mirada cuando estás concentrada",
    "Tus silencios cuando estás pensando",
    "Tu forma de expresarte",
    "La forma en que mueves los labios cuando estás pensando",
    "Cómo se iluminan tus ojos cuando hablas de lo que te gusta",
    "Cómo se te escapa una sonrisa cuando te emocionas por algo",
    // Frases que te quiero decir
    "Te quiero mucho",
    "Te quiero de verdad",
    "Me encantas",
    "Eres mi persona favorita",
    "Eres increíble",
    "Eres importante para mí",
    "Tu problema es mi problema",
    "Tu paz es mi paz",
    "Tu éxito es mi celebración",
    "Te presumiría al mundo entero",
    "Quiero todo contigo",
    "Déjame ser ese chico que te cuide de verdad",
    "Soy tan yo contigo",
    "No pienso desaparecer",
    "No espero que me respondas igual, solo que lo sepas",
    "No estás sola, aunque a veces no diga mucho",
    "No te presiono, solo estoy aquí… contigo",
    "Estoy aprendiendo a quererte bien",
    "Me haces querer ser mejor",
    "No importa si te alejas un rato, aquí seguiré",
    "No quiero apresurar nada, pero sí quiero que sepas lo que siento"
  ];

  const fraceAleatorio = frases[Math.floor(Math.random() * frases.length)]
  const estatico = document.createElement("div");
  estatico.classList.add("te-amo", "estatico");
  estatico.innerText = fraceAleatorio;
  estatico.style.left = e.clientX + "px";
  estatico.style.top = e.clientY + "px";
  estatico.style.position = "absolute";
  estatico.style.fontSize = "18px";
  estatico.style.textShadow = "1px 1px 5px #00B6FF";
  estatico.style.textAlign = "center";
  estatico.style.maxWidth = "150px";
  estatico.style.wordWrap = "break-word"; 
  estatico.style.padding = "6px 10px";
  estatico.style.zIndex = "1000";

  document.body.appendChild(estatico);
  setTimeout(() => {
    estatico.remove();
  }, 1500);
});