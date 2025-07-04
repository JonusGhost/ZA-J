function tunjukkan(){document.getElementById("sticky-ad").style = "bottom: 0px";}
function hilangkan() {document.getElementById("sticky-ad").style = "bottom: -130px";}

function showDiv() {Content.style = "opacity:1;margin-top:15vh;";ket.style="margin-top:30px";}

function memulai(){suratin.style="transition:all 1s ease;transform:scale(.1);opacity:0";ket.style="transition:all 1s ease;transform:scale(.1);opacity:0";setTimeout(pesan,300)}

function kpemb() {
    bodyblur.style="opacity:.7;animation:none";
    beneranblur.style="-webkit-backdrop-filter:blur(5px); backdrop-filter:blur(5px)";
    wallpaper.style="transform: scale(1.8)";
    suratin.style="display:none";
    ket.style="display:none";
    fotoakhir.style="display:inline-flex;";
    setTimeout(ftmuncul,100);
    Content.style = "opacity:1;margin-top:2vh;";
    bq.style = "opacity:1;visibility:visible;margin-top:5px";
    setTimeout(ngetik,500)
}

function ftmuncul(){fotoakhir.style.transform="scale(1)";fotoakhir.style.opacity="1";}
function tombol(){
    Tombol.style="margin-top:15px;opacity:1;transform: scale(1);";
    Bn.style="margin:12px 0 12px 12px";
    ftom=1;
} 
ftom=0; 
function fakhiran(){document.getElementById("akhiran").style = "display:inline-flex";}

const swalst = Swal.mixin({
    allowOutsideClick: false, 
    showConfirmButton: true,
    confirmButtonText: 'Siguiente',
    imageWidth: 100, 
    imageHeight: 100
}); 

const swals = Swal.mixin({
    allowOutsideClick: false, 
    cancelButtonColor: '#FF0040', 
    imageWidth: 1000, 
    imageHeight: 1000
}); 

const style = document.createElement('style'); 

function multifungsi(){
	if(ftom==1){jawab();}
	if(ftom==5)return;
}

function otomatis() {befanimkata();setTimeout(animkata,300);} 
function befanimkata(){kalimatc.style="transform:scale(.3);";} 
function animkata() {kalimatc.style="transform:scale(1);";}

function otomatis2() {
	befanimkata2();
	setTimeout(animkata2,700);
} 

function befanimkata2(){
    kalimat.style.opacity="0";
    kalimatb.style.opacity="0";
} 

function animkata2() {
	kalimat.innerHTML = pesanakhir1;
	kalimat.style.opacity="1";
	kalimatb.style.margin="30px";
	kalimatb.style.opacity="1";
}

function kemunculan(){
    otomatis();
    kalimatc.innerHTML = mensajeIntermedio2;
    setTimeout(kemunculan2,2200);
} 

function kemunculan2(){
    otomatis();
    kalimatc.innerHTML = mensajeIntermedio3;
    setTimeout(kemunculan3,2200);
} 

function kemunculan3(){
    otomatis();
    kalimatc.innerHTML = textoEscritura2;
    setTimeout(kemunculan,2200);
}

var aa=0,katangetik;

function ngetik() {
    if(aa<katangetik.length){
        kalimat.innerHTML += katangetik.charAt(aa);
        aa++;
        setTimeout(ngetik,80);
    } 
    if(aa==katangetik.length){
        fungsi=1;
        setTimeout(tombol,300);
    }
}

var ai=0,katangetik2;

function ngetik2() {
    if(ai<katangetik2.length){
        kalimatc.innerHTML += katangetik2.charAt(ai);
        ai++;
        setTimeout(ngetik2,100);
    }
    if(ai==katangetik2.length){
        kalimatc.style.animation="rto 1s infinite alternate";
        setTimeout(stakhir,1000);
    }
}

