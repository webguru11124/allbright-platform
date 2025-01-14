import { liteClient as algoliasearch } from "algoliasearch/lite";
import React, { FunctionComponent, ReactElement } from "react";
import { InstantSearch } from "react-instantsearch-core";

import config from "@/config";

interface AlgoliaSearchProps {
  index: string;
  children?: ReactElement;
}

const searchClient = algoliasearch(config.ALGOLIA_SEARCH.APP_ID, config.ALGOLIA_SEARCH.PUBLIC_API_KEY);

const AlgoliaSearch: FunctionComponent<AlgoliaSearchProps> = (props) => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={props.index}>
      {props.children}
    </InstantSearch>
  );
};

export default AlgoliaSearch;
