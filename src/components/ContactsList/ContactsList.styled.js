import styled from '@emotion/styled';

export const ContactListMarkup = styled.ul`
  width: 1370px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: 1px solid #39bb96;
  padding: 10px;

  border-radius: 5px;
`;

export const ContactListHeader = styled.h2``;

export const ContactListText = styled.p`
  margin: 0;
  font-weight: 600;
  color: #0b5e18;
`;

export const ContactListButton = styled.button`
  padding: 8px 16px;
  background-color: #d0d2ea;
  color: #000000;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: #1d5a95;
    color: white;
  }
`;
