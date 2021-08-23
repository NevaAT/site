import IconCard from './IconCard'

// const crdIcons = require('../data/iconCards.json')
const CardsGrid = ({cards}) => cards.map(card => <IconCard 
  src={card.Image.url} alt={card.Alt}
  title={card.Title}
  text={card.Desc}
  key={`crd_${card.id}`} />
)

export default CardsGrid