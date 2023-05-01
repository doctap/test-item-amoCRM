import React from 'react';
import { Supplement, type ISupplement } from '../supplement/Supplement';

export interface ISupplementList {
  supplements: readonly ISupplement[]
}

export const SupplementList = (prop: ISupplementList) => {
  return (
    <>
      {prop.supplements.map(s => (
        <Supplement key={s.title} title={s.title} offer={s.offer} />
      ))}
    </>
  );
};
