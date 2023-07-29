import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';
import LOGO from '../../public/images/logo.jpg'

interface VercelInviteUserEmailProps {
  first_name?: string;
  last_name?: string;
  email?: string;
  remark?: string;
}

const baseUrl = process.env.VERCEL_URL;

export const VercelInviteUserEmail = ({
  first_name,
  last_name,
  email,
  remark
}: VercelInviteUserEmailProps) => {

  return (
    <Html>
      <Head />
      <Preview>{remark || ''}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              {/* <Img
                src={`${baseUrl}/public/images/logo.jpg`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              /> */}
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              We Got an <strong>Inquiry</strong> from <strong>{first_name}</strong>
            </Heading>

            <Text className="text-black text-[14px] leading-[24px]">
              First Name : <strong> {first_name} </strong>,
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              Last Name : <strong> {last_name} </strong>,
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              Email : <strong> {email} </strong>,
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              Inquiry :  <strong> {remark} </strong>,
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
        
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;