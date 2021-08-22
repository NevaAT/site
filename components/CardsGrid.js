import IconCard from './IconCard'

const crdIcons = require('../data/iconCards.json')
const CardsGrid = props => crdIcons.map(card => <IconCard src={card.src} alt={card.alt} title={card.title} text={card.text} key={`crd_${card.title}`} />)

export default CardsGrid