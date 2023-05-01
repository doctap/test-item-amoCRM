import React from 'react';
import { Link } from 'react-router-dom';
import type { LinkListType } from '../../../types';

export const LinkList = (prop: LinkListType[]) => {
  return (
    <>
      {prop.map(link => (
        <Link to={link.path} key={link.linkName}>{link.linkName}</Link>
      ))}
    </>
  );
};
