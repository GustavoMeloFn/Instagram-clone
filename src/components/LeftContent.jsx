import logotipo from "../assets/insta.png";
import ItensMenu from "./ItensMenu.jsx";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCompass } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import Perfil from "../assets/profilePic/Melo.jpg";

export default function LeftContent(){
    return(
        <div className='leftContent'>
            <nav>
            <div className='logotype'>
                <img src= {logotipo} alt='Logo' className="anotherLogo"/>
            </div>

                {/* <ItensMenu> chama um componente, já "icone"/"texto" pega o props com este nome e logo em seguida realiza a alteração de dados*/}
                <ul className="navegacao">
                    <ItensMenu icone={<GrHomeRounded/>} texto=" Home"/>
                    <ItensMenu icone={<AiOutlineSearch/>} texto=" Pesquisa"/>
                    <ItensMenu icone={<AiOutlineCompass/>} texto=" Explorar"/>
                    <ItensMenu icone={<AiOutlineVideoCamera/>} texto=" Reels"/>
                    <ItensMenu icone={<AiOutlineSend/>} texto=" Mensagens"/>
                    <ItensMenu icone={<AiOutlineHeart/>} texto=" Notificações"/>
                    <ItensMenu icone={<AiOutlineUpload/>} texto=" Criar"/>
                    <li>
                        <img src={Perfil} className="perfilIcon" />
                        <span className="text">Perfil</span>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="moreInfo">
                    <ItensMenu icone={<CgDetailsMore/>} texto="Mais"/>
                </ul>
            </nav>
        </div>
    )
}


