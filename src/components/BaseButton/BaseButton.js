import React from 'react';
import Button from "@mui/material/Button";

import styles from "@/components/BaseButton/BaseButton.module.scss";

const BaseButton = ({ children, ...props }) => {
    return (
        <Button className={styles.baseButton} {...props}>
            <span className={styles.buttonLine}>
            {children}
        </span>
        </Button>
    );
};

export default BaseButton;
