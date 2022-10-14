import React, {useState} from 'react';

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
        <div className="categories">
            <ul>
                {
                    categories.map((c, index) => {
                        return (
                            <li onClick={() => onClickCategory(index)}
                                className={activeCategory === index ? 'active' : ''}>{c}</li>
                        )
                    })}
            </ul>
        </div>
    )
}