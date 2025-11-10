import React from 'react';
import {Box, Container} from "@mui/material";
import InfoSection from "@/components/AboutSection/InfoSection";
import CompanySection from "@/components/AboutSection/CompanySection";
import SupportSection from "@/components/AboutSection/SupportSection";
import BrandSectionAbout from "@/components/BrandSectionAbout/BrandSectionAbout";

const About = () => {
    return (
      <>
          <Container>
              <Box pt="100px">
                  <InfoSection />
                  <CompanySection />
                  <SupportSection />
              </Box>
          </Container>
          <BrandSectionAbout />
      </>

    );
};

export default About;