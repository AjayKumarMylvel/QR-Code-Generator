let inp = document.getElementById("inp");
let im = document.getElementById("im");
let qr = document.getElementById("qr");

function gen() {
    if (inp.value.length > 0) {
        im.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inp.value);
        qr.classList.add("show-im");
    } else {
        inp.classList.add("error");
        setTimeout(() => {
            inp.classList.remove("error");
        }, 1000);
    }
}
