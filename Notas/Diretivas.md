Todos os componentes iniciados com v- utilizam a diretiva do vue, onde eles são convertidos para a HTML dentro e não são exibidos no resultado final.

Por exemplo:
no Vue:

<div v-if="condicional"></div>
renderiza no html:
<div></div>

---

V-bind:
O v-bind torna dinamico um elemento fazendo o bind o elemento condicionado ele ao vue.
podendo definir no vue a variavel e ser exibido de outra maneira direto do JS
por exemplo
v-bind:id (cria um id)
v-bind:id (cria um href)

V-on:
Executa uma ação (Similar addEventListener)
