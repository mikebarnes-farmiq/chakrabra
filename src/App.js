import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

import { extendTheme, ChakraProvider } from '@chakra-ui/react'
// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    100: '#82b0e8',
  },
}

const theme = extendTheme({ colors,
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'brand.100',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
        // 5. We can add responsive variants
        sm: {
          bg: 'teal.500',
          fontSize: 'md',
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'green', // default is gray
      },
    },
    Toast: {
      variants: {
      'yolo': {
          bg: 'brand.100',
          boxShadow: '0 0 2px 2px #efdfde',
        },
      },
    }
  },})




const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
      <ChakraProvider theme={theme}>
        <Router history={history}>
          <div id="app" className="d-flex flex-column h-100">
            <NavBar />
            <Container className="flex-grow-1 mt-5">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/external-api" component={ExternalApi} />
              </Switch>
            </Container>
            <Footer />
          </div>
        </Router>
      </ChakraProvider>

  );
};

export default App;
