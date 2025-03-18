import React from 'react';

export default function Type({ name }) {
  let href = "/api/intro";
  if (name === 'vec2') {
    href = '/api/Vec2';
  }
  if (name === 'object') {
    href = '/api/Object';
  }
  if (name === 'attachment') {
    href = '/api/Attachment';
  }
  if (name === 'hinge') {
    href = '/api/joints/Hinge';
  }
  let displayName = name;
  if (name === 'vec2') {
    displayName = 'Vec2';
  }
  if (name === 'object') {
    displayName = 'Object';
  }
  if (name === 'attachment') {
    displayName = 'Attachment';
  }
  if (name === 'hash') {
    displayName = 'Component Hash';
  }
  if (name === 'hinge') {
    displayName = 'Hinge';
  }
  return (
    <a className={"type " + name} href={href}>{displayName}</a>
  );
}