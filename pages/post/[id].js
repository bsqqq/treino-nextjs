// import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

export default function PostId() {
    const router = useRouter()
    return (
        <>
            <h1 style={{minHeight: '90vh'}}>post acessado: {router.query.id}</h1>
        </>
    )
}