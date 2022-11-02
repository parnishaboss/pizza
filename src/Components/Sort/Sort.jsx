import React, {useState} from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import s from './sort.module.scss'

export const Sort = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(0)
    const sortNames = ['популярности', 'цене', 'алфавиту']
    const selectedName = sortNames[selected]
    const onClickSelect = (index) => {
        return  (
            setSelected(index),
            setOpen(false)
        )
    }
    return (
        <div className={s.sort}>
            <div className={s.sort__label}>
                <ArrowDropUpIcon/>
                <b>Сортировка по:</b>
                <span onClick={() => setOpen(!open)}>{selectedName}</span>
            </div>
            {open && (
                <div className={s.sort__popup}>
                    <ul>
                        {
                            sortNames.map((sort, index) => {
                                return (
                                    <li onClick={() => onClickSelect(index)}
                                        key={index}
                                        className={selected === index ? s.active : ''}>{sort}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            )}
        </div>
    )
}

// return (
//     <div className="sort">
//         <div className="sort__label">
//             <ArrowDropUpIcon/>
//             <b>Сортировка по:</b>
//             <span onClick={() => setOpen(!open)}>{selectedName}</span>
//         </div>
//         {open && (
//             <div className="sort__popup">
//                 <ul>
//                     {
//                         sortNames.map((s, index) => {
//                             return (
//                                 <li onClick={() => onClickSelect(index)}
//                                     key={index}
//                                     className={selected === index ? 'active' : ''}>{s}</li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         )}
//     </div>
// )