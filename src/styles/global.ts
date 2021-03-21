import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --white: #FFFFFF;

    --text-red: #C0392B;
    --red-error: #F8D7DA;
    --border-error: #F5C6CB;
    --text-green: #28A745;

    --text-title: #303030;
    --text-body: #969CB3;
    --border-button: #d8d8d8d8;

    --orange-light: #F57F17;
    --orange-medium: #FF6F00;
    --orange-bold: #E65100;

    --purple-light: #D695FD;
    --purple-regular: #C25EFF;
    --purple-medium: #8A2AE3;
    --purple-bold: #8A05BE;
    --purple-bolder: #7F22A7;
    --purple-extra: #530082;

    --blue-regular: #6500AA;
    --blue-medium: #51009B;
    --blue-bold: #4A1485;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  // Font Size Default = 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body { background: var(--background); -webkit-font-smoothing: antialiased; font-family: 'Open Sans', sans-serif; font-weight: 300; height: auto; overflow: hidden; line-height: normal; }
  h1, h2, h3, h4, strong { font-family: 'Poppins', sans-serif; font-weight: 700; }
  button { cursor: pointer; font-family: 'Poppins', sans-serif; font-weight: 500; }
  [disabled] { opacity: 0.6; cursor: not-allowed; }

  // MODAL Transactions
  .react-modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
  }
  .react-modal-content {
    outline: none;
    position: relative;
    width: 100%;
    max-width: 560px;
    height: auto;
    margin: 0 auto;
    padding: 0;
    background: var(--background);
    border-radius: 0.75rem;
  }

  .btn-close-modal {
    outline: none;
    position: absolute;
    top: 2rem;
    right: 2.5rem;
    z-index: 1;
    width: auto;
    height: auto;
    border: 0;
    background: transparent;
    color: var(--white);
    transition: filter 0.25s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`