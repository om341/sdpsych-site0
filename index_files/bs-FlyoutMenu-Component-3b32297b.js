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

define("@widget/LAYOUT/bs-FlyoutMenu-Component-3b32297b.js",["exports","~/c/bs-_rollupPluginBabelHelpers","~/c/bs-Toggle","~/c/bs-index2"],(function(e,o,t,p){"use strict";var a={toggleId:(global.PropTypes||guac["prop-types"]).string.isRequired,activeProps:(global.PropTypes||guac["prop-types"]).object,label:(global.PropTypes||guac["prop-types"]).string.isRequired,renderCustomIcon:(global.PropTypes||guac["prop-types"]).object,renderCustomContent:(global.PropTypes||guac["prop-types"]).oneOfType([(global.PropTypes||guac["prop-types"]).bool,(global.PropTypes||guac["prop-types"]).element,(global.PropTypes||guac["prop-types"]).node]),id:(global.PropTypes||guac["prop-types"]).string,isActive:(global.PropTypes||guac["prop-types"]).bool,enableNoOverlapDropdown:(global.PropTypes||guac["prop-types"]).bool,widgetId:(global.PropTypes||guac["prop-types"]).string,overrideIconStyle:(global.PropTypes||guac["prop-types"]).object,dataAid:(global.PropTypes||guac["prop-types"]).string,hasHover:(global.PropTypes||guac["prop-types"]).bool,navBarId:(global.PropTypes||guac["prop-types"]).string,parentId:(global.PropTypes||guac["prop-types"]).string,customToggleStyles:(global.PropTypes||guac["prop-types"]).object,renderMode:(global.PropTypes||guac["prop-types"]).string};class s extends(global.React||guac.react).Component{constructor(){super(...arguments),this.handleChange=this.handleChange.bind(this),this.state={open:!1}}handleChange(){this.setState({open:!this.state.open})}componentDidUpdate(e,{open:o}){const{enableNoOverlapDropdown:t,customToggleStyles:p}=this.props;if(o!==this.state.open){const{toggleId:o}=e,a=document.getElementById(o);a&&(t&&(a.style.top=`${this.handleDropdownOffsetChange()}px`),p?(global._||guac.lodash).merge(a.style,p[this.state.open?"open":"close"]):a.style.display=this.state.open?"block":"none")}}handleDropdownOffsetChange(){const{navBarId:e,parentId:o}=this.props,t=document.getElementById(e).getBoundingClientRect(),a=document.getElementById(o).getElementsByTagName("li")[0].getBoundingClientRect(),s=p.g();return t&&a?(t.height-(a.top-t.top))/s:0}render(){const{label:e,renderCustomIcon:p,id:a,isActive:n,overrideIconStyle:r,dataAid:l,hasHover:g,renderCustomContent:i}=this.props,{open:c}=this.state,d=(global._||guac.lodash).omit(this.props,Object.keys(s.propTypes).concat(["Component","renderMode"])),u=c?"180":"0",y={position:"relative",color:"inherit",...r},b=e?(global.React||guac.react).createElement("span",{style:{marginRight:"4px"}},e):null;return(global.React||guac.react).createElement(t.T,o.a({"data-aid":l,onChange:this.handleChange,isActive:n},d,c&&this.props.activeProps,{"data-edit-interactive":!0,"aria-haspopup":"menu"}),i||(global.React||guac.react).createElement("div",{style:{pointerEvents:g?"auto":"none",display:"flex",alignItems:"center"},"data-aid":l},b,(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Icon,{id:a,icon:p.name||"chevronDown",size:p.size||"small",minTarget:p.minTarget||!1,rotate:p.name?"":u,style:y})))}}s.propTypes=a,s.defaultProps={activeProps:{},label:"",renderCustomIcon:{},renderCustomContent:!1,hasHover:!1,dataAid:"NAV_DROPDOWN"},e.default=s,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-FlyoutMenu-Component-3b32297b.js.map


}
/*
     FILE ARCHIVED ON 08:20:42 Apr 20, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:01:57 Jun 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.801
  exclusion.robots: 0.036
  exclusion.robots.policy: 0.022
  esindex: 0.014
  cdx.remote: 20.513
  LoadShardBlock: 179.069 (3)
  PetaboxLoader3.datanode: 298.186 (5)
  load_resource: 431.653 (2)
  PetaboxLoader3.resolve: 238.872 (2)
*/