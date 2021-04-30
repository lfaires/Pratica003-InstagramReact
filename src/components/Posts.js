export default function Posts() {
    return (
        <div class="posts">
            <div class="post">
            <Topo imgSrc="assets/img/meowed.svg" titulo="meowed" />
            <Conteudo imgSrc="assets/img/gato-telefone.svg" />
            <Fundo imgSrc="assets/img/respondeai.svg" titulo="respondeai" qtd="101.523 " />
            </div>

            <div class="post">
            <Topo imgSrc="assets/img/barked.svg" titulo="barked" />
            <Conteudo imgSrc="assets/img/dog.svg" />
            <Fundo imgSrc="assets/img/adorable_animals.svg" titulo="adorable_animals" qtd="99.159"/>
            </div>
        </div>
    )
}

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
            <img src={props.imgSrc} />
            {props.titulo}
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
        <div class="fundo">
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
                Curtido por <strong>{props.titulo}</strong> e <strong>outras {props.qtd} pessoas</strong>
            </div>
            </div>
        </div>
    )
}