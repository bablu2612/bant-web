import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
:root{
   --common-font:  'Nunito', sans-serif;
   --orange:${(props) => props.theme.colors.orange};
   --purple:${(props) => props.theme.colors.purple};
   --black:${(props) => props.theme.colors.black};
   --pink: ${(props) => props.theme.colors.pink};
}
  * {
margin: 0;
padding: 0;
font-family: var(--common-font);
box-sizing: border-box; 
}
 
.row { 
    display: flex; 
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 1200px){
  .col-xl-10 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
}
.col-xl-2 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}
}
@media (min-width: 992px)
{
  .col-lg-9 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
}
.col-lg-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}
}
@media (min-width: 768px)
{
  .col-md-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
} 
.col-md-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}
 
}
.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

/* body section css */
 
#wrapper {
  background: #f7f7f5;
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  padding: 25px 25px 45px;
  -webkit-transition: margin-left .3s ease;
  -o-transition: margin-left .3s ease;
  transition: margin-left .3s ease;
  position: relative;
  z-index: 9;
  @media (min-width: 768px){
    margin-left: 230px;
  } 
}
@media (min-width: 768px){
 .active #wrapper {
    margin-left: 0;
}
.active #sidebar {
    transform: translateX(-230px);
}
}
button.MuiButton-containedPrimary {
   color: #fff;
    text-align: center;
    border: 2px solid transparent;
    display: inline-block;
    position: relative;
    z-index: 1;
    -webkit-transition: all .7s ease;
    transition: all .7s ease;
    border-radius: 3px;
    font-size: 16px; 
    background: var(--orange);
    box-shadow: none;
    font-family: var(--commont-font);
    width: 100%;
    max-width: 150px;
    &:hover{
      color:  var(--orange);
    border: 2px solid  var(--orange);
    background: transparent;
    }
    &:hover:before,&:hover::after {
    width: 0;
    opacity: 1;
    visibility: visible;
}
    &::before{
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      visibility: hidden;
      transition: all .7s ease;
      z-index: -1;
      border-radius: 3px;
    }
    &:after{
      position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all .7s ease;
    z-index: -1;
    }
    &:hover:before {
      background:  var(--orange);
  }
    &:hover:after{
      background:  var(--orange);
    }
}
.dash {
    background: var(--purple);
    padding: 10px 15px;
    border-radius: 5px;
    color: #fff;
}
/* body css remove */
body {
    overflow: hidden;
    padding: 0 !important;
}
p.errormsg {
    color: #f00;
    font-size: 14px;
    margin-top: 10px;
}
`;
export default GlobalStyle;
