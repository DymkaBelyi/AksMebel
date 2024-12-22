import React from 'react';
import "./categories.css"

function Categories ({ category, onClickCategory }) {
    const categories = ['Вся мебель', 'Мягкая мебель', 'Стулья и Кресла', 'Столы', 'Сад', 'Посуда и Сервировка'];
    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => (
                  <li
                    key={i}
                    onClick={() => onClickCategory(i)}
                    className={category === i ? 'active' : ''}>
                    {categoryName}
                  </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;