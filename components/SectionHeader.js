function SectionHeader({ header }) {
  return <h2 className="section-header">{header || "-- empty header --"}</h2>
}

export default SectionHeader