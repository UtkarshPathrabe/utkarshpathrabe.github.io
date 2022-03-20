import Gallery from "react-photo-gallery";
import { SectionText } from '../../styles/GlobalComponents';
import { paintings } from '../../constants/paintings';

const Paintings = () => {
    return (
        <>
            <SectionText>Some of my paintings...</SectionText>
            <Gallery photos={paintings} />
        </>
    );
};

export default Paintings;