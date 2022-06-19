import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getSearch, IGetSearch } from "../api";

// styled
import {
  Wrapper,
  Loader,
  Title,
  MoviInfo,
  Overview,
  MainMovie,
} from "../styled/MainBanner";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);

  const { data, isLoading } = useQuery<IGetSearch>(
    ["search", keyword],
    () => getSearch(keyword!),
    { enabled: !!keyword }
  );

  console.log(data);

  return (
    <Wrapper>
      {isLoading ? <Loader>로딩중 ...</Loader> : <div>Search</div>}
    </Wrapper>
  );
};

export default Search;
