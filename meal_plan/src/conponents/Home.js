import MenuForm from "./MenuForm";
import MenuList from "./MenuList";
import MenuSearch from "./MenuSearch";

function Home () {
    return (
        <div>
            <div>Welcome</div>
            <MenuSearch />
            <MenuForm />
            <MenuList />
        </div>
    )
}

export default Home;