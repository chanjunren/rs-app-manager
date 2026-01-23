import React from 'react';
import { partnerProductsData } from './partner_product_data';
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

import { PartnerProductSectionStyles, PartnerProductCardStyles } from './partner_product_section_style';
import { Grid } from '@material-ui/core';

const PartnerProductSection = () => {
  const sectionClasses = PartnerProductSectionStyles();
  const cardClasses = PartnerProductCardStyles();
  return (
    <div id="products" className={sectionClasses.root}>
      <Typography className={sectionClasses.header} variant="h4" component="h4">
        Smart Environment
      </Typography>
      <Typography className={sectionClasses.description} component="h6">
        Smart devices designed to work with our robots.
      </Typography>
      <Typography className={sectionClasses.contact} variant='h6' color='secondary'>
        Contact us for more information.
      </Typography>
      <Grid container className={sectionClasses.appsContainer}>
        {partnerProductsData.map((partnerProduct, index) => {
          return (
            <Grid
              className={sectionClasses.appCard}
              key={index}
              item
              xs={12}
              sm={6}
              md={6}
            >
              <Card className={cardClasses.root}>
                <CardHeader
                    title={partnerProduct.title}
                    titleTypographyProps={{ variant: 'h6' ,align: 'center'}}
                />

                <Box display="flex" justifyContent="center" mt={1} mb={2}>
                    <img
                        src={partnerProduct.imageSrc}
                        alt={partnerProduct.title}
                        style={{
                        width: 250,
                        height: 'auto',
                        }}
                    />
                </Box>
                <CardContent>{partnerProduct.description}</CardContent>
                {partnerProduct.links && partnerProduct.links.length > 0 && (
                    <Box mt={1}>
                    <Typography variant="body2" color="textSecondary">
                        Learn more:
                    </Typography>

                    {partnerProduct.links.map((link, i) => (
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

export default PartnerProductSection;
