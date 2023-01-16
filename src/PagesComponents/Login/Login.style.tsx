import styled from "styled-components";

export const Loginstyles = styled.div`
   top: 0;
    width: 100%;
    bottom: 0;
    opacity: 1;
    z-index: 999;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    background: #f5f5f5;
    overflow: hidden;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 50%;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        padding: 30px 15px;
        border-radius: 0 100% 100% 0;
        background: #fff;
        background: linear-gradient(132deg, #A31265, var(--purple), #1D619F);
        background-size: 400% 400%;
        animation: Gradient 15s ease infinite;
    }
    form.form {
    padding: 150px 70px 80px;
    text-align: left;
    position: relative;
    background: #fff;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    border-radius: 10px;
    max-width: 600px;
    margin: 0 auto;
    img {
    width: 100%;
    max-width: 200px;  
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translateX(-50%);
}

.MuiFormControl-root {
    width: 100%;
    max-width: 100%; 
    margin-bottom: 20px;
    input {
    padding: 20px 10px 10px 10px;
    font-size: 16px;
    outline: none; 
    color: var(--black);
    border-radius: 3px;
    font-weight: 500;
    border: 1px solid #f1f1f1;
    background: #fff;
    font-family: var(--common-font);
    height: auto;
}
label  {
    font-size: 14px;
    font-family: var(--common-font);
    font-weight: 500;
}
label.Mui-focused {
    color: var(--purple);
}
}
  h1 {
    font-size: 30px;
    font-weight: 600;
    color: var(--purple);
    margin: 0 auto 10px;
}
.MuiInputBase-formControl:before,.MuiInputBase-formControl:after {
    display: none;
}
h3 {
    margin: 0 0 35px;
    font-size: 23px;
    font-weight: 400;
    color:  var(--black);
}

}
/* Animate Background*/
@keyframes Gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
@keyframes cube {
    from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        opacity: 1;
    }
    to {
        transform: scale(20) rotate(960deg) translate(-50%, -50%);
        opacity: 0;
    }
}
`;
