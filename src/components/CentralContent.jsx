import Story from "./Story";
import Profile from "../assets/profilePic/SejaUMBU.jpg";
import Profile1 from "../assets/profilePic/Jaidan.jpg";
import Profile2 from "../assets/profilePic/knucles.jpg";
import Profile3 from "../assets/profilePic/crossing.png";
import Profile4 from "../assets/profilePic/Ino.jpg";
import Profile5 from "../assets/profilePic/link.jpg";
import Profile6 from "../assets/profilePic/Niko.jpg";
import Profile7 from "../assets/profilePic/Vert.jpg";
import FeedContent from "./FeedContent";
import ProfilePic from "../assets/profilePic/Jaidan.jpg";
import Post from "../assets/posts/Lancer.jpg";
import Post2 from "../assets/posts/SetupGamer.jpg";
import Post3 from "../assets/posts/MazdaRX7.jpg";
import Post4 from "../assets/posts/PixelArt.gif";
import Post5 from "../assets/posts/Academia.jpg";
import Post6 from "../assets/posts/Umbu.jpg";

export default function CentralContent(){
    return(
        <div className="centralContent">
            <div className="storyContainer">
                <div className="storyOrder">
                    <Story image={Profile1} nome="bruno_jaidan"/>
                    <Story image={Profile2} nome="Mr_Knucles"/>
                    <Story image={Profile3} nome="IsabelLayer"/>
                    <Story image={Profile4} nome="Shiba_INO"/>
                    <Story image={Profile5} nome="Link"/>
                    <Story image={Profile6} nome="N1k0_TwT"/>
                    <Story image={Profile7} nome="Vert_W1ller"/>  
                </div>
            </div>  
            <div className="feed">
                <FeedContent 
                    imageUser={Profile} 
                    Username="sejaumbu" 
                    Localidade="SP - São paulo" 
                    postImage={Post6} qntdCurtidas="1.346" 
                    nomeDescricao="sejaumbu" 
                    descricao="Bem-vindo ao futuro da jardinagem! 🌱💚🍃
                    Somos a plataforma que valoriza o trabalho dos jardineiros e conecta apaixonados por jardins a serviços personalizados de alta qualidade. 🌿 🌳 
                    Cultive conosco a beleza natural que o mundo merece.
                    #SejaUMBU 💚🌱">
                </FeedContent>
                
                <FeedContent 
                    imageUser={ProfilePic} 
                    Username="bruno_jaidan_" 
                    Localidade="SP - São paulo" 
                    postImage={Post} qntdCurtidas="1.346" 
                    nomeDescricao="bruno_jaidan_" 
                    descricao="Minha paixão por carros JDM vêm aumentando a cada dia 😍">
                </FeedContent>
            
                <FeedContent 
                    imageUser={Profile2} 
                    Username="Mr_Knucles" 
                    Localidade="SP - São paulo" 
                    postImage={Post2} qntdCurtidas="10.569" 
                    nomeDescricao="Mr_Knucles" 
                    descricao="Venho aqui compartilhar com meus companheiros esse humilde Setup gamer🤞">
                </FeedContent>
            
                <FeedContent 
                    imageUser={Profile4} 
                    Username="Shiba_INO" 
                    Localidade="SP - São paulo" 
                    postImage={Post3} qntdCurtidas="10M" 
                    nomeDescricao="Shiba_INO" 
                    descricao="Sabia que deveria apostar minha renda no fortune tiger, sonho realizado 🤑">
                </FeedContent>
          
                <FeedContent 
                    imageUser={Profile5} 
                    Username="Link" 
                    Localidade="SP - São paulo" 
                    postImage={Post4} qntdCurtidas="10M" 
                    nomeDescricao="Link" 
                    descricao="Minha primeira pixel art, espero que gostem 🥰">
                </FeedContent>     
            
                <FeedContent 
                    imageUser={Profile6} 
                    Username="N1k0_TwT" 
                    Localidade="SP - São paulo" 
                    postImage={Post5} qntdCurtidas="15" 
                    nomeDescricao="Link" 
                    descricao="Comecei na academia a pouco tempo, mas posso dizer que estou todo quebrado 💪😭">
                </FeedContent>     
            </div>
        </div>
    )
}