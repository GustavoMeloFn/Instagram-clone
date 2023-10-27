export default function Perfil(props){
    return(
    <div className="perfilDestaque">
        <div className="baseDestaque">
        <img src={props.destaque} alt="Imagem lado direito" className="destaqueProfile"/>
        <div className="nameUserDestaque">
            <h3>{props.nameUserDestaque}</h3>
        </div>
        </div>
        <div className="followers">
            <div>
                <p>{props.nPublicacoes}</p>
                <p className="publi">Publicações</p>
            </div>
            <div>
                <p>{props.nSeguidores}</p>
                <p className="publi">Seguidores</p>
            </div>
            <div>
                <p>{props.nSeguindo}</p>
                <p className="publi">Seguindo</p>
            </div>
            
        </div>  
    </div>
    )
}