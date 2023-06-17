import Card from "@/components/card/Card"


const ToolContainer = ({ productsData }) => {
  return (
    <div className="grid items-center justify-center w-full gap-4 p-5 mt-4 grid-view page-height md:md-page-height">
      {productsData.map((productData, index) => {
        return <Card key={index} productData={productData} />
      })}
    </div>
  )
}

export default ToolContainer