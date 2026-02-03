import React from 'react';
import { useEffect, useRef } from 'react';
import { newProductsData } from './new_product_data';
// import './rs_applications.css';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';

import { NewProductSectionStyles, NewProductCardStyles } from './new_product_section_style';
import { Grid } from '@material-ui/core';

const NewProductSection = () => {
  const sectionClasses = NewProductSectionStyles();
  const cardClasses = NewProductCardStyles();
  const cardRefs = useRef([]);

  const syncHeights = () => {
    cardRefs.current.forEach(el => {
        if (el) el.style.height = 'auto';
    });

    const maxHeight = Math.max(
        ...cardRefs.current.map(el => (el && el.offsetHeight) || 0)
    );

    // Safety cap (prevents runaway heights)
    if (maxHeight > 1200) return;

    cardRefs.current.forEach(el => {
        if (el) el.style.height = maxHeight + 'px';
    });
    };

    useEffect(() => {
    const observers = cardRefs.current.map(card => {
        if (!card) return null;
        const observer = new ResizeObserver(syncHeights);
        observer.observe(card);
        return observer;
    });

    window.addEventListener('resize', syncHeights);

    return () => {
        window.removeEventListener('resize', syncHeights);
        observers.forEach(obs => obs && obs.disconnect());
    };
    }, [newProductsData]);

  return (
    <div id="products" className={sectionClasses.root}>
      <Typography className={sectionClasses.header} variant="h4" component="h4">
        Our Products
      </Typography>
      {/* <Typography className={sectionClasses.description} component="h6">
        Smart devices designed to work with our robots.
      </Typography> */}
      <Typography className={sectionClasses.contact} variant='h6' color='secondary'>
        Contact us for more information.
      </Typography> 
      <Grid container className={sectionClasses.appsContainer} alignItems="stretch">
        {newProductsData.map((newProduct, index) => {
          return (
            <Grid
              className={sectionClasses.appCard}
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: 'flex' }}
            >
              <Card 
                ref={el => (cardRefs.current[index] = el)}
                className={cardClasses.root}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',   // 👈 critical
                }}>
                <CardHeader
                    title={newProduct.title}
                    titleTypographyProps={{ variant: 'h6' ,align: 'center'}}
                />

                <Box display="flex" justifyContent="center" mt={1} mb={2}>
                    <img
                        src={newProduct.imageSrc}
                        alt={newProduct.title}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                        }}
                    />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>{newProduct.description}</CardContent>
                {newProduct.links && newProduct.links.length > 0 && (
                    <Box mt={1} sx={{ marginBottom: 'auto' }}>
                        <Typography variant="body2" color="textSecondary">
                            Learn more:
                        </Typography>

                        {newProduct.links.map((link, i) => (
                            <Box key={i}>
                                <Link
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="hover"
                                    variant="body2"
                                    display="block"
                                    style={{ color: '#01bf71' }} // default link color
                                    onMouseEnter={e => (e.target.style.color = '#0c7634ff')} // hover color
                                    onMouseLeave={e => (e.target.style.color = '#01bf71')}
                                >
                                {link.label}
                                </Link>
                            </Box>
                        ))}
                    </Box>
                )}
                {/* <CardActions>
                  <Button
                    href={app.url}
                    target="_blank"
                    color="secondary"
                    variant="outlined"
                  >
                    View
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default NewProductSection;
