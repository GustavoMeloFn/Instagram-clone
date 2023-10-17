import logotipo from "../assets/insta.png";
import ItensMenu from "./ItensMenu.jsx";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCompass } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export default function LeftContent(){
    return(
        <div className='leftContent'>
            <div className='logotype'>
                <img src= {logotipo} alt='Logo'/>
            </div>

            <nav>
                {/* <ItensMenu> chama um componente, já "icone"/"texto" pega o props com este nome e logo em seguida realiza a alteração de dados*/}
                <ul>
                    <ItensMenu icone={<GrHomeRounded/>} texto=" Home"/>
                    <ItensMenu icone={<AiOutlineSearch/>} texto=" Pesquisa"/>
                    <ItensMenu icone={<AiOutlineCompass/>} texto=" Explorar"/>
                    <ItensMenu icone={<AiOutlineVideoCamera/>} texto=" Reels"/>
                    <ItensMenu icone={<AiOutlineSend/>} texto=" Mensagens"/>
                    <ItensMenu icone={<AiOutlineHeart/>} texto=" Notificações"/>
                    <ItensMenu icone={<AiOutlineUpload/>} texto=" Criar"/>
                    <ItensMenu icone={<AiOutlineUser/>} texto=" Perfil"/>
                </ul>
            </nav>
        </div>
    )
}
