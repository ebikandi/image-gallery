import React from 'react';
import styled from 'styled-components'

const NavigationWrapper = styled.div`
  &.nav--hidden {
    opacity: 0;
    visibility: hidden;
  }

  visibility: visible;
  transition: visibility 0s, opacity 0.5s linear;
  overflow:hidden;

  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: black;
  
  .nav__header, .nav__footer {
   flex-grow: 0;
   flex_shrink: 1;
   background-color: blue;
 }

 .nav__footer {
   text-align: center;
   color: white;
   text-transform: uppercase;
 }



 .nav__grid{
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    .nav__sidebar {
      flex-shrink: 1;
      flex-grow: 0;
      color: grey;
      padding: 0 20px;
      label {
        cursor: pointer;

        &:hover{
          color: white;
        }
      }
      
    }

    .nav__content{
      flex-grow: 1;
      text-align: center;
      height: 100%;
      background-image: url(${props => props.background});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
 }

`;

export const Navigation = (props) => (
  <NavigationWrapper className={`nav${props.isOpen ? '' : '--hidden'} `} background={props.isOpen ? props.currentImage.images.downsized_large.url : ''}>
    <div className="nav__header">
      <div className="nav__close" onClick={props.close}>Close</div>
    </div>
    <div className="nav__grid">
      <div className="nav__sidebar">
        <label>BCK</label>
      </div>
      <div className="nav__content" />
      <div className="nav__sidebar">
        <label>FWD</label>
      </div>
    </div>
    <div className=" nav__footer">
      <h3>{props.currentImage.title}</h3>
    </div>
  </NavigationWrapper>);