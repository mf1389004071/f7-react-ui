import Navbar from '../Navbar'

class TabsNavBar extends Navbar{
  

    constructor(props) {
      super(props);
    }
     
     
    render(){
      return  super.render();
    }
}

TabsNavBar.defaultProps = {
  title: 'Tabs'
}
module.exports = TabsNavBar