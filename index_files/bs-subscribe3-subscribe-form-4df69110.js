var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

define("@widget/SUBSCRIBE/bs-subscribe3-subscribe-form-4df69110.js",["exports","@widget/SUBSCRIBE/c/bs-subscribe-form"],(function(e,t){"use strict";class o extends t.SubscribeForm{constructor(e){super(e)}render(){const{confirmationMessage:e,staticContent:o,category:a,section:c,background:s,couponConfirmationMessage:r}=this.props,{verificationText:i}=o,n=s&&s.image?"accent":a,g=s&&s.image?"overlay":c;if(this.state.formSubmitted)return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Base,{category:n,section:g},(global.React||guac.react).createElement(t.FormSuccessMessage,{formSuccessMessage:this.shouldShowCoupon()?r:e,verificationText:i,olsConfigHost:this.getOlsConfigHost(),showCoupon:this.shouldShowCoupon()}));const u=(global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Base,{category:n,section:g},(global.React||guac.react).createElement(u,{bottom:!1,inset:!0,"data-aid":t.DataAid.SUBSCRIBE_INNER_FORM_REND},(global.React||guac.react).createElement(u.Cell,null,this.renderDescriptionSection(),(global.React||guac.react).createElement(t.InnerForm,t._extends({formSubmitHost:this.getFormSubmitHost(),onSubmit:this.onSubmit},this.props)))))}}e.default=o})),"undefined"!=typeof window&&(window.global=window);


}
/*
     FILE ARCHIVED ON 09:39:43 Apr 20, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:02:11 Jun 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.704
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.014
  esindex: 0.016
  cdx.remote: 6.427
  LoadShardBlock: 122.413 (3)
  PetaboxLoader3.datanode: 109.766 (5)
  load_resource: 501.246 (2)
  PetaboxLoader3.resolve: 383.385 (2)
*/