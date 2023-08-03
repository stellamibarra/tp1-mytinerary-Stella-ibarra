import Anchor from "./Anchor"

export default function Nav(){
  
    let data = 
[
{href:"inicio.html",texto:'inicio'},
{href:"nosotros.html",texto:'nosotros'}

]

    return( 
        <nav>
            {data.map(each => <Anchor href={each.href} texto ={each.contenido}/>)}
        </nav>


    )
        
    
}