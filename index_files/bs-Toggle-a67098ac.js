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

define("@widget/LAYOUT/c/bs-Toggle-a67098ac.js",["exports","~/c/bs-_rollupPluginBabelHelpers"],(function(e,t){"use strict";function o(e,t,o){let s=e;for(;s;){const e=s.getAttribute&&s.getAttribute(t);if(e&&(void 0===o||e===o))return!0;s=s.parentNode}return!1}function s(e,t){return o(e,"id",t)}class l extends(global.React||guac.react).Component{constructor(){super(...arguments),this.handleClick=this.handleClick.bind(this),this.handleToggle=this.handleToggle.bind(this),this._id=(global._||guac.lodash).uniqueId(),this.state={open:!1}}componentDidMount(){this._link=(global.ReactDOM||guac["react-dom"]).findDOMNode(this),document.addEventListener("click",this.handleClick,!1)}componentWillUnmount(){document.removeEventListener("click",this.handleClick,!1)}shouldClose(e){const{closeAttr:t,ignoreCloseAttr:l,closeOnOutsideClick:n,toggleId:i}=this.props;let a=!0;return t?a=o(e.target,t):l&&(a=!o(e.target,l)),!a&&i&&n&&(a=!s(e.target,i)),a&&!s(e.target,this._id)}handleClick(e){const{open:t}=this.state;t&&this.shouldClose(e)&&(this.setState({open:!1}),e.stopPropagation())}handleToggle(e){e.preventDefault(),e.stopPropagation(),this.setState({open:!this.state.open})}componentDidUpdate(e,{open:t}){const{onChange:o}=this.props;t!==this.state.open&&o(this.state.open)}render(){const e=(global._||guac.lodash).omit(this.props,["onChange","style"]),{open:o}=this.state,{style:s,activeStyle:l,isActive:n}=this.props,i={...n?{...l}:{...s}},a=n?(global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Link.DropdownActive:(global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Link.Dropdown;return(global.React||guac.react).createElement(a,t.a({tag:"a",style:i,href:"#",onClick:this.handleToggle,"data-toggle-ignore":!0,id:this._id,role:"button","aria-expanded":o},e))}}l.propTypes={onChange:(global.PropTypes||guac["prop-types"]).func.isRequired,closeAttr:(global.PropTypes||guac["prop-types"]).string,ignoreCloseAttr:(global.PropTypes||guac["prop-types"]).string,activeStyle:(global.PropTypes||guac["prop-types"]).object,style:(global.PropTypes||guac["prop-types"]).object,closeOnOutsideClick:(global.PropTypes||guac["prop-types"]).bool,toggleId:(global.PropTypes||guac["prop-types"]).string,isActive:(global.PropTypes||guac["prop-types"]).bool},e.T=l})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-Toggle-a67098ac.js.map


}
/*
     FILE ARCHIVED ON 09:53:43 Apr 20, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:01:56 Jun 19, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.778
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.013
  esindex: 0.018
  cdx.remote: 11.448
  LoadShardBlock: 163.643 (3)
  PetaboxLoader3.datanode: 99.36 (5)
  PetaboxLoader3.resolve: 195.46 (3)
  load_resource: 194.41 (2)
*/