import React from 'react';
import pizzaLogo from '../../assets/img/pizza-logo.svg'
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import s from './header.module.scss'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <Link to="/">
                    <div className={s.header__logo}>
                        <img width="38" src={pizzaLogo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <div>
                    <Link to='/cart' className={s.header__button}>
                        <span>520 ₽</span>
                        <div className="button__delimiter"/>
                            <ShoppingCartIcon/>
                        <span>3</span>
                    </Link>
                    <Link to='/cart' className="button button--cart">
                        <span>520 ₽</span>
                        <div className="button__delimiter"/>
                            <ShoppingCartIcon/>
                        <span>3</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

// className={`${sContainer.container} ${s.skillsContainer}`}

// export const Header = () => {
//     return (
//         <div className="header">
//             <div className="container">
//                 <Link to="/">
//                     <div className="header__logo">
//                         <img width="38" src={pizzaLogo} alt="Pizza logo"/>
//                         <div>
//                             <h1>React Pizza</h1>
//                             <p>самая вкусная пицца во вселенной</p>
//                         </div>
//                     </div>
//                 </Link>
//                 <div>
//                     <Link to='/cart' className="button button--cart">
//                         <span>520 ₽</span>
//                         <div className="button__delimiter"/>
//                         <ShoppingCartIcon/>
//                         <span>3</span>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }