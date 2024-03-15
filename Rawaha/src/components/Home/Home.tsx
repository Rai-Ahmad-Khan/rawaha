import MainBanner from './Sections/Main-Banner'
import Feature from './Sections/Feature'
import Category from './Sections/Category'
import Category2 from './Sections/Category2'
import LastingImpression from './Sections/LastingImpression'
import BestSeller from './Sections/BestSeller'
import SliderReview from '../Shared/SliderReview'
import InformationSection from './Sections/InformationSection'
import ImpressionSection from './Sections/ImpressionSection'


function Home() {

    return (
      <>

        <MainBanner/>
        <Feature/>
        <Category SectionSize={1}/>
        <Category2/>
        <LastingImpression/>
        <BestSeller/>
        <SliderReview/>
        <InformationSection/>
        <ImpressionSection/>
      </>
    )
  }
  
  export default Home;