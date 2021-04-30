export default function Stories() {
    return (
        <div class="stories">
            <Story imgSrc="" user="" />

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
            <img src={props.imgSrc} />
            </div>
            <div class="usuario">
            {props.user}
            </div>
        </div>
    )
}