function RecipeSearch ({ value, onChange }) {
    return (
        <div class="panel-block">
            <p class="control has-icons-left">
                <input 
                    class="input" 
                    type="text" 
                    placeholder="Search"
                    value={value}
                    onChange={onChange}
                />
                <span class="icon is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </span>
            </p>
        </div>
    )
}

export default RecipeSearch;