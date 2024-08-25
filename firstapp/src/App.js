
import React from 'react';
import NavBar from './navBar.js';
import Furniture from './Furniture.js';
import FormNew from './FormNew.js';


export default class App extends React.Component
{
render()
{
  return <>
  <Furniture/>
  <NavBar/>
  <FormNew/>
  </>

}
}