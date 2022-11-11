import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import s from './pizzaBlock.module.scss'

export const PizzaBlock = ({price,title,imageUrl,sizes,types}) => {
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setSize] = useState(0)
    const typeNames = ['Тонкое', 'Традиционное']
    return (
        <div className={s.pizzaBlockWrapper}>
            <div className={s.pizza__block}>
                <img
                    className={s.pizza__block__image}
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className={s.pizza__block__title}>{title}</h4>
                <div className={s.pizza__block__selector}>
                    <ul>
                        {
                            types.map(t => {
                                return (<li key={t.id}
                                            onClick={() => setActiveType(t)}
                                            className={activeType === t ? s.active : ''}>{typeNames[t]}</li>)
                            })
                        }
                    </ul>
                    <ul>
                        {
                            sizes.map((size , index) => {
                                return (<li key={s.id}
                                            onClick={() => setSize(index)}
                                            className={activeSize === index ? s.active : ''}>{size} см.</li>)
                            })
                        }
                    </ul>
                </div>
                <div className={s.pizza__block__bottom}>
                    <div className={s.pizza__block__price}>от {price} ₽</div>
                    {/*<button className="button button--outline button--add">*/}
                    {/*    <AddIcon/>*/}
                    {/*    <span>Добавить</span>*/}
                    {/*    <i>2</i>*/}
                    {/*</button>*/}
                    <button className={s.pizza__block__addButton}>
                        <AddIcon/>
                        <span>Добавить</span>
                        <i>2</i>
                    </button>
                </div>

            </div>
        </div>

    )
}