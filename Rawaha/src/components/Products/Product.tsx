
import ProductBanner from "./Sections/ProductBanner"
import ProductSection from "./Sections/InnerSections/ProductSection"
import SliderReview from "../Shared/SliderReview"
import { useParams } from "react-router-dom"



export default function () {
    const productId = useParams()
    console.log(productId)
    return (
        <>
        <ProductBanner/>
        <ProductSection/>
        <SliderReview/>
        </>
    )
}