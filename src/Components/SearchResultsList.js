<<<<<<< HEAD
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
            return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};

=======
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
            return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};

>>>>>>> 7a8630f9d7e81b4c0ca9cce5f916758f7145fc30
export default SearchResultsList