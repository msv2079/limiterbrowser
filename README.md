##O que �?

Fiz este plugin em 2013 e estou subindo no meu github

limiterbrowser.js � um plugin que verifica a vers�o do browser e de acordo com os par�metros passados na chamada deste, mostra uma mensagem de incompatibilidade.

* Compat�vel com: IE, Chrome, Safari, Firefox e Opera


##Uso
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="iso-8859-1" />
    <style type="text/css">
        #limiter-browser { background:#ffd800; height:100px; width:100%; position: fixed; top: 0; left: 0; line-height: 100px; display:none; text-align:center; }
    </style>
</head>
<body>
    <div id="limiter-browser"></div>
    <script type="text/javascript" src="jquery.min.js"></script>
    <script type="text/javascript" src="jquery.limiterbrowser-1.0.0.min.js"></script>
    <script type="text/javascript">
        $(function () {
            $("#limiter-browser").limiterbrowser({
                "text": "Atualize seu navegador!",
                "browsers": "ie",
                "blockMinVersions": "7"
            });
        });
    </script>
</body>
</html>
});
```

## Padr�es e Op��es
```html
resultado = $("#limiter-browser").limiterbrowser({
	"text": "Atualize seu navegador!",
	"browsers": "ie",
	"blockMinVersions": "7"
});
```
<ul>
<li><p>resultado: Opcional, caso voc� queira obter um resultado booleano da fun��o</p></li>
<li><p>text: Opcional, este ser� o texto que ir� aparecer quando o browser for incompat�vel</p></li>
<li><p>browsers: Obrigat�rio, voc� pode passar todos os browsers separados por v�rgula. Ex.: "ie, chrome, safari, firefox, opera"</p></li>
<li><p>blockMinVersions: Obrigat�rio, voc� deve passar a mesma quantidade de vers�es quanto a dos browsers e na mesma sequ�ncia.
No caso do Safari a vers�o � composta por 3 n�meros separados por pontos, 5.1.7, e deve ser informada neste padr�o
Para o Chrome a vers�o deve seguir o padr�o: 24.0.1312.56
Se quiser eliminar completamente um browser, informe uma vers�o muito acima do que j� existe do navegador, e todos receber�o a mensagem de incompatibilidade, por exemplo para o IE coloque a vers�o 100</p><p>Caso tenha d�vidas sobre a vers�o, procure o menu Sobre do seu navegador</p></li>
</ul>


##Licen�a
**The MIT License (MIT)**
<p>Copyright (c) Murilo Siqueira</p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>

<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>