import styles from "./CandidateForm.module.css";
import { useState } from "react";

function CandidatoForm ({addFormulario}){
    const [nome, setNome] = useState("");
    const [quant, setQuant] = useState(0);
    return(
    <>
       <div className={styles.form}>
            <input 
                type="text" 
                className={styles.input} 
                placeholder="Digite o nome do candidato"
                onChange={(e) => setNome(e.target.value)}
            />
                        
            <button 
                onClick={() => addFormulario(nome, quant)}
                className={styles.button}
            >
                Adicionar Candidato
            </button>

           
        </div>
    </>)
}

export default CandidatoForm