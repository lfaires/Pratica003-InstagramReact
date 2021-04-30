export default function Posts() {
    return (
        <div class="posts">
          <Post />
        </div>
    )
}

function Post() {
    return (
        <div class="post">
            {user.map(nome => (
                <Topo nome={nome} imgSrc={"assets/img/"+ nome +".svg"} />
                ))}

            {conteudo.map(nome => (
                <Conteudo imgSrc={"assets/img/"+ nome +".svg"}/>
                ))}

            {otherUser.map(nome => (
                <Fundo nome={nome} imgSrc={"assets/img/"+ nome +".svg"} />
                ))}
        </div>
    )
}

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imgSrc}/>
                {props.name}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src={props.imgSrc} />
        </div>
    )
}

function Fundo(props) {
    return (
        <div class="Fundo">
            <div class="acoes">
                <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class="curtidas">
                <img src={props.imgSrc} />
                <div class="texto">
                    Curtido por <strong>{props.nome}</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
            </div>
        </div>
    )
}

const user = ["meowed", "barked"]
const conteudo = ["gato-telefone", "dog"]
const otherUser = ["respondeai", "adorable_animals"]