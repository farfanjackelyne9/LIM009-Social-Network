import{registry} from '../view_controller.js'

export default () => {
  
  const div2 = document.createElement('div');
 const regis=`
 <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
<img class="col-xs-12 zen" src="image/img-zen.jpeg" alt="google.img">
</section>
<section class="col-xs-12  col-sm-6 col-md-6 col-lg-6">
<div class="col-xs-12  col-sm-12 col-lg-12 icon-brain">
  <img class="col-xs-12 col-sm-12 col-lg-12 icon0" src="image/brain.png"/>
</div>
<span><p>Regístrate</p></span>
  <div class="col-xs-12 col-sm-12 col-lg-12 log">
  <input id="user_name" class="col-xs-12 col-lg-12 login_area measure fontsize" type="text"
    placeholder="   &#128100    Nombre y Apellido">
  </div>
  <div class="col-xs-12 col-lg-12 log">
    <input id="email" class="col-xs-12 col-lg-12 login_area measure fontsize" type="email"
      placeholder="   &#9993    Email ">
  </div>
  <div class="col-xs-12 col-lg-12 log">
    <input id="contraseña" class="col-xs-12 col-lg-12 login_area measure fontsize" type="password"
      placeholder="   &#128274    Password  ">
  </div> 
  <div class="button">
    <button class="col-xs-12 col-lg-12 btn fontsize" id="register" type="button">Summit</button>
  </div>
</section>`
 
//  `<section>
//  <div  class="col-xs-4  col-sm-4 col-lg-4></div>
//  <div class="col-xs-4  col-sm-4 col-lg-4>
//   <div class="col-xs-12  col-sm-12 col-lg-12 ">
//     <img class="col-xs-12 col-sm-12 col-lg-12 " src="image/brain.PNG"/>
//   </div>
//   <div class="col-xs-12 col-sm-12 col-lg-12 log">
//   <input id="user_name" class="col-xs-12 col-lg-12 login_area measure fontsize" type="email"
//     placeholder="   &#128100    Nombre y Apellido">
//   </div>
//    <div class="col-xs-12 col-sm-12 col-lg-12 log">
//      <input id="email" class="col-xs-12 col-lg-12 login_area measure fontsize" type="email"
//        placeholder="    &#9993    Email ">
//    </div>
//    <div class="col-xs-12 col-sm-12 col-lg-12 log">
//      <input id="contraseña" class="col-xs-12 col-lg-12 login_area measure fontsize" type="password"
//        placeholder="    &#128274    Password  ">
//    </div> 
//    <div class="button">
//      <button class="col-xs-6 col-sm-6 col-lg-6 btn fontsize" id="register" type="button">Sumit</button>
//    </div>
//    </div>
//    <div class="col-xs-4  col-sm-4 col-lg-4></div>
//    </section>`;
   
div2.innerHTML = regis;

const new_user = div2.querySelector('#register');
 new_user.addEventListener('click',registry);

  return div2
}