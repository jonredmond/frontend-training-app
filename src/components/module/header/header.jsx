import React from 'react';

import common from '../../../sass/common.scss';
import style from './header.scss';

const Header = ({ createOrders, deleteOrders, username }) => (
  <header className={style.header}>
    <div className={style.headerRow}>
      <div className={common.clear}>
        <h1 className={style.heading}>Trader Desktop</h1>
        <div className={common.floatRight}>
          <span className={style.username}>{username}</span>
          <a className={style.signOut}>Sign Out</a>
        </div>
      </div>
    </div>
    <hr />
    <div className={style.headerRow}>
      <div className={common.clear}>
        <button className={style.actionButton} onClick={createOrders}>
          Trade
        </button>
        <button className={style.actionButton} onClick={deleteOrders}>
          Delete All
        </button>
        <div className={common.floatRight}>
          <button className={`${style.icon} ${style.tableIcon}`} />
          <button className={`${style.icon} ${style.chartIcon}`} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
