import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DriverResolveService} from './resolver/driver-resolve.service';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    // loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'regform1',
    loadChildren: () => import('./regform1/regform1.module').then( m => m.Regform1PageModule)
  },
  {
    path: 'drivform',
    // resolve: {
    //  special: DriverResolveService
    // },
    loadChildren: () => import('./drivform/drivform.module').then( m => m.DrivformPageModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./policies/policies.module').then( m => m.PoliciesPageModule)
  },
  {
    path: 'valuation',
    loadChildren: () => import('./valuation/valuation.module').then( m => m.ValuationPageModule)
  },
  {
    path: 'benefits',
    loadChildren: () => import('./benefits/benefits.module').then( m => m.BenefitsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'policysel',
    loadChildren: () => import('./policysel/policysel.module').then( m => m.PolicyselPageModule)
  },
  {
    path: 'novalact',
    loadChildren: () => import('./novalact/novalact.module').then( m => m.NovalactPageModule)
  },
  {
    path: 'novalpen',
    loadChildren: () => import('./novalpen/novalpen.module').then( m => m.NovalpenPageModule)
  },
  {
    path: 'yesvalact',
    loadChildren: () => import('./yesvalact/yesvalact.module').then( m => m.YesvalactPageModule)
  },
  {
    path: 'yesvalpenp',
    loadChildren: () => import('./yesvalpenp/yesvalpenp.module').then( m => m.YesvalpenpPageModule)
  },
  {
    path: 'yesvalpenv',
    loadChildren: () => import('./yesvalpenv/yesvalpenv.module').then( m => m.YesvalpenvPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'popoverserver',
    loadChildren: () => import('./popoverserver/popoverserver.module').then( m => m.PopoverserverPageModule)
  },
  {
    path: 'popduplic',
    loadChildren: () => import('./popduplic/popduplic.module').then( m => m.PopduplicPageModule)
  },
  {
    path: 'popduplic2',
    loadChildren: () => import('./popduplic2/popduplic2.module').then( m => m.Popduplic2PageModule)
  },
  {
    path: 'popsave',
    loadChildren: () => import('./popsave/popsave.module').then( m => m.PopsavePageModule)
  },
  {
    path: 'poppay1',
    loadChildren: () => import('./poppay1/poppay1.module').then( m => m.Poppay1PageModule)
  },
  {
    path: 'poppay2',
    loadChildren: () => import('./poppay2/poppay2.module').then( m => m.Poppay2PageModule)
  },
  {
    path: 'poppay3',
    loadChildren: () => import('./poppay3/poppay3.module').then( m => m.Poppay3PageModule)
  },
  {
    path: 'vehsel',
    loadChildren: () => import('./vehsel/vehsel.module').then( m => m.VehselPageModule)
  },
  {
    path: 'vehsel2',
    loadChildren: () => import('./vehsel2/vehsel2.module').then( m => m.Vehsel2PageModule)
  },
  {
    path: 'mcsel',
    loadChildren: () => import('./mcsel/mcsel.module').then( m => m.McselPageModule)
  },
  {
    path: 'mcsel2',
    loadChildren: () => import('./mcsel2/mcsel2.module').then( m => m.Mcsel2PageModule)
  },
  {
    path: 'regform2',
    loadChildren: () => import('./regform2/regform2.module').then( m => m.Regform2PageModule)
  },
  {
    path: 'profileinf',
    loadChildren: () => import('./profileinf/profileinf.module').then( m => m.ProfileinfPageModule)
  },
  {
    path: 'profileupd',
    loadChildren: () => import('./profileupd/profileupd.module').then( m => m.ProfileupdPageModule)
  },
  {
    path: 'popprof',
    loadChildren: () => import('./popprof/popprof.module').then( m => m.PopprofPageModule)
  },
  {
    path: 'respass',
    loadChildren: () => import('./respass/respass.module').then( m => m.RespassPageModule)
  },
  {
    path: 'poppass',
    loadChildren: () => import('./poppass/poppass.module').then( m => m.PoppassPageModule)
  },
  {
    path: 'styling',
    loadChildren: () => import('./styling/styling.module').then( m => m.StylingPageModule)
  },
  {
    path: 'transrepo',
    loadChildren: () => import('./transrepo/transrepo.module').then( m => m.TransrepoPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'whowe',
    loadChildren: () => import('./whowe/whowe.module').then( m => m.WhowePageModule)
  },
  {
    path: 'poplogin',
    loadChildren: () => import('./poplogin/poplogin.module').then( m => m.PoploginPageModule)
  },
  {
    path: 'sticker',
    loadChildren: () => import('./sticker/sticker.module').then( m => m.StickerPageModule)
  },
  {
    path: 'popdown',
    loadChildren: () => import('./popdown/popdown.module').then( m => m.PopdownPageModule)
  },
  {
    path: 'popnotdown',
    loadChildren: () => import('./popnotdown/popnotdown.module').then( m => m.PopnotdownPageModule)
  },
  {
    path: 'poppaymp',
    loadChildren: () => import('./poppaymp/poppaymp.module').then( m => m.PoppaympPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
