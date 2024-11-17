"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9444],{9444:(y,_,i)=>{i.r(_),i.d(_,{LoginPage:()=>w});var p=i(467),m=i(177),r=i(8326),a=i(4742),P=i(5079),g=i(5873),d=i(4011),n=i(4438),M=i(4729),C=i(1237),h=i(7795);function O(t,c){1&t&&(n.j41(0,"span",12),n.EFF(1,"Email is required"),n.k0s())}function E(t,c){1&t&&(n.j41(0,"span",12),n.EFF(1,"Your e-mail is invalid."),n.k0s())}function f(t,c){if(1&t&&n.DNE(0,O,2,0,"span",12)(1,E,2,0,"span",12),2&t){let l,e;const o=n.XpG();n.vxM(null!=(l=o.loginForm.get("email"))&&null!=l.errors&&l.errors.required?0:-1),n.R7$(),n.vxM(null!=(e=o.loginForm.get("email"))&&null!=e.errors&&e.errors.invalidEmail?1:-1)}}function v(t,c){1&t&&(n.j41(0,"span",12),n.EFF(1,"This field is required"),n.k0s())}function T(t,c){1&t&&(n.j41(0,"span",12),n.EFF(1,"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"),n.k0s())}function D(t,c){if(1&t&&n.DNE(0,v,2,0,"span",12)(1,T,2,0,"span",12),2&t){let l,e;const o=n.XpG();n.vxM(null!=(l=o.loginForm.get("password"))&&null!=l.errors&&l.errors.required?0:-1),n.R7$(),n.vxM(null!=(e=o.loginForm.get("password"))&&null!=e.errors&&e.errors.weakPassword?1:-1)}}let w=(()=>{var t;class c{constructor(e,o,s){this.authenticationService=e,this.router=o,this.toastController=s,this.loginForm=new r.gE({email:new r.MJ("",[r.k0.required,(0,d.Bj)()]),password:new r.MJ("",[r.k0.required,(0,d.lP)()])}),this.passwordType="password",this.passwordIcon="eye-off-outline",(0,P.a)({eyeOutline:g.ov$,eyeOffOutline:g.f_X})}ngOnInit(){}onToggleShowPassword(){"password"===this.passwordType?(this.passwordType="text",this.passwordIcon="eye-outline"):(this.passwordType="password",this.passwordIcon="eye-off-outline")}onSignIn(){this.authenticationService.signInWithEmailAndPassword(this.loginForm.value).then(()=>{this.router.navigate(["car"])}).catch(e=>{const s=this.getErrorMessage(e.code);this.errorToast(s)})}getErrorMessage(e){return"auth/invalid-credential"===e?"Email address or password is incorrect.":"An error occurred. Please try again later."}errorToast(e){var o=this;return(0,p.A)(function*(){yield(yield o.toastController.create({message:e,duration:3e3,position:"top",color:"danger",buttons:[{text:"Dismiss",role:"cancel"}]})).present()})()}navigateToRegister(){this.router.navigate(["/register"])}}return(t=c).\u0275fac=function(e){return new(e||t)(n.rXU(M.k),n.rXU(C.Ix),n.rXU(h.K_))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-login"]],standalone:!0,features:[n.aNF],decls:19,vars:7,consts:[[1,"login",3,"fullscreen"],[1,"ion-justify-content-center","ion-align-items-center",2,"height","100vh"],["size","12","size-md","6","size-lg","4"],[1,"form-container"],[3,"formGroup"],["label","E-mail","labelPlacement","stacked","placeholder","email@example.com","formControlName","email"],["label","Password","labelPlacement","stacked","placeholder","***********","formControlName","password",3,"type"],["id","icon-eye",3,"click","name"],[1,"container-button"],["size","medium",3,"click","disabled"],[1,"register-link"],[3,"click"],[1,"span-error"]],template:function(e,o){if(1&e&&(n.j41(0,"ion-content",0)(1,"ion-grid")(2,"ion-row",1)(3,"ion-col",2)(4,"div",3)(5,"form",4)(6,"ion-item"),n.nrm(7,"ion-input",5),n.k0s(),n.DNE(8,f,2,2),n.j41(9,"ion-item"),n.nrm(10,"ion-input",6),n.j41(11,"ion-icon",7),n.bIt("click",function(){return o.onToggleShowPassword()}),n.k0s()(),n.DNE(12,D,2,2),n.j41(13,"div",8)(14,"ion-button",9),n.bIt("click",function(){return o.onSignIn()}),n.EFF(15," Sign In "),n.k0s()(),n.j41(16,"div",10)(17,"a",11),n.bIt("click",function(){return o.navigateToRegister()}),n.EFF(18,"Don't have an account? Register here"),n.k0s()()()()()()()()),2&e){let s,u;n.Y8G("fullscreen",!0),n.R7$(5),n.Y8G("formGroup",o.loginForm),n.R7$(3),n.vxM(null!=(s=o.loginForm.get("email"))&&s.dirty?8:-1),n.R7$(2),n.Y8G("type",o.passwordType),n.R7$(),n.Y8G("name",o.passwordIcon),n.R7$(),n.vxM(null!=(u=o.loginForm.get("password"))&&u.dirty?12:-1),n.R7$(2),n.Y8G("disabled",o.loginForm.invalid)}},dependencies:[m.MD,r.YN,r.qT,r.BC,r.cb,a.bv,a.Jm,a.hU,a.W9,a.lO,a.iq,a.$w,a.uz,a.ln,a.Gw,r.X1,r.j4,r.JD],styles:["ion-content[_ngcontent-%COMP%]{--background: none;background-image:url(/assets/web-background.jpg);background-position:center center;background-repeat:no-repeat;background-size:cover}a[_ngcontent-%COMP%]{color:var(--ion-color-primary-tint);text-decoration:none;cursor:pointer}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.span-error[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-size:14px;display:block}.login[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{background-color:var(--ion-color-light);padding:40px;border-radius:8px}.login[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:30px}.login[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] + .span-error[_ngcontent-%COMP%]{margin-top:-25px;margin-bottom:10px}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]:last-child > ion-item[_ngcontent-%COMP%] > ion-input[_ngcontent-%COMP%]{width:95%}.login[_ngcontent-%COMP%]   #icon-eye[_ngcontent-%COMP%]{display:block;position:absolute;right:15px;top:20px}.login[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1rem}.login[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:80%;margin-bottom:20px}.login[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]{text-align:center}"]}),c})()}}]);