import Link from 'next/link';

import { AccordionTitleContainer, AccordionCollapseButtonContainer, AccordionCollapseButton } from './AccordionStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { AiOutlineCaretRight, AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

const Accordion = ({ title, content, id, isActive, toggleActive }) => {
    return (
        <Section id={id}>
            <SectionDivider />
            <Link href={`#${id}`} passHref>
                <AccordionTitleContainer onClick={toggleActive}>
                    <SectionTitle main>{ title }</SectionTitle>
                    <SectionTitle main>{ isActive ? <AiOutlineCaretDown /> : <AiOutlineCaretRight /> }</SectionTitle>
                </AccordionTitleContainer>
            </Link>
            { isActive && content }
            { isActive && 
            (<AccordionCollapseButtonContainer>
                <Link href={`#${id}`} passHref>
                    <AccordionCollapseButton onClick={toggleActive}>Collapse {title} <AiOutlineCaretUp /></AccordionCollapseButton>
                </Link>
            </AccordionCollapseButtonContainer>) }
        </Section>
    );
};

export default Accordion;