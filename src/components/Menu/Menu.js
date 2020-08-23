import React, { useState, useEffect, useRef } from 'react';
import styles from './Menu.module.css';
import classNames from 'classnames';

import MenuItem from './MenuItem';

function Menu({ show, close, items, className, style, openedBy }) {
  // console.log("<Menu> - show: " + show);
  if (!show) return null;

  return (
    <MenuContent
      close={close}
      items={items}
      className={className}
      style={style}
      openedBy={openedBy}
    />
  );
}

function MenuContent({ close, items, className, style, openedBy }) {
  const menuRef = useRef(null);

  useOuterClick(menuRef, close);
  useWindowResize(true, close);

  const joinedClasses = classNames(styles.Menu, className);

  const margin = 5;
  const [menuStyle, setMenuStyle] = useState({
    ...style,
    marginTop: margin,
    opacity: 0,
  });

  // Check rendered position of menu and adjust if required
  useEffect(
    function() {
      const {
        bottom,
        right,
        height,
        width,
      } = menuRef.current.getBoundingClientRect();
      const spaceToBottom = document.documentElement.clientHeight - bottom;
      const spaceToRight = document.documentElement.clientWidth - right;

      const styles = {};

      if (spaceToBottom < 0) {
        const openedByHeight = openedBy.current.clientHeight;
        styles.marginTop = 0 - height - openedByHeight - margin;
      }

      if (spaceToRight < 0) {
        const openedByWidth = openedBy.current.clientWidth;
        styles.marginLeft = 0 - width - margin + openedByWidth;
      }

      setMenuStyle((prev) => ({ ...prev, opacity: 100, ...styles }));
    },
    [menuRef, openedBy]
  );

  return (
    <div
      ref={menuRef}
      className={joinedClasses}
      style={menuStyle}
      onClick={(e) => e.stopPropagation()}
    >
      {items.map(function(item) {
        return <MenuItem {...item} />;
      })}
    </div>
  );
}

function useOuterClick(innerRef, onOuterClick) {
  useEffect(
    function() {
      console.log('useEffect - outer click');
      if (innerRef.current) {
        console.log('useEffect - outer click - add event listener');
        document.addEventListener('click', handleClick);

        function handleClick(e) {
          if (innerRef.current && !innerRef.current.contains(e.target)) {
            console.log('outer click', innerRef.current, e.target);
            onOuterClick();
          }
        }

        return function cleanup() {
          console.log('cleanup - outer click');
          document.removeEventListener('click', handleClick);
        };
      } else {
        console.log('useEffect - outer click - DO NOTHING');
      }
    },
    [onOuterClick, innerRef]
  );
}

function useWindowResize(show, onWindowResize) {
  useEffect(function() {
    if (show) {
      console.log('useEffect - window resize - add event listener');
      window.addEventListener('resize', handleResize);

      function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
        onWindowResize();
      }

      return function cleanup() {
        console.log('cleanup - window resize');
        window.removeEventListener('resize', handleResize);
      };
    } else {
      console.log('useEffect - window resize - DO NOTHING');
    }
  });
}

export default Menu;
