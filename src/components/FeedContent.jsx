import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsBookmarkHeart } from "react-icons/bs";

export default function FeedContent(props){
    return(
        <div className="conteudoFeed">
            
            <div className="postName">
                <div className="headerPost">
                    <img className="userImage" src={props.imageUser} alt="Post"/>
                    <div>
                        <h4>{props.Username}</h4>
                        <p>{props.Localidade}</p>
                    </div>
                </div>
                <i><FiMoreHorizontal/></i>
            </div>

            <div className="postConteudo">
                <img src={props.postImage}/>
            </div>

            <div className="iconsFeed">
                <div className="feedActionLeft">
                    <i><AiOutlineHeart/></i>
                    <i><AiOutlineMessage/></i>
                    <i><AiOutlineSend/></i>
                </div>
                <i><BsBookmarkHeart/></i>
            </div>
            <div>
                <h4>Curtidas {props.qntdCurtidas}</h4>
                <div className="descricao">
                    <h4>{props.nomeDescricao}</h4>
                    <p>{props.descricao}</p>
                </div>
                <p className="botaoComent">Ver todos os 12 comentários</p>
                <input type="text" placeholder="Escreva um comentário..." className="customInput"/>
                <hr/>
            </div>
        </div>  
    )
}