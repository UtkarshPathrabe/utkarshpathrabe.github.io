import React from 'react';
import { SiCoursera, SiHackerrank, SiLinkedin } from 'react-icons/si';

import { SectionSubTitle } from '../../../styles/GlobalComponents';
import { CertificateContainer, CertificateLink, CertificateCard, Title, Text, HelperText } from './CertificatesStyles';
import CertificateData from '../../../constants/certificates';
import { reactSvgComponentToMarkupString } from '../../../utilities/utils';

const getOrganizationIcon = (org) => {
    switch (String(org).toLowerCase()) {
        case 'coursera':
            return SiCoursera;
        case 'hackerrank':
            return SiHackerrank;
        case 'linkedin':
            return SiLinkedin;
    }
};

const Certificates = () => (
  <div>
    <SectionSubTitle>Certificates ({CertificateData.length})</SectionSubTitle>
    <CertificateContainer>
      {CertificateData.map(({ name, organization, issue_date, certificate_id, certificate_url }) => (
        <CertificateLink key={name} href={certificate_url} target='_blank'>
          <CertificateCard backgroundSvg={reactSvgComponentToMarkupString(getOrganizationIcon(organization))}>
            <Title>{name}</Title>
            <div>
              <Text>{organization}</Text>
              <Text>Issue Date: {issue_date}</Text>
              {certificate_id && <HelperText>ID: {certificate_id}</HelperText>}
            </div>
          </CertificateCard>
        </CertificateLink>
      ))}
    </CertificateContainer>
  </div>
);

export default Certificates;
