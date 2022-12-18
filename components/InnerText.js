import { marked } from 'marked'

const InnerText = ({ text }) => <div 
  className="px-2 mb-12 text-center text-bluegray-300"
  dangerouslySetInnerHTML={{ __html: text || "-- empty --" }} 
/>

export default InnerText