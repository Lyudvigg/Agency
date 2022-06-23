import React from "react";

import { cardList } from "./utils";
import { Cards } from "./components";
import { useFilterCardList } from "./hooks";
import { Header, MenuFilter } from "./containers";

import "./App.scss";

const App = () => {
  const {
    filterName,
    secondList,
    setSecondData,
    setFilterName,
    removeCardItem,
    filteredCardList,
  } = useFilterCardList(cardList);

  return (
    <>
      <Header />
      <MenuFilter setFilterName={setFilterName} filterName={filterName} />
      <div className="container">
        <Cards
          secondList={secondList}
          filterName={filterName}
          cardList={filteredCardList}
          setSecondData={setSecondData}
          removeCardItem={removeCardItem}
        />
      </div>
    </>
  );
};

export default App;
