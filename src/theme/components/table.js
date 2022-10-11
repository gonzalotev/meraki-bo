const table = {
  baseStyle: {
    thead: {
      background: 'pink.300',
      height: '40px',
      tr: {
        th: {
          color: 'white',
          fontSize: '14px',
        },
      },
    },
    tbody: {
      tr: {
        '&:last-child': {
          td: {
            borderBottom: '1px black solid',
          },
        },
      },
    },
  },
};

export default table;
