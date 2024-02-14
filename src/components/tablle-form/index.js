import Checkbox from '../UI/checkbox';
import Button from '../UI/button';
import "./style.css";

const TablleForm = ({
    onCancel, 
    formState, 
    handleSubmit, 
    handleChange,
    handleSearch,
    searchValue
}) => {
   
return (
        <form className='Table-form' onSubmit={handleSubmit}>
            <input type='search' onChange={handleSearch} value={searchValue} className="Table__search-input"/>
            {Object.entries(formState).map(([key, value]) => (
                <Checkbox
                    key={key}
                    checked={value.checked}
                    name={key}
                    label={key}
                    onChange={handleChange}
                    id={value.id}
                />
            ))}
            <div className='Table-form__button-block' >
                <Button variant='light' text='Cancel' onClick={onCancel} />
                <Button variant='primary' text='Continue' type="submit" />
            </div>
        </form>
    );
};

export default TablleForm
