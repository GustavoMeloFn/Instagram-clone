export default function ItemMenu(props){
    return(
        <>  
            <nav>
                <ul className="navegacao">
                    <li>
                        <span className="icons">{props.icone}</span>
                        <span className="text">{props.texto}</span>
                    </li>
                </ul>
            </nav>
        </>
    )
}