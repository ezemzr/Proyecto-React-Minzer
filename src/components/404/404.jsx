import React from 'react';
import { createStyles, Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import image from './Mi proyecto (2).png';
import { Link } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

const Error404 = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
        <Image src={image}/>
        <div>
          <Title className={classes.title}>Algo no esta bien...</Title>
          <Text color="dimmed" size="lg">
            La página que intenta abrir no existe. Es posible que haya escrito mal la dirección o el
            la página se ha movido a otra URL. Si cree que se trata de un error, póngase en contacto con el soporte.
          </Text>
          <Link  to={"/"} >
            <Button variant="outline" size="md" mt="xl" className={classes.control}>
            Volver a la pagina principal
          </Button>
          </Link>
          
        </div>
        <Image src={image.src} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
};

export default Error404;
