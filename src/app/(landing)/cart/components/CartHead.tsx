type IProps = {
  title: string
  actionBtnName?: string
}
const CartHead: React.FC<IProps> = ({ title, actionBtnName }) => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h2 className="font-sora text-2xl font-bold text-clr-0f md:text-[32px]">{title}</h2>
      {actionBtnName && (
        <button className="font-sora text-xl text-clr-0f md:text-2xl">{actionBtnName}</button>
      )}
    </div>
  )
}

export default CartHead
