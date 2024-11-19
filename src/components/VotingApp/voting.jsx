import styles from "./VotingApp.module.css";
import Formulario from "../CandidateForm/candidato";
import Lista from "../CandidateList/lista"
import { useState } from "react";


function voting (){
    const [candidatos, setCandidatos] = useState([]);
    const [votos, setVotos] = useState(0);
    // const [vencedores, setVencedor] = useState([])

    // const createVencedor = (candidatos) =>{
    //     let vencedor = candidatos[0]
    //     const cont = 0
    //     while(vencedor!=cont.length){
    //         if(candidatos[cont]>vencedor){
    //             vencedor = candidatos[cont]
    //         }
    //     }
    //     setVencedor([...vencedores, vencedor])
    // }
    const createCandidato = (nome, quantidade) => {
      const newCandidato = {
        id: candidatos.length + 1,
        nome,
        quantidade,
      };
    //   createVencedor(candidatos)
      setCandidatos([...candidatos, newCandidato]);
    };
    const addVoto = (id) => {
        setCandidatos(
          candidatos.map((candidato) =>
            candidato.id === id
              ? { ...candidato, quantidade: Number(candidato.quantidade) + 1 }
              : candidato
          )
        );
    
        const candidato = candidatos.find((candidato) => candidato.id === id);
        if (candidato) {
          setVotos((prevVotos) => Number(prevVotos) + Number(candidato.quantidade));
        }
        // createVencedor(candidatos)
    };

    const removeCandidato = (id) => {
        setCandidatos(candidatos.filter((candidato) => candidato.id != id));
      
          const candidato = candidatos.find((candidato) => candidato.id === id);
          if (candidato) {
            setVotos((prevVotos) => Number(prevVotos) - Number(candidato.quantidade));
          }
        //   createVencedor(candidatos)
      };
    
    
    return(
        <>
        <div className={styles.appContainer}>
            <p className={styles.header}>App Votos</p>
            <Formulario addFormulario={createCandidato}></Formulario>
            <p className={styles.header}>Candidatos</p>
            <Lista lista={candidatos} add={addVoto} remove={removeCandidato}></Lista>
            <p className={styles.header}>Votos Totais {votos}</p>
            <p className={styles.header}>Candidato Vencedor:</p>
        </div>
        </>
    )

}

export default voting
