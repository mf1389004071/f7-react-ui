import React  from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import history from '../../history'

import AnimationPage from '../Page'
import classNames from 'classnames';
import Modals from 'react-ui/modals'
import List from 'react-ui/lists'

require('react-ui/resources/less/forms.less')
class PopoverPage extends AnimationPage{
	handleClickOpenPopoverMenu(e){
		// console.log('====handleClickOpenPopoverMenu==', this.context)
		e.preventDefault()
		var modal = Modals.popover(e.target)
		var href = function(path){
			history.push(path); 
			Modals.closeModal(modal);
		}
		let PopoverMenu = (props) => (
		<List>
			<a onClick={function(e){e.preventDefault(); href('/modals');}} className="list-button item-link">Modals</a>
            <Link to="/modals" className="list-button item-link">Popover</Link>
            <a href="tabs.html" className="list-button item-link">Tabs</a>
            <a href="panels.html" className="list-button item-link">Side Panels</a>
            <a href="list-view.html" className="list-button item-link">List View</a>
            <a href="forms.html" className="list-button item-link">Forms</a>
        </List>
		)
		
		ReactDOM.render(<PopoverMenu/>, modal.querySelector('.popover-inner'));
		modal.sizePopover()
	}
	render(){
		return (
			<div className={classNames( "page", this.props.className)}>
			    <div className="page-content">
			      <div className="content-block">
			        <p>Of course, Framework7 has Popovers. Popovers may be called on absolutely any element with dynamic positioning. Note that due to Apple guide lines it is not recommended to use popovers on iPhone, only on bigger screens (iPad), so on small screen it may have wrong positioning because it is not fit to screen. For iPhone it is recommended to use <Link to="modals">actions and modals</Link> instead. Try the "bars" icon on navbar, "menu" link on bottom toolbar, links and buttons in text below:</p>
			        <p><a href="#" onClick={this.handleClickOpenPopoverMenu.bind(this)} className="button open-popover">Open popover on me</a></p>
			        <p>Mauris fermentum neque et luctus venenatis. Vivamus a sem rhoncus, ornare tellus eu, euismod mauris. In porta turpis at semper convallis. Duis adipiscing leo eu nulla lacinia, quis rhoncus metus condimentum. Etiam nec malesuada nibh. Maecenas quis lacinia nisl, vel posuere dolor. Vestibulum condimentum, nisl ac vulputate egestas, neque enim dignissim elit, rhoncus volutpat magna enim a est. Aenean sit amet ligula neque. Cras suscipit rutrum enim. Nam a odio facilisis, elementum tellus non, <a href="#" className="open-popover" onClick={this.handleClickOpenPopoverMenu.bind(this)} >popover</a> tortor. Pellentesque felis eros, dictum vitae lacinia quis, lobortis vitae ipsum. Cras vehicula bibendum lorem quis imperdiet.</p>
			        <p>In hac habitasse platea dictumst. Etiam varius, ante vel ornare facilisis, velit massa rutrum dolor, ac porta magna magna lacinia nunc. Curabitur <a href="#"  onClick={this.handleClickOpenPopoverMenu.bind(this)} className="open-popover" >popover!</a> cursus laoreet. Aenean vel tempus augue. Pellentesque in imperdiet nibh. Mauris rhoncus nulla id sem suscipit volutpat. Pellentesque ac arcu in nisi viverra pulvinar. Nullam nulla orci, bibendum sed ligula non, ullamcorper iaculis mi. In hac habitasse platea dictumst. Praesent varius at nisl eu luctus. Cras aliquet porta est. Quisque elementum quis dui et consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed laoreet purus. Pellentesque eget ante ante.</p>
			        <p>Duis et ultricies nibh. Sed facilisis turpis urna, ac imperdiet erat venenatis eu. Proin sit amet faucibus tortor, et varius sem. Etiam vitae lacinia neque. Aliquam nisi purus, interdum in arcu sed, ultrices rutrum arcu. Nulla mi turpis, consectetur vel enim quis, facilisis viverra dui. Aliquam quis convallis tortor, quis semper ligula. Morbi ullamcorper <a href="#" onClick={this.handleClickOpenPopoverMenu.bind(this)} className="open-popover" >one more popover</a> massa at accumsan. Etiam purus odio, posuere in ligula vitae, viverra ultricies justo. Vestibulum nec interdum nisi. Aenean ac consectetur velit, non malesuada magna. Sed pharetra vehicula augue, vel venenatis lectus gravida eget. Curabitur lacus tellus, venenatis eu arcu in, interdum auctor nunc. Nunc non metus neque. Suspendisse viverra lectus sed risus aliquet, vel accumsan dolor feugiat.</p>
			      </div>
			    </div>
		  </div>
		)
	}
}


module.exports = PopoverPage