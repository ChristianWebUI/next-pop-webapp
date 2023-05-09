import Link from 'next/link'

const BotonBancolombia = ({ redirect = '#' }) => {
  return (
    <Link href={redirect} target="_self" className="bancolombia-link">
      <span className="custom-btn custom-btn-bancolombia">Bancolombia</span>
    </Link>
  )
}

export default BotonBancolombia
