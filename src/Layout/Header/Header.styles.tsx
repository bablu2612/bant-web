import styled from "styled-components";

export const Headerstyles = styled.div`
        .logo-sec {
    max-width: 210px;
}

.app-sidebar__toggle {
    line-height: 57px;
    -webkit-transition: background-color .3s ease;
    -o-transition: background-color .3s ease;
    transition: background-color .3s ease;
    float: right;
}
.app-sidebar__toggle svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.app-sidebar__toggle svg rect{fill: rgb(40,36,61);-webkit-transition:.3s ease all;-o-transition:.3s ease all;transition:.3s ease all} 
.app-sidebar__toggle svg rect:nth-child(1){-webkit-transform:scaleX(.8);-ms-transform:scaleX(.8);transform:scaleX(.8)}
.app-sidebar__toggle:hover svg rect:nth-child(1){-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1)} 
.search-results, form.form-search .input-group {
    border: 1px solid #ccc;
}
 
.form-search {
    max-width: 500px;
    margin-left: auto;
}
 
#header {
    box-shadow: 0px 3px 21px rgb(194 161 254 / 42%);
    height: 60px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%; 
    display: block;
    background-color: #ffffff;
    z-index: 1030;
}
.form-search {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
 .input-group {
    margin-top: 9px;
    padding: 0 0 0 15px;
    border-radius: 20px;
    position: relative; 
    display: flex; 
    flex-wrap: wrap; 
    align-items: stretch;
    width: 100%;
}
}

#searchbtn {
    padding: 0px 20px 0 0;
    margin-top: 10px;
    color: #7f7f7f;
    background: #fff;
    font-size: 14px;
    font-weight: 500;
    -webkit-box-shadow: none;
    box-shadow: none;
    min-height: 40px;
    height: auto;
    border: 1px solid #ccc;
    border-left: 0;
    border-radius: 0 50px 50px 0;
    cursor: pointer;
    border: 0;
    margin-top: 0;
} 

input#ed-srch-term {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
    color: #7f7f7f;
    font-size: 14px;
    min-height: 40px;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: none;
    }
form.form-search .input-group {
    margin-top: 9px;
    padding: 0 0 0 15px;
    border-radius: 20px;
}

a.logo{ 
    display: block;  
    position: absolute;
    top: calc(50% + 1px);
    transform: translateY(-50%); 
    img {
    max-width: 100%;
    height: 50px;
    width: 100%;
    object-fit: contain;
}

}
.header_actions { 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
}
.icons {
    display: flex;
    align-items: center;
    gap: 10px;
    a{
        display: inline-flex;
        svg {
                color: #572B73;
            }
    }
}
`;
