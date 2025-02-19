document.addEventListener("DOMContentLoaded", () =>{
    const contenedor = document.querySelector(".contenedor_emojis");
    const emojis = ["🥰", "😍", "😘", "💞", "💘", "❤️", "💌", "😻", "🤩"];
    const maxEmojis = 20;

    //generar los emojis aleatoreamente
    function creadorEmojis(){
        if (document.querySelectorAll(".emoji").length >= maxEmojis) return;
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random()*emojis.length)];
        contenedor.appendChild(emoji);

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = Math.random() * 3 + 2 + "s";

        emoji.addEventListener("animationend",() =>{
            emoji.remove();
        })
    }
    setInterval(creadorEmojis, 300);

    //giro de la carta
    const btnSi = document.getElementById("btnSi");
    const btnNo = document.getElementById("btnNo");
    const carta = document.querySelector(".estructura_carta");
    const mensaje = document.querySelector(".chascarrillo");
    const cartaDetras = document.querySelector(".posterior_carta");

    btnSi.addEventListener("click", (e) => {
        e.stopPropagation();
        carta.classList.add("volteada");
    });

    btnNo.addEventListener("click", (e) => {
        e.stopPropagation();
        mensaje.classList.add("mostrar");
        setTimeout(() => {
            mensaje.classList.remove("mostrar");
        }, 8000);
    });

    cartaDetras.addEventListener("click", () => {
        carta.classList.remove("volteada");
    });
});