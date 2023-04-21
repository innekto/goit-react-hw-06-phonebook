import { FilterWrap, FilterInput, FilterLabel } from 'components/FilterField/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsValue, filterChange } from 'redux/phonebookSlice';

export const Filter = () => {

    const dispatch = useDispatch();
    const { filter } = useSelector(getContactsValue);

    const onFilterChange = (e) => {
        dispatch(filterChange(e.currentTarget.value));
        
  };
    return (
        <FilterWrap>
            <FilterLabel htmlFor="text">Find contacts by name</FilterLabel>
             <FilterInput
                type="text"
                name="filter"
                value={filter}
                onChange={onFilterChange}
            />
        </FilterWrap>

    );
    
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired,
// };