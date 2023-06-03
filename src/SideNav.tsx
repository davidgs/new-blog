/* The MIT License (MIT)
 *
 * Copyright (c) 2022-present David G. Simmons
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import './hyde.css';
import React, { useState, useEffect } from 'react';
import {
  Form,
  OverlayTrigger,
  Tooltip,
  Button,
} from 'react-bootstrap';
import LogoImage from './assets/images/NewLinkerLogo.png';
import { Lightbulb, LightbulbFill, Gear, GearFill } from 'react-bootstrap-icons';
import { useToggle } from "./functions/useFunctions";
import PropTypes from 'prop-types';
import ImgElement from './components/ImgElement';
import spinner from './assets/images/loading.png';

export default function SideNav({
  callback,
  dark,
  propogateDarkMode,
}: {
  callback: (value: boolean) => void;
  dark: boolean;
  propogateDarkMode: (value: boolean) => void;
}) {
  const [showPasswd, setShowPasswd] = useState(false);
  const [darkMode, toggleDark, setDarkMode] = useToggle(dark);
  const [mainImage, setMainImage] = useState<string>('');
  const [updateText, setUpdateText] = useState<string>('');
  const [darkClass, setDarkClass] = React.useState('post-title header-stuff');

React.useEffect(() => {
  setDarkMode(dark);
  dark
    ? setDarkClass('post-title header-stuff-dark')
    : setDarkClass('post-title header-stuff');
}, [dark]);
  const passwdVisible = (show: boolean) => {
    setShowPasswd(show);
  };


  /*
   * Save the dark mode state
   */
  useEffect(() => {
    propogateDarkMode(darkMode);
  }, [darkMode]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <aside className="theme-base-09 sidebar">
        <p />
        <p />
        <div style={{ textAlign: 'center' }}>
          <a href="https://davidgs.com/" target="_blank" rel="noreferrer">
            {mainImage ? (
              <ImgElement
                byteString={mainImage}
                alt="UTM Linker Logo" width={20} height={20}              />
            ) : (
              <img
                src={LogoImage}
                alt="UTM Linker Logo"
                width={ '75%' }
                height={ 'auto' }
              />
            )}
          </a>
        </div>
        <article className="post">
          <p />
          <h5 style={{ textAlign: 'center' }}>
            QR Link Builder
          </h5>
          <p style={{ textAlign: 'center' }}>
            Create trackable links.
            <br />
            Design and add a custom QR Code to match your brand.
          </p>
        </article>
        <p />
        <div className="container sidebar-sticky">
          <Form>
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '-20px',
              }}
            >
              <div
                style={{
                  width: '10%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 300 }}
                  overlay={
                    <Tooltip id="config-tooltip">
                      Turn {darkMode ? 'off' : 'on'} Dark Mode
                    </Tooltip>
                  }
                >
                  <Button
                    type="button"
                    size={'sm'}
                    onClick={toggleDark}
                    className="btn-icon-only"
                    style={{
                      backgroundColor: '#0A1C2E',
                      borderColor: '#0A1C2E',
                    }}
                  >
                    {darkMode ? (
                      <LightbulbFill size={20} />
                    ) : (
                      <Lightbulb size={20} />
                    )}
                  </Button>
                </OverlayTrigger>
              </div>
              <div
                style={{
                  width: '80%',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                <div className="update-container" style={{ marginTop: '10px' }}>
                  {updateText !== '' && updateText.startsWith('Checking') ? (
                    <div style={{ textAlign: 'left' }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <img
                        src={spinner}
                        alt="spinner"
                        width="10px"
                        className="glyphicon-refresh-animate"
                        style={{ paddingTop: '-.25rem' }}
                      />{' '}
                      {updateText}
                    </div>
                  ) : (
                    <div id={updateText.length > 25 ? 'update-text' : 'udt'}>
                      {updateText}
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >

              </div>
            </div>
          </Form>
          <p
            style={{
              fontSize: '10px',
              textAlign: 'center',
              marginTop: '0.25rem',
            }}
          >
            &copy; <a href="https://davidgs.com/">David G. Simmons 2023</a>
            <br />
            All rights reserved
          </p>
        </div>
      </aside>
    </div>
  );
}

SideNav.propTypes = {
  callback: PropTypes.func.isRequired,
  dark: PropTypes.bool.isRequired,
  propogateDarkMode: PropTypes.func.isRequired,
};
