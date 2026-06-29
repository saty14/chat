
const currentScript = document.currentScript;
const oauthId = currentScript.dataset.oauthId;
const oauthDomen = currentScript.dataset.oauthDomen;

console.log(oauthId); // 123456

if (oauthId !== "12345") {
  throw new Error("Invalid OAuth ID");
}

if (oauthDomen !== "mysite.com") {
  throw new Error("Invalid OAuth Domen");
}



(function () {

    const button = document.createElement("div");

    button.innerHTML = "💬";

    Object.assign(button.style, {
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#2563eb",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "28px",
        cursor: "pointer",
        zIndex: "999999",
        boxShadow: "0 5px 15px rgba(0,0,0,.3)"
    });

    const chat = document.createElement("div");

    chat.style.cssText = `
        position:fixed;
        right:20px;
        bottom:90px;
        width:350px;
        height:600px;
        background:white;
        border-radius:10px;
        box-shadow:0 5px 20px rgba(0,0,0,.3);
        display:none;
        overflow:hidden;
        z-index:999999;
    `;

    chat.innerHTML = `
        <iframe
            src="https://chat-gilt-alpha-38.vercel.app/frontend/chat.html"
            style="width:100%;height:100%;border:none;">
        </iframe>
    `;

//   src="http://127.0.0.1:5500/frontend/chat.html"
    button.onclick = () => {
        chat.style.display =
            chat.style.display === "none" ? "block" : "none";
    };

    document.body.appendChild(button);
    document.body.appendChild(chat);

})();


