import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './componets/GridItem'
import * as txt from './Textos';

import { levels, calcularImc, Level } from './helpers/imc';



const App = () => {
  const [campoAltura, setCampoAltura] = useState<number>(0);
  const [campoPeso, setCampoPeso]= useState<number>(0);
  const [paraMostrar, setParaMostrar] = useState<Level | null>(null);

  const handlerCalculeteButton = () => {
    if(campoAltura && campoPeso) {
      setParaMostrar(calcularImc(campoAltura, campoPeso));
    } else {
      alert('digite todos os campos.');
    }
  }

  const handleBackButton = () => {
    setParaMostrar(null);
    setCampoAltura(0);
    setCampoPeso(0);
  }

  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
    <img src={poweredImage} alt="" width={150}/>
      </header>
      <div className={styles.container}>
        <div className={styles.ladoEsquerdo}>
          <h1>{txt.textoTitulo}</h1>
          <p>{txt.textoInfo}</p>

          <input type="number" placeholder='digite a sua altura Ex: 1.5 (em metros)' value={campoAltura > 0 ? campoAltura : ''} onChange={e => setCampoAltura(parseFloat(e.target.value))} disabled={paraMostrar ? true : false}/>
          <input type="number" placeholder='digite o seu peso Ex: 50.3 (em kg)' value={campoPeso > 0 ? campoPeso : ''} onChange={e => setCampoPeso(parseFloat(e.target.value))} disabled={paraMostrar ? true : false}/>

          <button onClick={handlerCalculeteButton} disabled={paraMostrar ? true : false}>Calcular</button>
        </div>
        <div className={styles.ladoDireito}>
          {! paraMostrar &&
          <div className={styles.grid}>
            {levels.map((item, key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {paraMostrar &&
            <div className={styles.direitoGrande}>
              <div className={styles.direitoSeta} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={paraMostrar}/>
            </div> 
          }
        </div>

      </div>
    </div>
  );
}

export default App