function sbakhir(){
    kalimatc.style = "opacity:1;transform: scale(1);margin-top:30px";
    Bn.style.display="none";
    const botonFinal = document.getElementById("boton-final");
    if (botonFinal) {
        botonFinal.style.display = "block";
        botonFinal.style.opacity = "0";
        botonFinal.style.transition = "opacity 1s ease";
        setTimeout(() => botonFinal.style.opacity = "1", 100);
    }
} 

setTimeout(showDiv,100);

async function jawab(){
	setTimeout(tunjukkan,2222);
	setInterval(createHeart,200);
	bodyblur.style="opacity:.5;animation:none";
	beneranblur.style="-webkit-backdrop-filter:blur(2px); backdrop-filter:blur(2px)";
	wallpaper.style="transform: scale(1)";
	Tombol.style="opacity:0;transform: scale(.1);";
	setTimeout(sbakhir,3000);
	setTimeout(ngetik2,3100);
	otomatis2();
}

flag=1;flagg=1;fungsi=0;

function tolak(){
	if(fungsi==1){
	    if(flagg==1){
            Bn.style="margin-left:90px;transform: rotate(45deg)";
            buttonv2.style="opacity:1;";
            By.style="opacity:0";
            document.getElementById("buttonv2").innerHTML = textoRechazo1;
            flagg=2
        } else if(flagg==2){
            Bn.style="margin-left:111px;transform: rotate(135deg)";
            document.getElementById("buttonv2").innerHTML = textoRechazo2;
            flagg=3
        } else if(flagg==3){
            Bn.style="margin:12px 0 12px 12px;transform: rotate(0)";
            buttonv2.style="opacity:0;";
            By.style="opacity:1";
            flagg=1
        }
    }
}

textoRechazo1 = "¿Estás segura? Haz clic en NO nuevamente 😂";
textoRechazo2 = "No puedes decir NO, la única opción es SÍ. Pero inténtalo de nuevo 😅";

