import { NavBS } from './bs_component_nav.jsx';
import '../assets/css/css_base.css';

function Titulo({atb: {id, color }}) {
  return (
    <div >
        <NavBS></NavBS>
        <h1 className='display_flex_row' id={`img_${id}`} style={{color:color}}>Galeria Imagenes React</h1>
    </div>
  );
}

export default Titulo;
