
export default function SubFormContact() {


    
  return (
<article className="border-1 rounded-2xl p-10">
    <div className="flex flex-col justify-center items-center">
        <i className={ClassIcon} ></i>
        <div className="flex flex-col justify-center items-center">
            <h3>{name}</h3>
            <span>{phoneNumber}</span>
        </div>
    </div>
</article>
  )
}