const notas = [
    {
        title: 'Electric - A veces solo pienso en ti… y todo dentro mío se enciende.',
        imageUrl: '/media/figu1.webp',
        html: `
            <div style="margin-top: 20px;">
                <iframe style="border-radius:12px" 
                  src="https://open.spotify.com/embed/track/1GKrArph1YXfxMH49flYND?utm_source=generator" 
                  width="300" height="80" frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            </div>
        `
    },
    {
        title: 'Follow Me - Cuando no puedas más, aquí estaré.',
        imageUrl: '/media/figu8.webp',
        html: `
            <div style="margin-top: 20px;">
                <iframe style="border-radius:12px" 
                  src="https://open.spotify.com/embed/track/6r9tjMWLv8fNdZKKTnqCEr?utm_source=generator" 
                  width="300" height="80" frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            </div>
        `
    },
    {
        title: 'I Feel Like Chet - Me la dedicaste y no sabía qué sentir… solo sonreí.',
        imageUrl: '/media/figu5.webp',
        html: `
            <div style="margin-top: 20px;">
                <iframe style="border-radius:12px" 
                  src="https://open.spotify.com/embed/track/1JFCxETWjhVCQU0HxNGpdg?utm_source=generator"
                  width="300" height="80" frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            </div>
        `
    },
    {
        title: 'Ride or Die - Hay canciones que prenden fuego… como tú, cuando te gusta algo mucho.',
        imageUrl: '/media/figu7.webp',
        html: `
            <div style="margin-top: 20px;">
                <iframe style="border-radius:12px" 
                  src="https://open.spotify.com/embed/track/5oYVxFt2k4SkVp6wzVsFWN?utm_source=generator"
                  width="300" height="80" frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            </div>
        `
    },
    {
        title: 'I Cant Help Falling in Love - ¿Cómo no enamorarme de ti, si cada detalle tuyo me hace quererte más? (No encontre la de TOP)',
        imageUrl: '/media/figu3.webp',
        html: `
            <div style="margin-top: 20px;">
                <iframe style="border-radius:12px" 
                  src="https://open.spotify.com/embed/track/44AyOl4qVkzS48vBsbNXaC?utm_source=generator"
                  width="300" height="80" frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            </div>
        `
    },
    {
        title: '¡Ya casi terminamos!',
        text: 'Pero esto es solo el comienzo de todo lo que quiero mostrarte (Claro sin presiones a nuestro ritmo)',
        imageUrl: '/media/figu6.webp',
    },
    {
        title: 'Undisclosed Desires - No quiero controlar, solo conocer… y cuidar lo que hay dentro de ti.',
        imageUrl: '/media/figu2.webp',
        html: `
            <div style="margin-top: 20px;">
                <iframe style="border-radius:12px" 
                    src="https://open.spotify.com/embed/track/0It6VJoMAare1zdV2wxqZq?utm_source=generator"
                    width="300" height="80" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            </div>
        `
    },
    {
      title: 'Lista de Canciones - Cada una de ellas me hace pensar en ti.',
      imageUrl: '/media/figu9.webp',
      html: `
        <div style="margin-top: 20px; display: flex; justify-content: center;">
          <a href="https://www.tiktok.com/@jonus5937/collection/zuley-7496368594862246674?is_from_webapp=1&sender_device=pc" 
             target="_blank" 
             style="
                width: 300px;
                height: 80px;
                border-radius: 12px;
                background-color: #000;
                color: white;
                text-decoration: none;
                font-family: sans-serif;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                transition: 0.3s;
            "
            onmouseover="this.style.backgroundColor='#222';"
            onmouseout="this.style.backgroundColor='#000';"
          >
            🔗 Ver colección en TikTok
          </a>
        </div>
      `
    },
    {
      title: 'Tus flores - Primeras flores que te regalé.',
      imageUrl: '/media/figu10.jpg',
      html: `
        <div style="margin-top: 20px; display: flex; justify-content: center;">
          <a href="https://drive.google.com/drive/folders/1NJaGPgj6ohrCZGb2k5T8aX8J4VpR8q_H?usp=sharing" 
             target="_blank" 
             style="
                width: 300px;
                height: 80px;
                border-radius: 12px;
                background-color: rgb(255, 255, 0);
                color: #000;
                text-decoration: none;
                font-family: sans-serif;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 8px rgba(255, 255, 0, 0.2);
                transition: 0.3s;
            "
            onmouseover="this.style.backgroundColor='rgb(161, 161, 0)';"
            onmouseout="this.style.backgroundColor='rgb(255, 255, 0)';"
          >
            🌻 Instalar aplicación
          </a>
        </div>
      `
    }
    ];

function mostrarNotas(index = 0) {
    const nota = notas[index];
    swalst.fire({
        title: nota.title,
        text: nota.text || undefined,
        html: nota.html || undefined,
        imageUrl: nota.imageUrl || undefined,
        showCancelButton: index > 0,
        confirmButtonText: index < notas.length - 1 ? 'Siguiente' : 'Finalizar',
        cancelButtonText: 'Anterior',
        reverseButtons: true,
        confirmButtonColor: '#24BCE1',  
        cancelButtonColor: '#6c757d'    
    }).then((result) => {
        if (result.isConfirmed && index < notas.length - 1) {
            mostrarNotas(index + 1);
        } else if (result.dismiss === Swal.DismissReason.cancel && index > 0) {
            mostrarNotas(index - 1);
        } else if (result.isConfirmed && index === notas.length - 1) {
            continuarConRegalo();
        }
    });
}

function continuarConRegalo() {
    katangetik = "¿TE GUSTO EL PEQUEÑO DETALLE?";
    pesanakhir1 = "Este pequeño rincón digital no es solo una sorpresa… es un pedacito de lo que me inspiras cada día.";
    katangetik2 = "Te quiero mucho ❤️";
    kpemb();
}

async function pesan(){
    mostrarNotas(0);
}