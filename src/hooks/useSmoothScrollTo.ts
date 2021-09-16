import React from 'react';

import { scroller, animateScroll } from 'react-scroll';

const useSmoothScrollTo = (anchorOrPosition: number | string, options = {}) => {
  const opts = { smooth: 'easeInOutQuart', ...options };

  const handleScrollTo = React.useCallback(() => {
    switch (typeof anchorOrPosition) {
      case 'number':
      case 'bigint':
        animateScroll.scrollTo(anchorOrPosition, opts);
        break;
      case 'string':
        scroller.scrollTo(anchorOrPosition, opts);
        break;
      default:
        break;
    }
  }, [anchorOrPosition, opts]);

  return handleScrollTo;
};

export default useSmoothScrollTo;
