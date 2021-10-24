import './App.css';
import Header from './Header';
import logo from './images/landing page/LP-IMG1.png';
import im2 from './images/landing page/LP-IMG2.png';
import tg1 from './images/landing page/TG1.svg';
import tg2 from './images/landing page/TG2.svg';
import tg3 from './images/landing page/TG3.svg';
import com from './images/landing page/com.jpg';
import pie from './images/landing page/pie1.jpg';
import bbva from './images/landing page/LOGObbva.png';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="row">
        
          <img className="f1" src={logo} width="1440" height="713" top="64"/>
          <p className="titulo">
          Bienvenido al reto<br/> Eco-empresa BBVA
            </p>

            <p className="p0">
            En el BBVA nos comprometemos con el medio ambiente, es por ello que junto a nuestros aliados hemos creado el reto Eco-empresa BBVA para todas las empresas que forman parte de la familia BBVA. Buscamos a travez de este reto ayudarlas a implementar cambios graduales orientados a una transformación sostenible.
            </p>
            <div className="pie">
           
            <p className="subpie">
            Empieza el
                cambio ahora
            </p>
            <br/>
            <br/>
            <img className="imPie" src={pie} width="196" height="226" />
            
            <button className="btnHuella" >Calcular huella</button>
            </div>

       
      </div>
      
      <div className = "row">
        <img className="im2" src={im2} width="460" height="468" />
        <button className="btnConocer">Conocer más</button>
          
      </div>
      <div className="dialog1">
         
            <p className="p">
            ¿Qué es la huella de carbono?
            </p>
            
            <br/>
            <br/>
            <p className="p2">
            Las actividades humanas, particularmente nuestro consumo de energía para finalidades como electricidad o transporte, suponen en muchos casos que usemos combustibles fósiles y, al hacerlo, emitimos gases de efecto invernadero como el dióxido de carbono o el metano.
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className="p3">
            La huella de carbono de una empresa es la cantidad de gases de efecto invernadero que emite a la atmósfera.
            </p>
        </div>
        <div className="row">
        <p className="p4">
        ¿Por qué unirte al reto Eco empresa BBVA ?
         </p>
         <div className="tarjeta">
         <img className="tg1" src={tg1} width="183" height="104" />
         <p className="sub1">
         Optimización de recursos
         </p>
         <p className="p5">
         Tomar conciencia sobre el consumo de recursos y el impacto en el ambiente te permitirá reducir tus gastos a corto, mediano y largo plazo.
         </p>
         </div>

         <div className="tarjeta2">
         <img className="tg2" src={tg2} width="183" height="104" />
         <p className="sub2">
         Crecimiento económico
         </p>
         <p className="p6">
         Al optimizar tu consumo, tu empresa podrá redireccionar la inversión en actividades que generen mayor valor a tu empresa.
         </p>
         </div>

         <div className="tarjeta3">
         <img className="tg3" src={tg3} width="183" height="104" />
         <p className="sub3">
         Agente de cambio
         </p>
         <p className="p7">
         Tu empresas trascenderá como un agente de cambio en el entorno implementando medidas para reducir tu huella de carbono. 
         </p>
         </div>

        </div>
        <div className="row">
        <div className="caja1">
        <p >
         Aquí va tu info Misa
         </p>
        </div>
        </div>
        <div className="row">
        <div className="Compromiso"> 
        <p className="tcompro">
        Compromiso de BBVA
         </p>
         <br/>
            <br/>
            <br/>
         <p className="p8">
         Las consecuencias del cambio climático y el compromiso que las administraciones, las empresas y la sociedad en general han adquirido con el medioambiente, han hecho que en los últimos años surjan diferentes términos que ya conforman todo un glosario enmarcado dentro de la sostenibilidad. La huella de carbono es uno de ellos.
         </p>
         <img className="imCompro" src={com} width=" 412" height="468" />
        </div>
        </div>

        <div className = "footer">
        <img className="logbbva" src={bbva} width=" 120" height="38" />
          
      </div>


    </div>
  );
}

export default App;