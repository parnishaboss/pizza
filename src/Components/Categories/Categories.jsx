import React, {useState} from 'react';
import s from './categories.module.scss'

export const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(0)
    const onClickCategory = (index) => {
        setActiveCategory(index)
    }
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]
    return (
        <div className={s.categories}>
            <ul>
                {
                    categories.map((c, index) => {
                        return (
                            <li key={index} onClick={() => onClickCategory(index)}
                                className={activeCategory === index ? s.active : ''}>{c}</li>
                        )
                    })}
            </ul>
        </div>
    )
}

// return (
//     <div className="categories">
//         <ul>
//             {
//                 categories.map((c, index) => {
//                     return (
//                         <li key={index} onClick={() => onClickCategory(index)}
//                             className={activeCategory === index ? 'active' : ''}>{c}</li>
//                     )
//                 })}
//         </ul>
//     </div>
// )
// }