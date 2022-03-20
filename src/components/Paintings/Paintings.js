import Gallery from "react-photo-gallery";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { paintings } from '../../constants/paintings';

const Paintings = () => {
    return (
        <Section id="paintings">
            <SectionDivider />
            <SectionTitle main>Paintings</SectionTitle>
            <SectionText>Some of my paintings...</SectionText>
            <Gallery photos={paintings} />
        </Section>
    );
};

export default Paintings;