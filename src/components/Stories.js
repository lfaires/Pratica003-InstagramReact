const userName = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"]

export default function Stories() {
    return (
        <div class="stories">
            {userName.map(nome => <Story nome={nome} imgSrc={"assets/img/"+ nome +".svg"} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story (props) {
    return (
    <div class="story">
        <div class="imagem">
            <img src={props.imgSrc} />
        </div>
        <div class="usuario">
            {props.nome}
        </div>
    </div>
     
    )
}