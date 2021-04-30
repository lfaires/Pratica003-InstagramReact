const user = ["meowed", "barked"]
const conteudo = ["gato-telefone", "dog"]
const otherUser = ["respondeai", "adorable_animals"]
const qtd = ["101.523","99.159"]

export default function Posts() {
    return (
    <div class="posts">
        <Post nome="meowed" conteudo="gato-telefone" outros="respondeai" />
        <Post nome="barked" conteudo="dog" outros="adorable_animals" />
    </div>
    )
}

function Post(props) {
    return (
    <div class="post">
        <Topo nome={props.nome} />
        <Conteudo conteudo={props.conteudo}/>
        <Fundo outros={props.outros} />
    </div>
    )
}

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={"assets/img/" + props.nome + ".svg"}/>
                {props.nome}
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
            <img src={"assets/img/" + props.conteudo + ".svg"} />
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
                <img src={"assets/img/" + props.outros + ".svg"} />
                <div class="texto">
                    Curtido por <strong>{props.outros}</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
            </div>
        </div>
    )
}