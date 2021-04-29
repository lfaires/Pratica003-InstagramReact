export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>
            <Sugestao name="bad.vibes.memes" imgSrc="assets/img/bad.vibes.memes.svg"/>
            <Sugestao name="chibirdart" imgSrc="assets/img/chibirdart.svg"/>
            <Sugestao name="razoesparaacreditar" imgSrc="assets/img/razoesparaacreditar.svg"/>
            <Sugestao name="adorable_animals" imgSrc="assets/img/adorable_animals.svg"/>
            <Sugestao name="smallcutecats" imgSrc="assets/img/smallcutecats.svg"/>
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
            <img src={props.imgSrc} alt="profile img" />
            <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">Segue você</div>
            </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}