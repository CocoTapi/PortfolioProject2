import { useState } from 'react';
import { useSearchARecipeQuery } from '../store';

function RecipeSearch () {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, error, isLoading } = useSearchARecipeQuery();

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div class="panel-block">
            <p class="control has-icons-left">
                <input 
                    class="input" 
                    type="text" 
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <span class="icon is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </span>
            </p>
        </div>
    )
}

export default RecipeSearch;