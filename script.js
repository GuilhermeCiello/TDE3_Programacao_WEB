document.addEventListener('DOMContentLoaded', () => {
    function pokemon() {
        let randomPokemonId = Math.floor(Math.random() * 100) + 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`;
        
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.clear();
                console.log(data);
                document.getElementById('nome').innerHTML = data['name'];
                document.getElementById('numero').innerHTML = data['id'];
                let img = data['sprites']['front_default'];
                document.getElementById('img').setAttribute('src', img);
            })
            .catch((erro) => {
                console.log("Erro: " + erro);
            })
        console.clear();
    }

    document.getElementById('btn').onclick = pokemon;
});