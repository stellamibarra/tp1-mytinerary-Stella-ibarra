import Anchor from "../Anchor/Index"
export default function Nav(){
  
    let data = 
[
{href:"inicio.html",texto:'Inicio'},
{href:"contactos.html",texto:'Contactos'},
{href:"about.html",texto:'About'},
{href:"info.html",texto:'Info'},
{href:"registro.html",texto:"Registro"}
]
    return( 
        
        <nav>
            {data.map((each,key) => <Anchor key={key} href={each.href} texto={each.texto}/>)}     
        </nav>

    )
}