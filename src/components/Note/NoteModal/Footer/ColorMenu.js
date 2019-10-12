import React from "react";
import styles from "./ColorMenu.module.scss";
import classNames from "classnames";
import { useStoreActions } from "easy-peasy";

import Menu from "../../../Menu/Menu";

const colorValues = [
  "#ffffff",
  "#ff7979",
  "#ff8dbc",
  "#b38cff",
  "#889cff",
  "#97e7ff",
  "#97ffec",
  "#5ae2b0",
  "#f8ff92",
  "#ffcf79",
  "#bbbbbb",
  "#3e3e3e" // needs matching value in .ColorCircleDark:hover styles
];

function ColorCircle({ color, isActive }) {
  const isDarkColor = color === "#3e3e3e";
  const isLightColor = color === "#ffffff";

  const joinedClassNames = classNames(
    styles.ColorCircle,
    isActive && styles.ColorCircleActive,
    isDarkColor && styles.ColorCircleDark,
    isLightColor && styles.ColorCircleLight
  );

  // wrapping <span> required for <i> because FontAwesome does DOM manipulations
  // causing React to throw an error with conditional rendering
  return (
    <div className={joinedClassNames} style={{ backgroundColor: color }}>
      {isActive && (
        <span>
          <i className="fas fa-check"></i>
        </span>
      )}
    </div>
  );
}

function ColorMenu({ show, close, note, openedBy }) {
  const setColor = useStoreActions(actions => actions.notes.setColor);

  const items = colorValues.map(function(colorValue, index) {
    const isNoteColor = note.color === colorValue;
    return {
      key: index,
      content: <ColorCircle color={colorValue} isActive={isNoteColor} />,
      onClick: e => {
        e.stopPropagation();
        setColor({ colorValue, id: note.id });
      },
      className: styles.MenuItemWrapper
    };
  });

  return (
    <Menu
      show={show}
      close={close}
      items={items}
      className={styles.ColorMenu}
      openedBy={openedBy}
    />
  );
}

export default ColorMenu;
