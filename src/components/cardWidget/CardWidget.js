/*########################################
                    Importaciones
##########################################*/
import './CardWidget.css';
import  {RiShoppingCart2Fill}  from "react-icons/ri";


/*########################################
                    Logica
##########################################*/
function CardWidget(props) {
  return (
    <h4><RiShoppingCart2Fill/>{props.cantidad}</h4>
  );
}

/*########################################
                    Exportaciones
##########################################*/
export default CardWidget;
