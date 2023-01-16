import { Global } from '@mantine/core';

export const MyGlobalStyles = () => {
  return (
    <Global
      styles={theme => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
        },

        ul: {
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          gap: '12px',
          paddingLeft: 0,
        },
      })}
    />
  );
};
