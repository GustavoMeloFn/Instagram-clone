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
import Post from "../assets/posts/Umbu.jpg";

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
                    postImage={Post} qntdCurtidas="1.346" 
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
                    postImage="https://picsum.photos/500/650?random=1" qntdCurtidas="1.346" 
                    nomeDescricao="bruno_jaidan_" 
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ༼ つ ◕_◕ ༽つ    ">
                </FeedContent>
            
                <FeedContent 
                    imageUser={Profile2} 
                    Username="Mr_Knucles" 
                    Localidade="SP - São paulo" 
                    postImage="https://picsum.photos/500/700?random=2" qntdCurtidas="10.569" 
                    nomeDescricao="Mr_Knucles" 
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque.🎶">
                </FeedContent>
            
                <FeedContent 
                    imageUser={Profile4} 
                    Username="Shiba_INO" 
                    Localidade="SP - São paulo" 
                    postImage="https://picsum.photos/500/700?random=3" qntdCurtidas="10M" 
                    nomeDescricao="Shiba_INO" 
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. 💖">
                </FeedContent>
          
                <FeedContent 
                    imageUser={Profile5} 
                    Username="Link" 
                    Localidade="SP - São paulo" 
                    postImage="https://picsum.photos/500/700?random=4" qntdCurtidas="10M" 
                    nomeDescricao="Link" 
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque.✔">
                </FeedContent>     
            
                <FeedContent 
                    imageUser={Profile6} 
                    Username="N1k0_TwT" 
                    Localidade="SP - São paulo" 
                    postImage="https://picsum.photos/500/700?random=5" qntdCurtidas="15" 
                    nomeDescricao="Link" 
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque.✨">
                </FeedContent>     
            </div>
        </div>
    )
}