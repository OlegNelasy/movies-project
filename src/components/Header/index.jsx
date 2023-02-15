import React from 'react';
import './style.scss';

export default function Header() {
  return (
    <header className='style'>
        <div>
                <p>Movies</p>
        </div>
        <div>
            <select name="user_profile_color_2" required="required">
                <option value="">Выберите значение</option>
                <option value="1">Синий</option>
                <option value="2">Зеленый</option>
                <option value="3">Желтый</option>
                <option value="4">Красный</option>
                <option value="5">Оранжевый</option>
                <option value="6">Черный</option>    
            </select>
        </div>
    </header>
  )
}
