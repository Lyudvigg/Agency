import React, { useState } from "react";
import classNames from "classnames";

import { useToggle } from "../../hooks";
import { Button } from "../../components";
import { filterMenuList } from "../../utils";

import "./MenuFilter.scss";

const MenuFilter = ({ setFilterName, filterName }) => {
  const [isOpen, toggleIsOpen] = useToggle();
  const [activeItem, setActiveItem] = useState(0);

  const updateFilterHandler = (index, name) => {
    setFilterName(name);
    setActiveItem(index);
    toggleIsOpen();
  };

  const renderFilterDescMenu = filterMenuList.map(({ id, name }, index) => {
    const buttonClasses = classNames("filterMenu__btn", {
      active: filterName === name,
    });

    return (
      <Button
        key={id}
        className={buttonClasses}
        onClick={() => updateFilterHandler(index, name)}
      >
        {name}
      </Button>
    );
  });

  return (
    <div className="filterMenu">
      <div className="container">
        <div className="filterMenu__block">{renderFilterDescMenu}</div>
        <div className="filterMenu__dropdown">
          <div onClick={toggleIsOpen} className="filterMenu__dropdown_header">
            <div className="filterMenu__dropdown_header_content">
              <span className="filterMenu__dropdown__title">
                {filterMenuList[activeItem].name}
              </span>
              <img
                alt="Logo"
                src="/assets/Triangle.svg"
                style={{ transform: isOpen ? "rotate(180deg)" : "" }}
              />
            </div>
          </div>

          {isOpen && (
            <div className="filterMenu__dropdown_content">
              {renderFilterDescMenu}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;
