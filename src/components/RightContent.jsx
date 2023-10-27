import Perfil from "./Perfil";
import ProfileUser from "../assets/profilePic/Melo.jpg";
import Profile1 from "../assets/profilePic/Felipe.jpg";
import Profile2 from "../assets/profilePic/Camile.jpg";
import Profile3 from "../assets/profilePic/Lucas.jpg";
import Sugestoes from "./Sugestoes";

export default function RightContent(){
    return(
        <div className="rightContent">
            <Perfil 
                destaque={ProfileUser}
                nPublicacoes="1243"
                nSeguidores="5M"
                nSeguindo="10"
                nameUserDestaque="Gustavo de Melo Fernandes"
            />

            <br/>
            <p>Sugestões para você</p>
            <br/>

            <Sugestoes sugeridoImage={Profile1} nomePerfilSugerido="felipen4scimento" condicao="Segue você"/>
            <Sugestoes sugeridoImage={Profile2} nomePerfilSugerido="voidmile" condicao="Sugestões para você"/>  
            <Sugestoes sugeridoImage={Profile3} nomePerfilSugerido="yspeedd13_" condicao="Sugestões para você"/>
            
            <br/>

            <div className="creditos">
                <p>Clone do Instagram feito utilizando React.js por Gustavo melo</p>
                <br/>
                <p>&copy; 2023 INSTAGRAM FROM MELO</p>
            </div>
        </div>
    )
}