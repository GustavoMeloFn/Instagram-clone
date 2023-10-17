export default function Story(props){
    return(
        <div className="storyFeed">
            <div className="fundoImageUser">
                <img className="profilePic" src={props.image} alt={props.titulo}/>
            </div>
            <p>{props.nome}</p>
        </div>
    )
}