import React from "react";
import { ToggleButton, ToggleButtonLine } from './DrawerToggleButtonStyles';

const DrawerToggleButton = ({ onClickHandler }) => (
    <ToggleButton onClick={onClickHandler} aria-label='toggle-button'>
        <ToggleButtonLine />
        <ToggleButtonLine />
        <ToggleButtonLine />
    </ToggleButton>
);

export default DrawerToggleButton;