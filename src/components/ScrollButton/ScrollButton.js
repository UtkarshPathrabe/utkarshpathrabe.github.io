import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './ScrollButtonStyles';
  
const ScrollButton = () =>{
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
    const scrollToTop = () =>{
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0, 
                behavior: 'auto'
            });
        }
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', toggleVisible);
    }
    return (
        <Button visible={visible}>
            <FaArrowCircleUp onClick={scrollToTop} />
        </Button>
    );
}
  
export default ScrollButton;