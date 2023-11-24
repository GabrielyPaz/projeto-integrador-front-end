import styles from "./ReservaHorario.module.css"
import { FaRegCheckCircle } from "react-icons/fa";

export default function Horario() {

  return (

    <form className={styles.reservaHorario}>
      <div className={styles.horaChegadaFormulario}>
        <h1 className={styles.horaTitulo}> Seu horário de chegada </h1>

        <div className={styles.horarioFormPrinc}>
          <div className={styles.horaCheck}>
            <FaRegCheckCircle />
            <p> Seu carro estará pronto para check-in entre 08h00 e 20h00</p>
          </div>

          <label className={styles.horaLabel}>
            {" "}
            Indique a sua hora prevista de chegada{" "}
          </label>

          <select name="" id="" className={styles.horaSelect}>
            <option value="" disabled hidden selected>
              {" "}
              Selecione a sua hora de chegada{" "}
            </option>
          </select>
        </div>
      </div>
    </form>
  );
}