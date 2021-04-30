export default function Fundo() {
    return (
        <div class="fundo-mobile">
           {icones.map(nome => <Icone name={nome} />)}
        </div>
    )
}

function Icone(props){
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}

const icones =["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]
