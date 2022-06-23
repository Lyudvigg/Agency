import React, { useState, useMemo, useCallback } from "react";
import shortid from "shortid";
import classNames from "classnames";

import { useEventListener } from "../../hooks";

import { cardList as initialCardList } from "../../utils";

import Button from "../Button";

import "./Cards.scss";

const Cards = ({
  cardList,
  filterName,
  secondList,
  setSecondData,
  removeCardItem,
}) => {
  const currentTab = filterName === "show all" ? secondList : cardList;

  const [activeCard, setActiveCard] = useState(null);

  const renderCards = useMemo(
    () =>
      currentTab.map((item) => {
        const cardClasses = classNames("card", {
          active: activeCard === item.id,
        });

        return (
          <div
            key={item.id}
            className={cardClasses}
            onClick={() => setActiveCard(item.id)}
          >
            <img
              src={item.image}
              className="card__img"
              alt="The background is not available"
            />
            <div className="card__content">
              <Button className="card__type">{item.type}</Button>
              <h4 className="card__name">{item.name}</h4>
            </div>
          </div>
        );
      }),
    [activeCard, currentTab]
  );

  useEventListener("keydown", (event) => {
    const removeEventKeys = ["Backspace", "Delete"];

    if (removeEventKeys.includes(event.key)) {
      removeCardItem(activeCard);
    }
  });

  const handleAddMore = useCallback(() => {
    const data = initialCardList.map((item) => ({
      ...item,
      id: shortid.generate(),
      name: `${item.name} ${shortid.generate()}`,
    }));

    const modifiedData = [...currentTab, ...data];

    setSecondData(modifiedData);
  }, [currentTab, setSecondData]);

  return (
    <div className="card__main__block">
      <div className="card__block">{renderCards}</div>

      <Button onClick={handleAddMore} className="load__btn">
        Load more
      </Button>
    </div>
  );
};

export default Cards;
