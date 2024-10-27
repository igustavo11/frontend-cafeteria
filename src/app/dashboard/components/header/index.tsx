"use client"
import Link from 'next/link'
import styles from './styles.module.scss'
import logoImg from "/public/becoffereal.png";
import Image from 'next/image'
import {LogOutIcon} from 'lucide-react'
import {deleteCookie} from 'cookies-next'
import {useRouter} from 'next/navigation'
import {toast} from 'sonner'
export function Header(){
    const router = useRouter();

    async function handleLogout() {
        deleteCookie("session", {path: "/"})
        toast.success("logout feito com sucesso")
        router.replace("/")
        
    }
    return(
        <header className={styles.headerContainer}>

            <div className={styles.headerContent}>

                <Link href="/dashboard">

                  <Image
                    alt="logo cafeteria"
                    src={logoImg}
                    width={180}
                    height={150}
                    priority={true}
                    quality={100}
                    />
                </Link>

                <nav>
                    <Link href="/dashboard/category">
                        Categoria
                    </Link>
                    <Link href="/dashboard/produtos">
                        Produto
                    </Link>

                    <form action={handleLogout}>
                        <button type="submit">
                            <LogOutIcon size={24} color="#000" />
                        </button>
                    </form>
                </nav>

            </div>
            
        </header>
    )
}