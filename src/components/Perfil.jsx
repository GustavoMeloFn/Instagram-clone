export default function Perfil(props){
    <div className="perfilDestaque">
        <img src={props.destaque}/>
        <div className="followers">
            <p>{props.nPublicacoes} publicações</p>
            <p>{props.nSeguidores} Seguidores</p>
            <p>{props.nSeguindo} Seguindo</p>
        </div>
    </div>

}