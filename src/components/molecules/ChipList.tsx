import React from 'react';

import { useStyles } from './ChipListStyle';

type Props = { chipList: string[] };

export const ChipList: React.FC<Props> = React.memo(({ chipList }) => {
  const classes = useStyles();

  return (
    <ul className={classes.chipRoot}>
      {chipList.map((data, i) => {
        return (
          <li className={classes.chip} data-testid="chip-element" key={i}>
            {data}
          </li>
        );
      })}
    </ul>
  );
});
