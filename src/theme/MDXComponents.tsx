import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Type from '../components/Type';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Type>" tag to our Type component
    // `Type` will receive all props that were passed to `<Type>` in MDX
    Type,
};