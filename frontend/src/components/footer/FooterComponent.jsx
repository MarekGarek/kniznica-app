import React from 'react';
import { Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { CustomFooter, FooterDivider } from './Footer.styles';
import { colors } from '../../styles/theme';

const { Title, Text } = Typography;

export const FooterComponent = () => {
  return (
    <CustomFooter>
      <div style={{ maxWidth: '75rem', margin: '0 auto', width: '100%' }}>
        <Row gutter={[32, 32]} justify="space-between">
          
          {/* 1. Stĺpec: O projekte */}
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ color: colors.textLight, marginBottom: '1.2rem' }}>
              Knižnica App
            </Title>
            <Text style={{ color: colors.textLightGray, display: 'block', lineHeight: '1.6' }}>
              Moderný systém na evidenciu kníh, čitateľov a rýchle online požičiavanie. Všetko na jednom mieste, dostupné pre každého knihomoľa.
            </Text>
          </Col>

          {/* 2. Stĺpec: Rýchle odkazy */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: colors.textLight, marginBottom: '1.2rem' }}>
              Rýchle odkazy
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link to="/">Domov</Link>
              <Link to="/books">Katalóg kníh</Link>
              <Link to="/readers">Čitatelia</Link>
              <Link to="/borrows">Prehľad výpožičiek</Link>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: colors.textLight, marginBottom: '1.2rem' }}>
              Otváracie hodiny
            </Title>
            <Text style={{ color: colors.textLightGray, display: 'block', marginBottom: '0.4rem' }}>
              <strong>Po - Pia:</strong> 8:00 - 18:00
            </Text>
            <Text style={{ color: colors.textLightGray, display: 'block' }}>
              <strong>So - Ne:</strong> Zatvorené
            </Text>
          </Col>

        </Row>

        {/* Spodná linka a Copyright */}
        <FooterDivider />
        
        <Row justify="space-between" align="middle" style={{ flexDirection: 'row' }}>
          <Col>
            <Text style={{ color: 'rgba(247, 244, 240, 0.4)', fontSize: '0.8rem' }}>
              &copy; {new Date().getFullYear()} Knižnica. Všetky práva vyhradené.
            </Text>
          </Col>
          <Col>
            <Text style={{ color: 'rgba(247, 244, 240, 0.4)', fontSize: '0.8rem' }}>
              Made by Web Developer
            </Text>
          </Col>
        </Row>
      </div>
    </CustomFooter>
  );
};

export default FooterComponent;