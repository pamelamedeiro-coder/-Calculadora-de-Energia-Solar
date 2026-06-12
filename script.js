document
.getElementById("calcular")
.addEventListener("click", calcular);

function calcular(){

let consumo =
Number(
document.getElementById("consumo").value
);

let conta =
Number(
document.getElementById("conta").value
);

if(consumo <= 0 || conta <= 0){

document.getElementById("resultado")
.innerHTML =
"⚠️ Preencha todos os campos.";

return;

}

let economiaMensal =
conta * 0.90;

let economiaAnual =
economiaMensal * 12;

let paineis =
Math.ceil(consumo / 75);

document.getElementById("resultado")
.innerHTML =

`
<h2>☀️ Resultado da Simulação</h2>

<p>
🔋 Painéis necessários:
<strong>${paineis}</strong>
</p>

<p>
💰 Economia mensal:
<strong>R$ ${economiaMensal.toFixed(2)}</strong>
</p>

<p>
📅 Economia anual:
<strong>R$ ${economiaAnual.toFixed(2)}</strong>
</p>

<p>
🌎 Utilizar energia solar reduz a emissão de poluentes e contribui para um futuro sustentável.
</p>
`;

}