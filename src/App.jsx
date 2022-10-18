import React, {useEffect, useState} from 'react';
import './scss/app.scss'
import {Header} from './Components/Header';
import {Categories} from './Components/Categories';
import {Sort} from './Components/Sort';
import {PizzaBlock} from './Components/PizzaBlock';
import {state} from './assets/pizzas'
import {Skeleton} from "./Components/Skeleton";


function App() {
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
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
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
            </div>
        </div>
    );
}

export default App;


state.pizzas.map(p => {
    return (
        <PizzaBlock key={p.id}
                    imageUrl={p.imageUrl}
                    title={p.title}
                    price={p.price}
                    sizes={p.sizes}
                    types={p.types}
        />
    )
})