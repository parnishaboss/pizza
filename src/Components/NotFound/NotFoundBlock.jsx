import React from 'react';
import s from  './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className={s.mainBlock}>
            <h1>
                <span>Грусть ☹</span>
                <br/>
                Ничего не найдено . . .
            </h1>
            <p className={s.discription}>К сожалению данная страница не доступна в нашем интернет-магазине, приносим свои глубочайшие извинения.</p>
        </div>
    )
}