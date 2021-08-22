const Scroll = require('react-scroll');
const scroller = Scroll.scroller;

const MenuItem = props => <a onClick={(e)=> {
  e.preventDefault();
  let ref = e.target.getAttribute('href').substr(1);
  scroller.scrollTo(ref, {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: -30, // Scrolls to element + 50 pixels down the page
  })
}} href={`#${props.href}`} className="text-sm font-medium text-bluegray-400 hover:text-white">{props.title}</a>

export default MenuItem