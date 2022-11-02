import {Categories} from "../Components/Categories/Categories";
import {Sort} from "../Components/Sort/Sort";
import {Skeleton} from "../Components/Skeleton";
import {PizzaBlock} from "../Components/PizzaBlock/PizzaBlock";
import React, {useEffect, useState} from 'react';
import s from './Home.module.scss'

export const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://634ebfc8f34e1ed8269547fd.mockapi.io/items')
            .then((res) => res.json())
            .then((json) => {
                setItems(json)
                setIsLoading(false)
            })
    }, [])
    return (
        <div className={s.container}>
            <div className={s.container__top}>
                <Categories/>
                <Sort/>
            </div>
            <h2 className={s.content__title}>Все пиццы</h2>
            <div className={s.content__items}>
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : items.map((p => <PizzaBlock key={p.id} {...p}/>))
                }
            </div>
        </div>
    )
}


// <div className="container">
//     <div className="content__top">
//         <Categories/>
//         <Sort/>
//     </div>
//     <h2 className="content__title">Все пиццы</h2>
//     <div className="content__items">
//         {
//             isLoading
//                 ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
//                 : items.map((p => <PizzaBlock key={p.id} {...p}/>))
//         }
//     </div>
// </div>
