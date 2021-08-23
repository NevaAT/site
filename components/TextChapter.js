import marked from 'marked'

const Chapter = ({text}) => <div dangerouslySetInnerHTML={{__html: text && marked(text) || '--empty--'}}></div>

export default Chapter