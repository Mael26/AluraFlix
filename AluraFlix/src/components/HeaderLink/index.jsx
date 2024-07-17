import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderLinkEstilizado = styled.div`

    font-size: clamp(0.7rem, 1.042vw, 1.25rem); 
    font-weight: bold;
    padding: 0.85rem;
    color: var(--color-white);
    border-radius: 0.625rem;
    border: 2px solid var(--color-white);
    margin: 0 0.8rem;
    text-decoration: none;
    text-align: center;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9.35rem;

link:hover{
    filter: brightness(1.4);
    color: var(--color-blue-light);
}
activeLink {
    background-color: var(--color-black);
    color: var(--color-blue);
    border: 2px solid var(--color-blue);
    border-radius: 0.625rem;
    box-shadow: inset 0 0 10px 5px var(--color-blue-light);
}
`


const HeaderLink = ({ url, children }) => {
    return (
        <NavLink
        to={url}
            className={({ isActive }) =>
                isActive ? `${HeaderLinkEstilizado} ${HeaderLinkEstilizado.activeLink}` : HeaderLinkEstilizado.link
            }
        >
            {children}
            
        </NavLink>
    );
}

HeaderLink.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default HeaderLink;