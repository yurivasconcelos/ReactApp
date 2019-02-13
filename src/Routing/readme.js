yarn add react-router-dom

import {BrowserRouter as Router, Route} from 'react-router-dom'

<BrowserRouter>
  <Route path="/" component={myComponent}>
<BrowserRouter>


by default router will return all components that match the user url.
Example:
myapp.com/route1

will match all
/route1
/:id
/:id/:another



Switch - O Switch é usado para renderizar apenas um component, o primeiro que encontrar.
Isso evita quando temos duas rotas tipo, /post e /:id   
entao quando o usuario ir para url /3, renderizar ambos components das rotas /post e /:id, pois satisfaz as duas condicoes

Ordem: 
As rotas seguem a ordem ou seja, a primeira que encontrar vai ser a retornada.

Rotas desconhecidas 
Colocar ela na ultima linha, pois caso nenhuma outra rota entre, essa sempre entra
<Route render={() > <h1>not found <h1> />


Link vs NavLink 
O navlink te da mais opcoes, por exemplo especificar a classe active para posteriormente estilizar o link..
activeStyle={{...}}
activeClassName=``
pathName=""
hash="#section1"
search="?isvisible=true"

A gente pode usar ambos como um wrapper de qualquer coisa, por exemplo de um botao. 

<Link to="">
   <botao/>
<Link/>


Navigate programmatily 
this.props.history.push("/abc")


Redirect 
tem que importar..
<Redirect from="/" to="/login">

mesma coisa que o history.push.. 

Reditect condicional
Usando o redirect dentro do metodo render.. 
sempre que o metodo render acha um component redirect, ele vai redirecionar automaticamente. Entao a gente pode usar isso com condicionamento e redirecionar caso a condicao seja verdadeira


{istrue && <Redirect to="/login">


Route Guard (ver se ta autenticado/eh admin por exemplo)

{isAdmin && <Route path="">}

ou, dentro do render do component checar se o usuario eh admin, ou trm permissao e dar um redirect ou history.push("/naoautorizado")


Lazy routes . 
Só pega o conteúdo do component quando a rota for acessada e nao upfront. Isso nos salva de ter que carregar tudo no primeiro request. Digamos que a gente tenha uma rota que nem sempre é usada, é melhor deixar ela para ser loaded só quando o usuario acessar a rota.

Antes era feito via hoc.

A partir do react 16 podemos usar React Suspense e react.lazy


BrowserRoute basename="/my-app">
é usado no caso de o seu app estiver no servidor em um path diferente.
Poe exemplo 
myexample.com/my-app