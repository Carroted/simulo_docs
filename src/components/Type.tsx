import React from 'react';

export default function Type({ name }) {
  let href = "/docs/api/intro";
  if (name === 'vec2') {
    href = '/docs/api/vec2';
  }
  if (name === 'object') {
    href = '/docs/api/simuloobject';
  }
  let displayName = name;
  if (name === 'vec2') {
    displayName = 'Vec2';
  }
  if (name === 'object') {
    displayName = 'SimuloObject';
  }
  if (name === 'hash') {
    displayName = 'Component Hash';
  }
  return (
    <a className={"type " + name} href={href}>{displayName}</a>
  );
}