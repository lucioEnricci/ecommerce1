/*########################################
                    Importaciones
##########################################*/
import './CardWidget.css';
import  {BiDonateHeart}  from "react-icons/bi";


/*########################################
                    Logica
##########################################*/
function CardWidget(props) {
  return (
    <h1><BiDonateHeart/>{props.cantidad}</h1>
  );
}

/*########################################
                    Exportaciones
##########################################*/
export default CardWidget;
