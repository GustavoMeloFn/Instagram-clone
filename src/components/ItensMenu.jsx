export default function ItemMenu(props){
    return(
        <>  
            <nav>
                <li>
                    <span className="icons">{props.icone}</span>
                    <span className="text">{props.texto}</span>
                </li>
            </nav>
        </>
    )
}