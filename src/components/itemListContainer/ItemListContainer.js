/*########################################
                    Importaciones
##########################################*/

//Modulos

//Estilos

import './ItemListContainer.css';

//Componentes
import ItemList from '../itemList/ItemList.js';

//import Hooks from '../hooks/Hooks';


//Core


/*########################################
                    Logica
##########################################*/

const ItemListContainer = (props) => {

  return (

    <div>
      <p>{props.greeting}</p>
      <h1>BANNER PUBLICITARIO</h1>
      <ItemList/>
    </div>
  );
}

/*########################################
                    Exportaciones
##########################################*/
export default ItemListContainer;
