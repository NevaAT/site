import { marked } from 'marked'

const Chapter = ({ text }) => <article dangerouslySetInnerHTML={{__html: text && marked.parse(text) || '--empty--'}} />

export default Chapter