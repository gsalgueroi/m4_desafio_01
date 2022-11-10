import '../assets/css/css_base.css';
import Badge from 'react-bootstrap/Badge';

function Footer({atb: {desc }}) {
  return (
    <div className='display_flex_row'>
      <h2><Badge bg="secondary">{desc}</Badge> </h2>
    </div>
  );
}

export default Footer;
