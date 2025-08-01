import Mealsearch from "./components/Mealsearch";


export default async function Meals({ searchParams }) {
     
    const query = await searchParams;

    const fetchMeals = async () =>{
        try{

            const res = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
            const data = await res.json();
            return data.meals;

        }
        catch (error){
            console.log(error)
            return [];
        }
    }

    const meals = await fetchMeals();

  return (
    <div className=' justify-items-center '>
        <Mealsearch/>
        <div className='grid grid-cols-5 gap-5 justify-items-center text-center'>
            {
                meals?.map((data)=>{
                    return(
                        <div key={data?.idMeal}>
                            <img className='w-50 h-50' src={data?.strMealThumb} alt="" />
                            <p className='text-2xl font-bold'>{data?.strMeal}</p>
                            <p>{data?.strCategory}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
