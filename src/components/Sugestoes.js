const user = ["bad.vibes.memes" ,"chibirdart" ,"razoesparaacreditar" ,"adorable_animals" ,"smallcutecats"]

export default function Sugestoes() {
    return (
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {user.map( nome => <Sugestao nome={nome} />)}
      </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={"assets/img/"+ props.nome +".svg"} />
                <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}
