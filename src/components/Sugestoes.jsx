export default function Sugestoes(props){
    return(
        <div className="sugestoes">
            <div className="containerSugestoes">
                <div className="perfilSugestoes">
                    <img src={props.sugeridoImage} alt="Peril Sugerido" className="userImageSugestoes"/>
                    <div className="nomePerfilSugerido">
                        <h4>{props.nomePerfilSugerido}</h4>
                        <p>{props.condicao}</p>
                    </div>
                </div>
                <p className="btnSeguir">seguir</p>
            </div>
        </div>
    )    
}