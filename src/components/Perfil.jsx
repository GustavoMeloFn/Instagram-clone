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
            <p>{props.nPublicacoes} publicações</p>
            <p>{props.nSeguidores} Seguidores</p>
            <p>{props.nSeguindo} Seguindo</p>
        </div>
    </div>
    )
}