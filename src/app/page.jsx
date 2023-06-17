import ToolContainer from "@/components/card/ToolContainer";
import productsData from "@/DB/product.json"

export default function Home() {
    return (
        <main className="flex items-center justify-center">
            <ToolContainer productsData={productsData} />
        </main>
    )
}