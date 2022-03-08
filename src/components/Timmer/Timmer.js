import styles from './Timmer.module.scss'

const Timmer = props => {

    return (<div className={styles.timer}>
        <br></br>
        <span>{("0" + Math.floor((props.minis / 60000) % 60)).slice(-2)}:{("0" + Math.floor((props.minis / 1000) % 60)).slice(-2)}.{("0" + ((props.minis / 10) % 100)).slice(-2)}</span>
    </div>)




}

export default Timmer;