import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <div className={css.filter}>
        <label htmlFor="filter" className={css.label__filter}>
          Find contact by name
        </label>
        <input
          className={css.filter__input}
          type="text"
          id="filter"
          onChange={handleChange}
        />
      </div>
    </>
  );
};
