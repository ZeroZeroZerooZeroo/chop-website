import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 80px 0;
  }

  .btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 6px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }

  .btn-primary {
    background-color: ${props => props.theme.accent};
    color: white;
  }

  .btn-primary:hover {
    background-color: ${props => props.theme.primary};
    transform: translateY(-2px);
  }

  .btn-secondary {
    background-color: transparent;
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
  }

  .btn-secondary:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    color: ${props => props.theme.primary};
  }

  .section-subtitle {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 60px;
    color: ${props => props.theme.text};
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    .section {
      padding: 60px 0;
    }
    
    .section-title {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyles;