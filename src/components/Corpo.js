import Stories from "./Stories"
import Posts from "./Posts"
import User from "./User"
import Sugestoes from "./Sugestoes"
import Rodape from "./Rodape"

export default function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />
            <SideBar />
        </div>
    )
}

function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />        
        </div>
    )
}

function SideBar() {
    return (
        <div class="sidebar">
            <User nome="catanacomics" user="Catana" />
            <Sugestoes />
            <Rodape />
        </div>
    )
}