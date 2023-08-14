import Search from "src/page/Search/Search";
import UserLayout from "../../components/Layout/UserLayout";
const SearchPage = () => {
    return (
        <UserLayout>
            <div className="card mb-3">
                <div className="card-body">
                    <Search />
                </div>
            </div>
        </UserLayout>
    );
}
export default SearchPage;