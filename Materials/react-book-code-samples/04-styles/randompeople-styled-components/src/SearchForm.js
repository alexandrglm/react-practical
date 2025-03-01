import { SearchForm, FormField, SelectField, InputField } from './SearchForm.styles'

function SearchFormComponent (props) {
    const {handleGender, handleCountry, country} = props;
    return (
        <SearchForm>
            <FormField>
                <SelectField onChange={handleGender}>
                        <option value="">Both</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                </SelectField>
            </FormField>
            <FormField>
                <InputField type="text" placeholder="Select country code: us, it, fr,"  
                onChange={handleCountry} value={country} />
            </FormField>
        </SearchForm>
    );
}

export default SearchFormComponent;