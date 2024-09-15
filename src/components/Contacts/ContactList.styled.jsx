import styled from 'styled-components';

export const ContactListEl = styled.ul`
  min-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 10px;
  padding: 0;
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  border: 2px solid #3A441B;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
`;

export const ContactItemHeader = styled.h2`
  margin: 0;
  margin-bottom: auto;
`;

export const ContactItemText = styled.p`
  margin: 3px;
  font-weight: 600;
`;

export const ContactItemButton = styled.button`
  width: 100px;
  border: 2px solid #A8B970;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  padding: 3px;
  :hover {
    border: 2px solid #3A441B;
    box-shadow: -6px 16px 11px -9px rgba(31, 25, 25, 0.75);
  }
`;