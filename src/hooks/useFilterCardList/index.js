import { useEffect, useState } from "react";

const useFilterCardList = (cardList) => {
  const [cards, setCards] = useState(cardList);
  const [secondData, setSecondData] = useState(cardList);
  const [filterName, setFilterName] = useState("show all");

  useEffect(() => {
    const filteredCards = secondData.filter((item) => item.type === filterName);

    setCards(filteredCards);
  }, [filterName, secondData]);

  useEffect(() => {
    if (filterName === "show all") {
      setSecondData(cardList);
    }
  }, []);

  const removeCardItem = (id) => {
    const filtered = secondData.filter((item) => item.id !== id);

    setSecondData(filtered);
  };

  return {
    filterName,
    setFilterName,
    setSecondData,
    removeCardItem,
    secondList: secondData,
    filteredCardList: cards,
  };
};

export default useFilterCardList;
