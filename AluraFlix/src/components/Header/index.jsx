import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import styled from "styled-components";
import HeaderLink from "../HeaderLink";

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 2.5rem;
    background-color: var(--color-black);
    border-bottom: 4px solid var(--color-blue);

    a{text-decoration: none}

    section{
        height: auto;
        display: flex;
        align-items: center;
        background-color: var(--color-black);
    }

    nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: var(--color-black);
    }

    img{
        align-self: start;
        width: 90px;
    }
`

const Header = () =>{
    return <HeaderEstilizado>
        <Link to="/">
                <section>
                    <img src={logo} alt="Logo Alura" />
                </section>
            </Link>
        <nav>
            <div>
                <HeaderLink url="./">INICIO</HeaderLink>
                <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink>
            </div>
        </nav>
    </HeaderEstilizado>
}

export default Header;