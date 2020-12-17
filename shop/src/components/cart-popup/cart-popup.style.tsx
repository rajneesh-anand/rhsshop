import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CartPopupButtonStyled = styled('button')`
 
  width: auto;
  display: flex;
  align-items: center;
  background-color: ${themeGet('colors.primary.regular', '#009E7F')};
  padding: 0;
  padding-left: 30px;
  border-radius: 60px;
  box-shadow: ${themeGet('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
 
  bottom: 50px;
  right: 50px;
  z-index: 999;

  @media (max-width: 767px) {
    width: calc(100% - 60px);
  
    padding: 2px 2px 2px 30px;
    bottom: 30px;
    right: 30px;
  }

  @media (min-width: 581px) {
    &:not(.fixedCartPopup) {
      display: none;
    }
  }
`;

const ButtonImgBox = styled('span')`
  color: ${themeGet('colors.white', '#ffffff')};
`;

const ItemCount = styled('span')`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: 12px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  padding-left: 5px;
  padding-right: 10px;
`;

const PriceBox = styled('span')`
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.xs', '12')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  margin-right: 2px;

  @media (max-width: 767px) {
    width: 90px;
    height: 100%;
    height: 41px;
    margin-left: auto;
    margin-right: 0;
  }
`;

const CartPopupBoxButton = styled('button')`
 height:38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 background-color:#ffffff;
 color:#0D1136;
 
  padding: 0;
 
  border: 0;
  outline: 0;
  cursor: pointer;
  
 
 
  @media (max-width: 580px) {
    display: none;
  }
`;

const TotalItems = styled('span')`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: #945151;
  padding-left: 5px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;

  svg {
    margin-right: 10px;
  }
`;

const PriceBoxAlt = styled('span')`
  width: auto;
  height: 35px;
  min-width: 80px;
  overflow: hidden;
  border-radius: ${themeGet('radii.base', '6px')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  margin: 0 10px 10px;
`;

export {
  ButtonImgBox,
  CartPopupButtonStyled,
  ItemCount,
  PriceBox,
  CartPopupBoxButton,
  PriceBoxAlt,
  TotalItems,
};
