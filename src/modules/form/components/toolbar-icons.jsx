import React from 'react';
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaStrikethrough,
  FaCode,
  FaLink,
  FaQuoteRight,
  FaImage,
  FaListOl,
  FaListUl,
  FaTasks,
} from 'react-icons/fa';

const ToolbarIcon = ({ name }) => {
  switch (name) {
    case 'bold':
      return <FaBold />;
    case 'heading':
      return <FaHeading />;
    case 'italic':
      return <FaItalic />;
    case 'strikethrough':
      return <FaStrikethrough />;
    case 'code':
      return <FaCode />;
    case 'link':
      return <FaLink />;
    case 'quote-right':
      return <FaQuoteRight />;
    case 'image':
      return <FaImage />;
    case 'list-ol':
      return <FaListOl />;
    case 'list-ul':
      return <FaListUl />;
    case 'tasks':
      return <FaTasks />;
    default:
      return null;
  }
};

export default ToolbarIcon;
