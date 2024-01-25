function processarTexto() {
    var textoOriginal = document.getElementById("textoInput").value.toLowerCase();
    var opcao = document.getElementById("opcao").value;

    var resultado = "";

    for (var i = 0; i < textoOriginal.length; i++) {
        switch (textoOriginal[i]) {
            case 'e':
                resultado += opcao === 'criptografar' ? 'enter' : 'e';
                break;
            case 'i':
                resultado += opcao === 'criptografar' ? 'imes' : 'i';
                break;
            case 'a':
                resultado += opcao === 'criptografar' ? 'ai' : 'a';
                break;
            case 'o':
                resultado += opcao === 'criptografar' ? 'ober' : 'o';
                break;
            case 'u':
                resultado += opcao === 'criptografar' ? 'ufat' : 'u';
                break;
            default:
                resultado += textoOriginal[i];
                break;
        }
    }

    document.getElementById("resultado").textContent = resultado;
}

function copiarResultado() {
    var resultado = document.getElementById("resultado");
    var textarea = document.createElement("textarea");
    textarea.value = resultado.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Texto copiado para a área de transferência!");
}
function processarTexto() {
            var textoOriginal = document.getElementById("textoInput").value.toLowerCase();
            var opcao = document.getElementById("opcao").value;

            var resultado = "";

            for (var i = 0; i < textoOriginal.length; i++) {
                switch (textoOriginal[i]) {
                    case 'e':
                        resultado += opcao === 'criptografar' ? 'enter' : 'e';
                        break;
                    case 'i':
                        resultado += opcao === 'criptografar' ? 'imes' : 'i';
                        break;
                    case 'a':
                        resultado += opcao === 'criptografar' ? 'ai' : 'a';
                        break;
                    case 'o':
                        resultado += opcao === 'criptografar' ? 'ober' : 'o';
                        break;
                    case 'u':
                        resultado += opcao === 'criptografar' ? 'ufat' : 'u';
                        break;
                    default:
                        resultado += textoOriginal[i];
                        break;
                }
            }

            document.getElementById("resultado").textContent = resultado;
        }

        function copiarResultado() {
            var resultado = document.getElementById("resultado");
            var textarea = document.createElement("textarea");
            textarea.value = resultado.textContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert("Texto copiado para a área de transferência!");
        }