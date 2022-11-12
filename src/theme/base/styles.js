const styles = {
  global: {
    'html, body, #root': {
      height: '100vh',
      width: '100vw',
      padding: 0,
      margin: 0,
    },
    '#main': {
      height: '100%',
    },
    '#content': {
      overflow: 'auto',
      marginTop: '0 !important',
    },
    '.carousel .slide img': {
      maxHeight: '400px',
      width: '100%',
    },
    form: {
      height: '100%',
    },
    '@media print': {
      '#footer, #header': {
        display: 'none',
      },
      'html, body, #root, #content': {
        display: 'block !important',
        position: 'relative !important',
        width: 'auto !important',
        height: 'auto !important',
        overflow: 'visible !important',
      },
      '.print': {
        pageBreakAfter: 'always',
        overflow: 'visible',
        position: 'relative',
      },
    },
  },
};

export default styles;
