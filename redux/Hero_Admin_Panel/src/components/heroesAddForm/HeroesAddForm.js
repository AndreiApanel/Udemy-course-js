// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {heroCreated} from '../../actions';
import {v4 as uuidv4} from 'uuid';
import {useHttp} from '../../hooks/http.hook';

const HeroesAddForm = () => {
  const [form, setForm] = useState({name: '', description: '', element: ''});
  const dispatch = useDispatch();
  const {request} = useHttp();

  const onInputChange = e => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  };

  const onSubmit = e => {
    e.preventDefault();
    const newHero = {
      id: uuidv4(),
      name: form.name,
      description: form.description,
      element: form.element,
    };
    request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHero))
      .then(() => dispatch(heroCreated(newHero)))
      .catch(err => console.error(err));
    setForm({name: '', description: '', element: ''});
  };
  // get filters from Redux state
  const {filters, filtersLoadingStatus} = useSelector(state => ({
    filters: state.filters || [],
    filtersLoadingStatus: state.filtersLoadingStatus,
  }));

  const renderFilters = (filters, status) => {
    if (status === 'loading') {
      return <option>Загрузка элементов</option>;
    } else if (status === 'error') {
      return <option>Ошибка загрузки</option>;
    }

    if (filters && filters.length > 0) {
      return filters
        .filter(f => f.name !== 'all')
        .map(({name, label}) => (
          <option key={name} value={name}>
            {label}
          </option>
        ));
    }
  };
  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
          value={form.name}
          onChange={onInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          name="description"
          className="form-control"
          id="description"
          placeholder="Что я умею?"
          style={{height: '130px'}}
          value={form.description}
          onChange={onInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          required
          className="form-select"
          id="element"
          name="element"
          value={form.element}
          onChange={onInputChange}>
          <option value="">Я владею элементом...</option>
          {renderFilters(filters, filtersLoadingStatus) || (
            <>
              <option value="fire">Огонь</option>
              <option value="water">Вода</option>
              <option value="wind">Ветер</option>
              <option value="earth">Земля</option>
            </>
          )}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
