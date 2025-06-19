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

define("@widget/LAYOUT/bs-LinkAwareComponent-bc2eca6b.js",["exports","~/bs-FlyoutMenu-Component","~/c/bs-_rollupPluginBabelHelpers"],(function(e,t,i){"use strict";const{PUBLISH:n}=(global.Core||guac["@wsb/guac-widget-core"]).constants.renderModes;var o,s,c,a,r=(o=t.default,c=s=class extends(global.React||guac.react).Component{constructor(){super(...arguments),this.checkActiveLink=this.checkActiveLink.bind(this),this.state={isActive:!1}}componentDidMount(){this.checkActiveLink(),window.addEventListener("NavItemsResized",this.checkActiveLink,{passive:!0})}componentWillUnmount(){window.removeEventListener("NavItemsResized",this.checkActiveLink)}checkActiveLink(){const{renderMode:e,toggleId:t}=this.props;window.requestAnimationFrame((()=>{var i;let o=!1;const s=document.getElementById(t),c=s&&(s.querySelector('[data-ux="NavLinkActive"]')||s.querySelector('[data-ux="NavMoreMenuLinkActive"]')||s.querySelector('[data-ux="NavMoreMenuLinkNestedActive"]')),a=c&&c.closest("li");c&&"visible"===(null==a||null===(i=a.style)||void 0===i?void 0:i.visibility)&&(o=e===n?c.href.includes(window.location.pathname):window.location.pathname.includes(c.dataset.page)),this.setState({isActive:o})}))}render(){return(global.React||guac.react).createElement(o,i.a({},this.props,this.state))}},i._(s,"displayName",`WithActiveLinkDetection(${a=o,a.displayName||a.name||"Component"})`),i._(s,"propTypes",{renderMode:(global.PropTypes||guac["prop-types"]).oneOf(Object.values((global.Core||guac["@wsb/guac-widget-core"]).constants.renderModes)),toggleId:(global.PropTypes||guac["prop-types"]).string}),c);e.default=r,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-LinkAwareComponent-bc2eca6b.js.map


}
/*
     FILE ARCHIVED ON 08:20:42 Apr 20, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:01:56 Jun 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.596
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.01
  esindex: 0.013
  cdx.remote: 17.344
  LoadShardBlock: 308.328 (6)
  PetaboxLoader3.datanode: 340.188 (8)
  load_resource: 269.904 (2)
  PetaboxLoader3.resolve: 123.02 (2)
*/