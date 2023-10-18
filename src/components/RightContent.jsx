import Perfil from "./Perfil";
import ProfileUser from "../assets/profilePic/LinkKawai.jpg";
import Sugestoes from "./Sugestoes";

export default function RightContent(){
    return(
        <div className="rightContent">
            <Perfil 
            destaque={ProfileUser}
            nPublicacoes="1243"
            nSeguidores="5M"
            nSeguindo="10"
            nameUserDestaque="Gustavo de melo Fernandes"
            />
            <br/>
            <Sugestoes/>
        </div>
    )
}