import styles from "./CandidateList.module.css";

function lista ({lista, add, remove}){
    return(
        <>
        <div className={styles.listContainer}>
            <ul className={styles.list}>
                {lista.map((item,index) =>(
                    <>
                    <li className={styles.listItem}>
                        <p>Nome: {item.nome}</p>
                        <p>Quantidade de votos: {item.quantidade}</p>
                        <button onClick= {() => add(item.id)} className={styles.voteButton}>Votar</button>
                        <button onClick= {() => remove(item.id)} className={styles.deleteButton}>Remover Candidato</button>
                    </li>
                    </>
                )
            
            )}
            </ul>
        </div>
        </>
    )
}

export default lista