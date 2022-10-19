import {Categories} from "../Components/Categories";
import {Sort} from "../Components/Sort";
import {Skeleton} from "../Components/Skeleton";
import {PizzaBlock} from "../Components/PizzaBlock";
import React, {useEffect, useState} from 'react';

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
        <div>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : items.map((p => <PizzaBlock key={p.id} {...p}/>))
                }
            </div>
        </div>
    )
}
