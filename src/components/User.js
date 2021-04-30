export default function User(props) {
    return (
        <div class="usuario">
            <img src={"assets/img/"+ props.nome +".svg"} />
            <div class="texto">
                <strong>{props.nome}</strong>
                {props.user}
            </div>
      </div>
    )
}