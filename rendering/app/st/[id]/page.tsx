export default async function st(params: Promise<{id: string}>){
    const {id}=await params
    return <> {id}</>

}