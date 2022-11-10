import logo from './logo.svg';
import './App.css';
import './assets/css/css_base.css';
import { CardBS } from './component/bs_component_card.jsx';
import Titulo from './component/app_header.jsx';
import Footer from './component/app_footer.jsx';

function App() {
  const desc_img = 'Descripcion random de la foto que pongo solo porque me dice la tarea :D';
  const imgs = [
    { id: 1, name: 'Imagen 01', src: 'https://getwallpapers.com/wallpaper/full/3/e/2/23399.jpg', desc:desc_img },
    { id: 2, name: 'Imagen 02', src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b15d1438705537.5a02dc84b634e.jpg', desc:desc_img },
    { id: 3, name: 'Imagen 03', src: 'https://getwallpapers.com/wallpaper/full/6/4/d/618089.jpg', desc:desc_img },
  ]

  return (
    <>
      <main className="main_grid">
        <header className="box header">
          <div>
            <span style={{ marginBottom: '5px', fontSize: '1.2rem'}}><Titulo atb={{id:1,color:'white'}}></Titulo></span>
          </div>
        </header>
        <section className="box content">
          <div id="list_task" className='display_flex_row'> {
            imgs.map(function(img){
              return <CardBS img={img} />
            })
          }</div>
        </section>
        <header className="box footer">
          <div>
            <span style={{ marginBottom: '5px', fontSize: '1.2rem'}}><Footer atb={{desc:'Imgs WH40K.'}}></Footer></span>
          </div>
        </header>
      </main>
    </>
  );
}

export default App;
