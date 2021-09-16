import React from 'react';
import throttle from 'raf-throttle';

const useWindowOnScroll = (handleWindowScroll, loadOnceOnMount = true) => {
  const internalHandleScroll = React.useMemo(() => {
    return handleWindowScroll ? throttle(handleWindowScroll) : handleWindowScroll;
  }, [handleWindowScroll]);

  React.useEffect(() => {
    if (internalHandleScroll == null) {
      return undefined;
    }

    window.addEventListener('scroll', internalHandleScroll);
    return () => {
      window.removeEventListener('scroll', internalHandleScroll);
      internalHandleScroll.cancel();
    };
  }, [internalHandleScroll]);

  React.useEffect(() => {
    if (loadOnceOnMount) {
      handleWindowScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWindowOnScroll;
