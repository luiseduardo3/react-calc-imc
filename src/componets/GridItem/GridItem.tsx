import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level;
};

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.cor }}>
            <div className={styles.gridIcone}>
                {/* {item.icone === 'up' && <img src={upImage} alt="" width="30" />}
                {item.icone === 'down' && <img src={downImage} alt="" width="30" />} */}

                <img src={item.icone === 'up' ? upImage : downImage} alt="" width="30" />
            </div>
            <div className={styles.gridTitulo}>{item.titulo}</div>

                {item.seuImc && 
                    <div className={styles.seuImc}>Seu IMC é de {item.seuImc} kg/m²</div>
                }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}