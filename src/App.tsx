import React from 'react';
import './scss/app.scss'
import {Header} from './Components/Header';
import {Categories} from './Components/Categories';
import {Sort} from './Components/Sort';
import {PizzaBlock} from './Components/PizzaBlock';
import {state} from './assets/pizzas'

type PizzaType = {
    id:number,
    imageUrl: string,
    title: string,
    types: number,
    sizes:number,
    price:number,
    category:number,
    rating:number,

}

function App() {
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
                            state.pizzas.map(p => {
                                return (
                                    <PizzaBlock id = {p.id}
                                                imageUrl={p.imageUrl}
                                                title={p.title}
                                                price={p.price}
                                                sizes={p.sizes}
                                                types={p.types}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
