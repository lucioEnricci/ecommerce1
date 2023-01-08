/*########################################
                    Importaciones
##########################################*/

//Modulos
//Estilos
import './ItemListContainer.css';

//Componentes
//import Hooks from '../hooks/Hooks';
import ItemCount from '../itemCount/ItemCount.js';
//Core


/*########################################
                    Logica
##########################################*/

const ItemListContainer = () => {
    
 


  return (
    <div>
      <ItemCount stock = "15"/>
    </div>
  );
}

/*########################################
                    Exportaciones
##########################################*/
export default ItemListContainer;
