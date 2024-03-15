import { Link } from 'react-router-dom';
// import SampleAPI from '../../../SampleAPI.json'
export default function SingleItem(props:any) {
    let { id, imageSrc, price, sizes, title } = props;

    return (
        <>
      
        <div key={id} className="item w-[235px] text-sm">
        <Link to="/itemDetails"><img className="h-[250px] w-full" src={imageSrc} alt="items" /></Link>
        <div className="item-content ">
            <h1 className="title text-sm">{title}</h1>
            {price && (
            <p className="price flex gap-4 text-gray-500">
                {`Rs.${price.original}`} <span className="text-red-600">{`From Rs.${price.discounted}`}</span>
            </p>
            )}
            {sizes && sizes.length > 0 && (
            <div className="buttons flex gap-2 flex-wrap text-gray-500">
                {sizes.map((size:any, index:number) => (
                    <a key={index} className="px-1 border border-solid border-gray-500" href={size.href}>{size.label}</a>
                ))}
            </div>
            )}
        </div>
        </div>
        
           
        </>
    );
}