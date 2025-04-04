
export default function OrderDetail({ order }) {
  if(!order) {
    return <p>Cargando orden</p>
  }
  return (
    <>
      <p>Allo! Soy OrderDetail</p>
      <p>{order.id}</p>
      <p>{order.buyer.email}</p>
      <p>{order.buyer.name}</p>
      <p>{order.buyer.phone}</p>
      {/* es necesario formatear la fecha o rompe la vista */}
      <p>{order.date ? order.date.toDate().toLocaleString() : undefined}</p>
    </>
  )
}