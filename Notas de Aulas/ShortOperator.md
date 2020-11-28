# Atalhos

## V-bind:

No caso da utilização do v-bind podemos utilizar de maneira mais simples, sem necessidade de digitar v-bind.<br>
Em vez de digitar o v-bind:evento você pode digitar :ação.

### Exemplo:

- Normal:<br>
  `<a :href="url">Clique Aqui</a>`
- Short operator:<br>
  `<a v-bind:href="url">Clique Aqui</a>`

<hr>

## V-on:

No caso do v-on o tipo de alteração muda sendo necessario digitar a com um `@evento`;

### Exemplo:

- Normal:<br>
  ` <button v-on:click="fazAlgumaCoisa">Botão</button>`
- Short operator:<br>
  `<button @click="fazAlgumaCoisa">Botão</button>>`
