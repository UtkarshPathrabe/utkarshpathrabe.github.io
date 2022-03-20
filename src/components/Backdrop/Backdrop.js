import React from "react";
import { BackdropContainer } from './BackdropStyles';

const Backdrop = ({ onClickHandler }) => (
    <BackdropContainer onClick={onClickHandler} />
);

export default Backdrop;