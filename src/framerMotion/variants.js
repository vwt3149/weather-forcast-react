export const spinnerVariant = {
  init: {
    y: '-150%',
  },
  current: {
    y: '100%',
  },
  exit: {
    y: '-150vh',
  },
};
export const parentVariant = {
  init: {
    x: '-100vw',
  },
  current: {
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  // exit: {
  //   x: '200vw',
  //   transition: {
  //     duration: 0.5,
  //   }, // opacity: 0,
  // },
};
export const containerVariant = {
  //in use
  init: {
    opacity: 0.2,
  },
  current: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
    exit: {},
  },
};

export const containerClickVariant = {
  tap: {
    scale: 1.05,
    textShadow: ' 0px 0px 8px #fff',
    boxShadow: '0px 0px 8px #fff',
    transition: {
      yoyo: 9,
      duration: 0.6,
    },
  },
};

export const listItemVariant = {
  init: {
    y: '80px',
    opacity: 0.3,
  },
  current: {
    y: '0px',
    opacity: 1,
  },
};

export const onTapContainer = {
  y: '-30px',
};

export const onHoverContainer = {
  y: '-10px',
};
