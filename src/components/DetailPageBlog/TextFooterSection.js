import React from 'react';
import {Box, Typography} from "@mui/material";
import styles from "@/components/DetailPageBlog/TextFooterSection.module.scss";

const TextFooterSection = () => {
    return (
        <Box component="section" pt="10px">
            <Typography variant="body1" className={styles.textOne} paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.
            </Typography>
            <Typography variant="body1" className={styles.textTwo} paragraph>
                She&apos;d years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light after won&apos;t moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two land of creepeth there second fruitful, waters. Make don&apos;t void years Gathering gathering divide fill.
            </Typography>
        </Box>
    );
};

export default TextFooterSection;