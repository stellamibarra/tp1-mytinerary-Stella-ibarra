import React from 'react'
import Article from '../Article/Index'

function Main() {
    let data =[
        {titulo:'Aticulo 1',texto:'khbdkhbf wrariuw wirwgv wru r rvu urhfu v rvuhr voouh rvuohrv'},
        {titulo:'Aticulo 2',texto:'khbdkhbf wrariuw wirwgv wru r rvu urhfu v rvuhr voouh rvuohrv'},
        {titulo:'Aticulo 3',texto:'khbdkhbf wrariuw wirwgv wru r rvu urhfu v rvuhr voouh rvuohrv'},
        {titulo:'Aticulo 4',texto:'khbdkhbf wrariuw wirwgv wru r rvu urhfu v rvuhr voouh rvuohrv'},
        {titulo:'Aticulo 5',texto:'khbdkhbf wrariuw wirwgv wru r rvu urhfu v rvuhr voouh rvuohrv'},
        {titulo:'Aticulo 6',texto:'khbdkhbf wrariuw wirwgv wru r rvu urhfu v rvuhr voouh rvuohrv'},
        {titulo:'Aticulo 7',texto:'khbdkhbf wrariuw wir'},
    ]
  return (
    <main>
        {data.map((each,key) => <Article key={key} titulo={each.titulo} texto={each.texto}/>)}
    </main>
    )
}
export default  Main