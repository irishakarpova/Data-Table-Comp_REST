export const styles = {
  control: styles => ({ ...styles,
    backgroundColor: 'white',
    border: 'none !important',
    borderRadius: ' 0 !important',
    ':hover': {
      border: '1px solid #DA64EA'
    }
  }),
  placeholder: styles => ({ ...styles,
    fontSize: '12px',
    color: '#DA64EA',
    marginLeft: '11px'
  }),
  indicatorSeparator: styles => ({ ...styles,
    background: '#DA64EA'
  }),
  dropdownIndicator: styles => ({ ...styles,
    color: '#DA64EA',
    ':hover': {
      color: '#DA64EA'
    }
  }),
  option: () => ({
    color: '#fff',
    borderRadius: '0',
    backgroundColor: 'rgba(218,100,224,1)',
    fontSize: '14px',
    textAlign: 'left',
    padding: '10px 20px',
    ':hover': {
      backgroundColor: 'white',
      padding: '10px 20px',
      color: 'rgba(218,100,224,1)'
    }
  })
};