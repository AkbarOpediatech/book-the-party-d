type IProps = {
  title: string
  actionBtnName?: string
}
const CartHead: React.FC<IProps> = ({ title, actionBtnName }) => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h2 className="font-sora text-[32px] font-bold text-clr-0f">{title}</h2>
      {actionBtnName && <button className="font-sora text-2xl text-clr-0f">{actionBtnName}</button>}
    </div>
  )
}

export default CartHead
