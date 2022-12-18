import IconCard from '@/components/IconCard'

const CardsGrid = ({ cards, imgURL }) => {
  return <div className="grid grid-cols-2 gap-0 px-10 sm:grid-cols-3 sm:gap-2 md:gap-6">
  {
    cards.map(card => <IconCard 
      src={`${imgURL}${card?.Image?.path}`} alt={card.Alt}
      title={card.Title}
      text={card.Desc}
      key={`card_${card._id}`} />
    ) 
  }
  </div>
}

export default CardsGrid