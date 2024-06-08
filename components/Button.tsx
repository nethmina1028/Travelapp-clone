type ButtonProps = {
    type: "button" | "submit" ;
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
    
}


function button({ type, title, icon, variant,full}:ButtonProps) {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
       type={type}>
        {icon && <img src={icon} alt="title" width={22} height={22} />}
        <label className="bold-16 whitespace-nowrap cursor-pointer ">{title}</label>
    </button>
  )
}

export default button