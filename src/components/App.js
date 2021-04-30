import Fundo from "./Fundo"
import Sugestoes from "./Sugestoes"
import Posts from "./Posts"
import Stories from "./Stories"

export default function App(){
    return (
    <>
        <div class="corpo">
            <Stories />
            <Posts />
        </div>

        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                <strong>catanacomics</strong>
                Catana
                </div>
            </div>
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>

        <Fundo />
    </>
    )
}