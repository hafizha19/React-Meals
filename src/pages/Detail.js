import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const {idMeal} = useParams();
    const [meal, setMeal] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
                const json = await response.json()
                console.log(json.meals[0])
                setMeal(json.meals[0])
            } catch (error) {
                console.log('error', error)
            }
        }
        fetchData(); 
    }, [])

    console.log(meal.strMealThumb)

    return (
        <div>
            <h3>Detail {meal.strMeal} </h3>
            <img style={{width:'400px'}} src={meal.strMealThumb} />
            <div style={{border: '1px solid black', margin: '10px 150px'}}>
                <p>
                    How to make:
                </p>
                <p style={{'padding-left': '100px', 'padding-right': '100px'}}>
                    {meal.strInstructions}
                </p>
            </div>
        </div>
    )
}

export default Detail